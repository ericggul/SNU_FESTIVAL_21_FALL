import React, { useEffect } from 'react';

export default function WaveCanvas() {
  useEffect(() => {
    const wave = new App();
  }, []);

  return (
    <div
      id="CanvasWrapper"
      style={{ width: '50vw', height: '50vh' }}
    />
  );
}

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.wrapper = document.getElementById('CanvasWrapper');
    this.wrapper.appendChild(this.canvas);

    const isMobile = document.body.clientWidth < 768;
    this.waveGroup = new WaveGroup(isMobile ? 5 : 6);

    if (!isMobile) {
      window.addEventListener('resize', this.resize.bind(this), false);
    }
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    // TODO: pixel ratio
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.03;
    this.cur = index;
    this.max = Math.random() * 50 + 20;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + (Math.sin(this.cur) * this.max);
  }
}

class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 1.2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [];

    for (let i = 0; i < this.totalPoints; i += 1) {
      this.points[i] = new Point(
        this.index + i,
        this.pointGap * i,
        this.centerY,
      );
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }
      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}

class WaveGroup {
  constructor(totalPoints) {
    this.totalWaves = 3;
    this.totalPoints = totalPoints;

    this.color = ['rgba(255, 0, 0, 0.4)', 'rgba(255, 255, 0, 0.4)', 'rgba(0, 255, 255, 0.4)'];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i += 1) {
      this.waves[i] = new Wave(
        i,
        this.totalPoints,
        this.color[i],
      );
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i += 1) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i += 1) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}