import React, { useEffect } from 'react';

export default function WaveCanvas() {
  useEffect(() => {
    const wave = new App();
  }, []);

  return (
    <div
      id="CanvasWrapper"
      style={{ width: '100vw', height: '70vh', background: 'black' }}
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

    const isMobile = document.body.clientWidth < 768;

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
    this.ctx.globalCompositeOperation = 'color-burn';
    // this.ctx.globalCompositeOperation = 'saturation';
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
  constructor(x, y, theta, thetaSpeed, initialRadius, r, speed) {
    this.x = x;
    this.y = y;
    this.theta = theta;
    this.thetaSpeed = thetaSpeed;
    this.initialRadius = initialRadius;
    this.r = r;
    this.speed = speed;
    this.init();
  }

  init() {
    this.x += this.initialRadius * Math.cos(this.theta);
    this.y += this.initialRadius * Math.sin(this.theta);
  }

  update() {
    this.theta += this.thetaSpeed;
    // this.r += this.speed * 0.01;
    this.x += this.speed * Math.cos(this.theta);
    this.y += this.speed * Math.sin(this.theta);
  }
}

class Wheel {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.points = [];
    this.totalPoints = 15;
    this.initialRadius = getRandom(300, 400);
    this.pointRadius = 170;
    this.thetaSpeed = getRandom(0.01, 0.02);
    this.radSpeed = this.thetaSpeed * 50;
    this.init();
  }

  init() {
    this.points = [];
    this.deltaT = (2 * Math.PI) / this.totalPoints;

    for (let i = 0; i < this.totalPoints; i += 1) {
      this.points.push(new CirclePoint(
        this.x,
        this.y,
        this.deltaT * i,
        this.thetaSpeed,
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
      console.log(this.color);
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
    this.totalWheels = 40;
    this.wheels = [];
    this.init();
  }

  init() {
    this.wheels = [];
    for (let i = 0; i < this.totalWheels; i += 1) {
      this.wheels.push(new Wheel(
        getRandom(0, this.width), getRandom(0, this.height), { r: getRandom(150, 250), g: getRandom(150, 250), b: getRandom(150, 250) },
      ));
    }
  }

  animate(ctx) {
    for (let i = 0; i < this.totalWheels; i += 1) {
      this.wheels[i].draw(ctx);
    }
  }
}
