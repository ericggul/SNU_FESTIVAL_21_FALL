import React, { useEffect } from 'react';

export default function Lumination({ width, height }) {
  useEffect(() => {
    const app = new App();
  }, []);
  return (
    <div
      id="CanvasWrapper"
      style={{
        width,
        height,
        background: '#111734',
        zIndex: '-3',
        position: 'absolute',
        top: '-1.5rem',
        overflow: 'hidden',
      }}
    />
  );
}
const getRandom = (a, b) => Math.random() * (b - a) + a;

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.wrapper = document.getElementById('CanvasWrapper');
    this.wrapper.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.starSet = new StarSet(this.stageWidth, this.stageHeight, 1, ['#white'], [1, 3], [300, 500]);
    this.starSet2 = new StarSet(this.stageWidth, this.stageHeight, 1, ['white'], [3, 4], [1000, 2000]);
    this.ctx.scale(1, 1);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.starSet.draw(this.ctx);
    this.starSet2.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

class Star {
  constructor(x, y, start, delta, radius) {
    this.x = x;
    this.y = y;
    this.start = start;
    this.delta = delta;
    this.halfDelta = Math.floor(delta / 2);
    this.time = 0;
    this.radius = 0;
    this.targetRadius = radius;
  }

  update() {
    this.time += 1;
    this.radius = Math.max((this.time - this.start) * (this.delta + this.start - this.time), 0) * this.targetRadius;
  }
}

class TwiceStar {
  constructor(x, y, start, delta, radius) {
    this.x = x;
    this.y = y;
    this.start = start;
    this.delta = delta;
    this.time = 0;
    this.radius = 0;
    this.targetRadius = radius;

    this.initialTime = getRandom(1 / 12, 1 / 4);
    this.secondRadius = getRandom(1 / 2, 1);
  }

  update() {
    this.time += 1;
    this.x += getRandom(-0.1, 0.1);

    if (this.time > this.start) {
      this.radius = Math.max((this.time - this.start) * (this.delta + this.start - this.time), 0) * 4 / (this.delta ** 2) * this.targetRadius;
    }
  }
}

class StarSet {
  constructor(stageWidth, stageHeight, sizeIndex, colorSet, startTimeRange, intervalTimeRange) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.sizeIndex = sizeIndex;
    this.colorSet = colorSet;
    this.startTimeRange = startTimeRange;
    this.intervalTimeRange = intervalTimeRange;
    this.reset();
  }

  reset() {
    this.time = 0;
    this.x = getRandom(0, this.stageWidth * (1 - this.sizeIndex));
    this.y = getRandom(0, this.stageHeight * (1 - this.sizeIndex));
    this.width = this.stageWidth * this.sizeIndex;
    this.height = this.stageHeight * this.sizeIndex;
    this.number = 100;
    this.star_list = [];
    this.init();
  }

  init() {
    this.star_list = [];
    for (let i = 0; i < this.number; i += 1) {
      this.star_list.push(
        new TwiceStar(
          getRandom(this.x, this.x + this.width),
          getRandom(this.y, this.y + this.height),
          getRandom(this.startTimeRange[0], this.startTimeRange[1]),
          getRandom(this.intervalTimeRange[0], this.intervalTimeRange[1]),
          getRandom(0.2, 1),
        ),
      );
    }
  }

  draw(ctx) {
    this.time += 1;
    for (let i = 0; i < this.number; i += 1) {
      ctx.beginPath();
      this.star_list[i].update();
      const currentStar = this.star_list[i];
      ctx.arc(currentStar.x, currentStar.y, currentStar.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.colorSet[Math.floor(getRandom(0, this.colorSet.length))];
      ctx.fill();
      ctx.closePath();
    }
    if (this.time > this.startTimeRange[1] + this.intervalTimeRange[1]) {
      this.reset();
    }
  }
}

Lumination.propTypes = {

};
