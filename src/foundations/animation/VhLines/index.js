import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const getRandom = (a, b) => Math.random() * (b - a) + a;

export default function VhLines({ width, height }) {
  useEffect(() => {
    const app = new App();
  }, []);
  return (
    <div
      id="CanvasWrapper2"
      style={{
        width,
        height,
        background: '#111734',
        zIndex: '-3',
        position: 'absolute',
        overflow: 'hidden',
      }}
    />
  );
}

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.wrapper = document.getElementById('CanvasWrapper2');
    this.wrapper.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    console.log(this.wrapper.clientHeight);
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    console.log(this.stageHeight);

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.ctx.scale(1, 1);
    this.lineNumber = 5;
    this.setNumber = 3;
    this.lineSets = [];

    console.log(this.stageHeight, this.stageWidth);
    for (let i = 0; i < this.lineNumber; i += 1) {
      this.lineSets.push(
        new LineSet({ x: 30, y: 30 }, { x: 400, y: 400 }, 20, 1, 0.3),
        new LineSet({ x: -100, y: this.stageHeight }, { x: this.stageWidth - 3, y: 50 }, 20, 1.5, 0.3),
      );
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    for (let i = 0; i < this.lineSets.length; i += 1) {
      this.lineSets[i].draw(this.ctx);
    }

    // this.starSet.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

class LineSet {
  constructor(start, end, divideInterval, cycle, speed) {
    this.start = start;
    this.end = end;
    this.time = 0;
    this.cycle = cycle;
    this.speed = speed;
    this.interval = { x: this.end.x - this.start.x, y: this.end.y - this.start.y };
    this.divider = Math.ceil((Math.abs(this.interval.x) + Math.abs(this.interval.y)) / divideInterval);
    this.divideRange = {
      min: {
        x: this.interval.x / this.divider,
        y: this.interval.y / this.divider,
      },
      max: {
        x: (4 * this.interval.x) / this.divider,
        y: (4 * this.interval.y) / this.divider,
      },
    };

    this.init();
  }

  init() {
    this.dividerSet = [];
    let horizontal = Math.floor(Math.random() * 2);
    let tempStart = this.start;
    let tempEnd;
    for (let i = 0; i < this.divider; i += 1) {
      if (horizontal) {
        tempEnd = { x: tempStart.x + getRandom(this.divideRange.min.x, this.divideRange.max.x), y: tempStart.y };
      } else {
        tempEnd = { x: tempStart.x, y: tempStart.y + getRandom(this.divideRange.min.y, this.divideRange.max.y) };
      }
      this.dividerSet.push(new SingleLine(
        { x: tempStart.x, y: tempStart.y },
        { x: tempEnd.x, y: tempEnd.y },
      ));

      tempStart.x = tempEnd.x - getRandom(0, 3);
      tempStart.y = tempEnd.y - getRandom(0, 3);
      horizontal = 1 - horizontal;
    }
  }

  draw(ctx) {
    this.time += 1;
    this.realIndex = Math.floor(this.time * this.speed);
    if (this.time === (this.divider * this.cycle) / this.speed) {
      this.time = 0;
    }

    for (let i = this.realIndex; i < Math.min(this.realIndex + 8, this.divider); i += 1) {
      this.dividerSet[i].draw(ctx);
    }
  }
}

class SingleLine {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.strokeWidth = getRandom(0.1, 0.3);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.start.x, this.start.y);
    ctx.lineTo(this.end.x, this.end.y);
    ctx.lineWidth = this.strokeWidth;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}

VhLines.propTypes = {

};
