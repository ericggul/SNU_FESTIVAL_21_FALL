import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ClosingFestival from '@I/jpg/closing-festival.jpg';
import * as S from './styles';

function getRandom(a, b) { return Math.random() * (b - a) + a; }

function LightChange({
  image, index = 0, reRender = true, backgroundColor = 'black',
}) {
  useEffect(() => {
    if (reRender) {
      const render = new App(image, index, backgroundColor);
    }
    return () => {
      const render = new App(image, index, backgroundColor);
    };
  }, []);
  return (
    <div
      className="Wrapper"
      style={{
        borderRadius: '7%',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '3',
        background: 'transparent',
      }}
    />
  );
}
export default LightChange;

const BOUNCE = 0.82;

class App {
  constructor(image, index, backgroundColor) {
    this.canvas = document.createElement('canvas');
    this.wrapper = document.getElementsByClassName('Wrapper')[index];
    this.wrapper.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');

    this.tmpCanvas = document.createElement('canvas');
    this.tmpCanvas.setAttribute(
      'style', 'opacity:0',
    );
    this.wrapper.appendChild(this.tmpCanvas);
    this.tmpCtx = this.tmpCanvas.getContext('2d');

    this.pixelRatio = 1;
    this.ripple = new Ripple(backgroundColor);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.dots = [];

    this.isLoaded = false;
    this.imgPos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    this.image = new Image();
    this.image.src = image;

    this.image.onload = () => {
      this.isLoaded = true;
      this.drawImage();
    };

    window.requestAnimationFrame(this.animate.bind(this));

    this.canvas.addEventListener('click', this.onClick.bind(this), false);
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.tmpCanvas.width = this.stageWidth;
    this.tmpCanvas.height = this.stageHeight;

    this.pixelSize = this.stageWidth < 400 ? 10 : 12;
    this.radius = this.stageWidth < 400 ? 5 : 5;

    this.ripple.resize(this.stageWidth, this.stageHeight);
    if (this.isLoaded) {
      this.drawImage();
    }
  }

  drawImage() {
    const stageRatio = this.stageWidth / this.stageHeight;
    const imgRatio = this.image.width / this.image.height;
    this.imgPos.width = this.stageWidth;
    this.imgPos.height = this.stageHeight;

    if (imgRatio < stageRatio) {
      this.imgPos.width = Math.round(
        this.image.width * (this.stageHeight / this.image.height),
      );

      this.imgPos.x = Math.round(
        (this.stageWidth - this.imgPos.width) / 2,
      );
      this.imgPos.y = 0;
    } else {
      this.imgPos.height = Math.round(
        this.image.height * (this.stageWidth / this.image.width),
      );

      this.imgPos.y = Math.round(
        (this.stageHeight - this.imgPos.height) / 2,
      );
      this.imgPos.x = 0;
    }

    this.ctx.drawImage(
      this.image,
      0, 0, this.image.width, this.image.height,
      this.imgPos.x, this.imgPos.y, this.imgPos.width, this.imgPos.height,
    );

    this.tmpCtx.drawImage(
      this.image,
      0, 0, this.image.width, this.image.height,
      this.imgPos.x, this.imgPos.y, this.imgPos.width, this.imgPos.height,
    );

    this.imageData = this.tmpCtx?.getImageData(0, 0, this.stageWidth, this.stageHeight);
  }

  drawDots() {
    this.dots = [];

    this.columns = Math.ceil(this.imgPos.width / this.pixelSize);
    this.rows = Math.ceil(this.imgPos.height / this.pixelSize);

    for (let i = 0; i < this.rows; i += 1) {
      const y = (i + 0.5) * this.pixelSize;
      const pixelY = Math.max(Math.min(y, this.imgPos.height), 0) + this.imgPos.y;
      for (let j = 0; j < this.columns; j += 1) {
        const x = (j + 0.5) * this.pixelSize;
        const pixelX = Math.max(Math.min(x, this.imgPos.width), 0) + this.imgPos.x;

        const pixelIndex = (pixelX + pixelY * this.imgPos.width) * 4;
        const red = this.imageData.data[pixelIndex + 0];
        const green = this.imageData.data[pixelIndex + 1];
        const blue = this.imageData.data[pixelIndex + 2];

        const dot = new Dot(
          x + this.imgPos.x, y + this.imgPos.y,
          this.radius,
          this.pixelSize,
          red, green, blue,
        );
        this.dots.push(dot);
      }
    }
  }

  animate() {
    this.ripple.animate(this.ctx);
    window.requestAnimationFrame(this.animate.bind(this));
    for (let i = 0; i < this.dots.length; i += 1) {
      const dot = this.dots[i];
      if (collide(dot.x, dot.y, this.ripple.x, this.ripple.y, this.ripple.radius)) {
        dot.animate(this.ctx, true);
      }
    }
  }

  onClick(e) {
    this.drawDots();
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.dots.length; i += 1) {
      this.dots[i].reset();
    }

    this.ctx.drawImage(
      this.image,
      0, 0, this.image.width, this.image.height,
      this.imgPos.x, this.imgPos.y, this.imgPos.width, this.imgPos.height,
    );

    this.ripple.start(e.offsetX, e.offsetY);
  }
}

function distance(x1, y1, x2, y2) {
  const x = x2 - x1;
  const y = y2 - y1;
  return Math.sqrt(x * x + y * y);
}

function collide(x1, y1, x2, y2, radius) {
  if (distance(x1, y1, x2, y2) <= radius) {
    return true;
  }
  return false;
}

class Dot {
  constructor(x, y, radius, pixelSize, red, green, blue) {
    this.x = x;
    this.y = y;
    this.targetRadius = radius;
    this.radius = 0;
    this.radiusV = 0;
    this.time = 1;
    this.timeV = Math.random() * 0.05 + 0.01;
    this.pixelSize = pixelSize;
    this.pixelSizeHalf = pixelSize / 2;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  animate(ctx) {
    ctx.beginPath();
    // ctx.fillStyle = `transparent`;
    // ctx.fillRect(
    //   this.x - this.pixelSizeHalf,
    //   this.y - this.pixelSizeHalf,
    //   this.pixelSize, this.pixelSize,
    // );

    const accel = (this.targetRadius - this.radius) / 2;
    const deaccel = (this.radius) / 2;

    this.time -= this.timeV;
    this.radiusV += accel;
    this.radiusV *= 0.75;
    this.radius += this.radiusV;
    // this.radius *= Math.max(this.time, 0);
    // this.radius += 0.1;

    ctx.beginPath();

    ctx.fillStyle = `rgba(${this.red},${this.green},${this.blue})`;
    ctx.arc(this.x, this.y, Math.abs(this.radius), 0, Math.PI * 2, false);
    ctx.fill();
  }

  reset() {
    this.radius = 0;
    this.radiusV = 0;
  }
}

class Ripple {
  constructor(backgroundColor) {
    this.x = 0;
    this.y = 0;
    this.radius = 0;
    this.maxRadius = 0;
    this.speed = 6;
    this.background = backgroundColor;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  start(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = this.getMax(x, y);
  }

  animate(ctx) {
    if (this.radius < this.maxRadius) {
      this.radius += this.speed;
    }

    ctx.beginPath();
    ctx.fillStyle = this.background;
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    ctx.fill();
  }

  getMax(x, y) {
    const c1 = distance(0, 0, x, y);
    const c2 = distance(this.stageWidth, 0, x, y);
    const c3 = distance(0, this.stageHeight, x, y);
    const c4 = distance(this.stageWidth, this.stageHeight, x, y);
    return Math.max(c1, c2, c3, c4);
  }
}

LightChange.propTypes = {

};
