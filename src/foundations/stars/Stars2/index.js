import React, { useEffect } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import * as S from './styles';

function Stars2({
  width, height, color, number, delay = 1, theme,
}) {
  useEffect(() => {
    const app = new App(color, number, delay);
  }, []);
  return (
    <div
      id="CanvasWrapper"
      style={{
        width,
        height,
        background: '#111734',
        zIndex: '-3',
        position: 'fixed',
        overflow: 'hidden',
      }}
    />
  );
}
export default withTheme(Stars2);

const getRandom = (a, b) => Math.random() * (b - a) + a;

class App {
  constructor(color, number, delay) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.wrapper = document.getElementById('CanvasWrapper');
    this.wrapper.appendChild(this.canvas);
    this.color = color;
    this.number = number;

    this.delay = delay;

    this.resize();
    window.addEventListener('resize', this.resize.bind(this), false);

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.starSet = new StarSet(this.stageWidth, this.stageHeight, 1, this.color, [1 * this.delay, 3 * this.delay], [200, 800], this.number);
    this.starSet2 = new StarSet(this.stageWidth, this.stageHeight, 1, this.color, [3 * this.delay, 8 * this.delay], [1000, 2000], this.number);
    this.ctx.scale(1, 1);

    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.starSet.draw(this.ctx);
    this.starSet2.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
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
    this.secondRadius = getRandom(1 / 3, 1);
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
  constructor(stageWidth, stageHeight, sizeIndex, color, startTimeRange, intervalTimeRange, number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.sizeIndex = sizeIndex;
    this.color = color;
    this.startTimeRange = startTimeRange;
    this.intervalTimeRange = intervalTimeRange;
    this.number = number;
    // this.number = Math.ceil(this.stageWidth * this.stageHeight / 5000);
    this.reset();
  }

  reset() {
    this.time = 0;
    this.x = getRandom(0, this.stageWidth * (1 - this.sizeIndex));
    this.y = getRandom(0, this.stageHeight * (1 - this.sizeIndex));
    this.width = this.stageWidth * this.sizeIndex;
    this.height = this.stageHeight * this.sizeIndex;
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
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
    if (this.time > this.startTimeRange[1] + this.intervalTimeRange[1]) {
      this.reset();
    }
  }
}

Stars2.propTypes = {

};
