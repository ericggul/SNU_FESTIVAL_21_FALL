import { useEffect } from 'react';
import BlueMascot from '@I/mascot/blue.png';
import SkyblueMascot from '@I/mascot/skyblue.png';
import PinkMascot from '@I/mascot/pink.png';
import Rio from '@I/mascot/rio.png';
import { zIndex } from '@S/index';

const mascots = [
  SkyblueMascot, BlueMascot, PinkMascot, Rio,
];

function LightTrail() {
  useEffect(() => {
    triggerLightTrail();

    return () => removeTrails();
  }, []);

  return null;
}
export default LightTrail;

export function removeTrails() {
  const removeElements = (elements) => elements.forEach(element => element.remove());
  removeElements(document.querySelectorAll('.lightTrailElement'));
}

export function triggerLightTrail() {
  const dots = [];
  const mouse = { x: 100, y: 100 };

  const Dot = function Dot(i) {
    this.x = 0;
    this.y = 0;
    this.setX = newX => { this.x = newX; };
    this.setY = newY => { this.y = newY; };

    this.node = (function crateNode() {
      const n = document.createElement('div');
      n.className = 'lightTrailElement';
      n.setAttribute('style',
        `position: absolute; 
        height:3px; 
        width: 3px; 
        border-radius: 50%;
        background: white; 
        opacity: ${1 - i / 80};
        pointer-events: none; 
        z-index: ${zIndex.mouseTrail}`);
      document.body.appendChild(n);
      return n;
    }());
  };

  Dot.prototype.draw = function drawDot() {
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  };

  // Creates the Dot objects, populates the dots array
  for (let i = 0; i < 80; i += 1) {
    const d = new Dot(i);
    dots.push(d);
  }

  // This is the screen redraw function
  function draw() {
    let { x, y } = mouse;

    dots.forEach((dot, index) => {
      const nextDot = dots[index + 1] || dots[0];
      dot.setX(x);
      dot.setY(y);
      dot.draw();
      x += (nextDot.x - dot.x) * 0.1;
      y += (nextDot.y - dot.y) * 0.1;
    });
  }

  document.addEventListener('mousemove', (event) => {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  // get it started by calling animate().
  animate();
}
