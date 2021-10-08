import React, { useEffect } from 'react';

export default function WaveCanvas() {
  useEffect(() => {
    const wave = new App();
  }, []);

  return (
    <div
      id="CanvasWrapper"
      style={{
        position: 'absolute', width: '100vw', height: '100vh', background: '#14122D',
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
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.wheelSets = new WheelSets(this.stageWidth, this.stageHeight);
    // this.ctx.globalCompositeOperation = 'color-burn';
    this.ctx.globalCompositeOperation = 'saturation';
    this.ctx.scale(1, 1);

    this.wheelSets.draw(this.ctx);
  }
}

class CirclePoint {
  constructor(width, height, r) {
    this.width = width;
    this.height = height;
    this.r = r;
    this.init();
  }

  init() {
    this.x = getRandom(0, this.width);
    this.y = getRandom(0, this.height);
  }
}

class Wheel {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;

    this.color = color;
    this.points = [];
    this.totalPoints = 8;
    this.pointRadius = this.width < 700 ? 120 : 350;
    this.init();
  }

  init() {
    this.points = [];

    for (let i = 0; i < this.totalPoints; i += 1) {
      this.points.push(new CirclePoint(
        this.width,
        this.height,
        this.pointRadius,
      ));
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.points.length; i += 1) {
      ctx.beginPath();
      ctx.arc(this.points[i].x, this.points[i].y, this.points[i].r, 0, Math.PI * 2, false);
      const g = ctx.createRadialGradient(
        this.points[i].x,
        this.points[i].y,
        this.points[i].r * 0.2,
        this.points[i].x,
        this.points[i].y,
        this.points[i].r,
      );
      g.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.5)`);
      g.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
      ctx.fillStyle = g;

      ctx.fill();
      ctx.closePath();
    }
  }
}

class WheelSets {
  constructor(stageWidth, stageHeight) {
    this.width = stageWidth;
    this.height = stageHeight;
    this.totalWheels = 10;
    this.wheels = [];
    this.init();
  }

  init() {
    this.wheels = [];
    for (let i = 0; i < this.totalWheels; i += 1) {
      this.wheels.push(new Wheel(
        this.width, this.height,
        { r: getRandom(20, 55), g: getRandom(18, 40), b: getRandom(45, 110) },
      ));
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWheels; i += 1) {
      this.wheels[i].draw(ctx);
    }
  }
}
