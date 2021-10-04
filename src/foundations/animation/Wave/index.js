import React, { useEffect } from 'react';

export default function WaveCanvas() {
  useEffect(() => {
    const wave = new App();
  }, []);

  return (
    <div
      id="CanvasWrapper"
      style={{ width: '100vw', height: '100vh' }}
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
    this.waveGroup = new WaveGroup(isMobile ? 6 : 10);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.ctx.scale(1, 1);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

class Point {
  constructor(index, x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fixedY = y;
    this.speed = 0.025;
    this.cur = index;
    this.max = Math.random() * 50 + width * 0.025;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + (Math.sin(this.cur) * this.max);
  }
}

class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = Math.ceil(Math.random() * (totalPoints) + totalPoints * 0.5);
    this.color = color;
    this.points = [];

    document.addEventListener('click', this.onClick.bind(this), false);
  }

  onClick(e) {
    this.clickedPosition = { x: e.pageX, y: e.pageY - 65 };
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 1.25;

    this.pointGap = this.stageWidth * 1.2 / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [];

    for (let i = 0; i < this.totalPoints; i += 1) {
      this.points[i] = new Point(
        this.index + i,
        this.pointGap * i - this.stageWidth * 0.1,
        this.centerY,
        this.stageWidth, this.stageHeight,
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
      let changedY = cy;

      if (this.clickedPosition && Math.abs(cx - this.clickedPosition.x) < this.stageWidth * 0.03) {
        changedY = this.clickedPosition.y;
        this.clickedPosition.y += (cy - this.clickedPosition.y) * 0.03;
      }

      ctx.quadraticCurveTo(prevX, prevY, cx, changedY);

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
    this.totalWaves = 20;
    this.totalPoints = totalPoints;

    this.color = [
      'rgba(210, 208, 234, 0.6)',
      'rgba(197, 197, 234, 0.4)',
      'rgba(181, 214, 232, 0.5)',
      'rgba(176, 214, 237, 0.5)',
      'rgba(195, 210, 235, 0.5)',
      'rgba(165, 210, 245, 0.4)',
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i += 1) {
      this.waves[i] = new Wave(
        i,
        this.totalPoints,
        this.color[Math.floor(Math.random() * this.color.length)],
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
