import confetti from 'canvas-confetti';

const getIntRandom = (a, b) => Math.floor(Math.random() * (b - a) + a);
let count = Math.floor(Math.random() * 100 + 50);

function fire(particleRatio, opts) {
  confetti({ ...opts, particleCount: Math.floor(count * particleRatio) });
}

export function confettiSpread(xPos, yPos) {
  let pos = { x: xPos, y: yPos };
  fire(1, {
    origin: pos,
    spread: 70,
    startVelocity: getIntRandom(30, 80),
  });
}

export function confettiFire(xPos, yPos) {
  fire(0.4, {
    origin: { x: xPos, y: yPos },
    spread: 360,
    startVelocity: 30,
    ticks: 300,
  });
  fire(0.3, {
    origin: { x: xPos - 0.1, y: yPos },
    spread: 360,
    startVelocity: 30,
    ticks: 400,
  });
  fire(0.3, {
    origin: { x: xPos + 0.1, y: yPos },
    spread: 360,
    startVelocity: 30,
    ticks: 300,
  });
}

let end = Date.now() + (15 * 1000);
let colors = ['#C845454', '#38ED87', '#3855ED', '#ED38E6'];

export function schoolPride() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.3 },
    colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.3 },
    colors,
  });
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.5 },
    colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.5 },
    colors,
  });
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.8 },
    colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.8 },
    colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(schoolPride);
  }
  return () => cancelAnimationFrame(schoolPride);
}
