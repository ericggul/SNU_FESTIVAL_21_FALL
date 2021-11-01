import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Lumination() {
  useEffect(() => {
    const app = new App();
  }, []);
  return (
    <div
      id="CanvasWrapper"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
export default Lumination;

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
    this.starSet = new StarSet(this.stageWidth, this.stageHeight, 1, '#F9E0B2');
    this.ctx.scale(1, 1);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.starSet.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

class Star {
  constructor(x, y, start, delta, radius) {
    this.x = x;
    this.y = y;
    this.start = start;
    this.delta = delta;
    this.time = 0;
    this.radius = 0;
    this.targetRadius = radius;
  }

  update() {
    this.time += 1;
    if (this.time === Math.floor(this.start)) {
      this.radius = this.targetRadius;
    }
    if (this.time > this.start) {
      this.radius -= (this.targetRadius * 1.5) / this.delta;
      this.radius = Math.max(this.radius, 0);
    }
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

    this.initialTime = getRandom(1 / 6, 1 / 2);
    this.secondRadius = getRandom(1 / 2, 1);
  }

  update() {
    this.time += 1;
    if (this.time === Math.floor(this.start)) {
      this.radius = this.targetRadius;
    }
    if (this.time === Math.floor(this.start + this.delta * this.initialTime)) {
      this.radius = this.targetRadius;
    }
    if (this.time === Math.floor(this.start + this.delta)) {
      this.radius = this.targetRadius * this.secondRadius;
    }
    if (this.time > this.start) {
      this.radius -= (this.targetRadius * 1.5) / this.delta;
      this.radius = Math.max(this.radius, 0);
    }
  }
}

class StarSet {
  constructor(stageWidth, stageHeight, sizeIndex, color) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.sizeIndex = sizeIndex;
    this.color = color;
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
          getRandom(15, 30),
          getRandom(50, 100),
          getRandom(2, 4),
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
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
    if (this.time > 360) {
      this.reset();
    }
  }
}

Lumination.propTypes = {

};
