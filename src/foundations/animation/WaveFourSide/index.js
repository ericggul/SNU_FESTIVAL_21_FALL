import React, { useEffect } from 'react';

export default function WaveCanvas() {
  useEffect(() => {
    const wave = new App();
  }, []);

  return (
    <div
      id="CanvasWrapper"
      style={{
        position: 'absolute', width: '100vw', height: '100vh', background: 'black',
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

    this.wheelSets = new WheelSets(this.stageWidth, this.stageHeight);
    // this.ctx.globalCompositeOperation = 'color-burn';
    this.ctx.globalCompositeOperation = 'saturation';
    this.ctx.scale(1, 1);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    // this.ctx.fillStyle = 'black';
    // this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    this.wheelSets.animate(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

class CirclePoint {
  constructor(width, height, theta, initialRadius, r, speed) {
    this.width = width;
    this.height = height;

    this.theta = theta;
    this.initialRadius = initialRadius;
    this.r = r;
    this.speed = speed;
    this.init();
  }

  init() {
    this.x = getRandom(0, this.width);
    this.y = getRandom(0, this.height);
  }

  update() {
    this.x += this.speed * Math.cos(this.theta);
    this.y += this.speed * Math.sin(this.theta);
    if (this.x > this.width || this.x < 0) {
      this.theta = Math.PI - this.theta;
    }
    if (this.y > this.height || this.y < 0) {
      this.theta = -this.theta;
    }
  }
}

class Wheel {
  constructor(width, height, color, pointRadius) {
    this.width = width;
    this.height = height;

    this.color = color;
    this.points = [];
    this.totalPoints = 8;
    this.initialRadius = getRandom(300, 800);
    this.pointRadius = this.width < 700 ? 150 : 300;
    this.radSpeed = getRandom(0.5, 1);
    this.init();
  }

  init() {
    this.points = [];
    this.deltaT = (2 * Math.PI) / this.totalPoints;

    for (let i = 0; i < this.totalPoints; i += 1) {
      this.points.push(new CirclePoint(
        this.width,
        this.height,

        this.deltaT * i,
        this.initialRadius,
        this.pointRadius,
        this.radSpeed,
      ));
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.points.length; i += 1) {
      ctx.beginPath();

      this.points[i].update();

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
    this.totalWheels = this.width > 768 ? 30 : 20;
    this.wheels = [];
    this.init();
  }

  init() {
    this.wheels = [];
    const colorSet = [{ r: 33, g: 21, b: 73 }, { r: 36, g: 26, b: 87 }];
    for (let i = 0; i < this.totalWheels; i += 1) {
      this.wheels.push(new Wheel(
        this.width, this.height,
        { r: getRandom(20, 50), g: getRandom(18, 36), b: getRandom(45, 101) },
        this.width > 768 ? 150 : 80,
      ));
    }
  }

  animate(ctx) {
    for (let i = 0; i < this.totalWheels; i += 1) {
      this.wheels[i].draw(ctx);
    }
  }
}
