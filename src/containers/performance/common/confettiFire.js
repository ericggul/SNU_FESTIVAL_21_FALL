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
  let pos = { x: xPos, y: yPos };
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
  // fire(0.2, {
  //   origin: pos,
  //   spread: 60,
  // });
  // fire(0.35, {
  //   origin: pos,
  //   spread: 100,
  //   decay: 0.91,
  //   scalar: 0.8,
  // });
  // fire(0.1, {
  //   origin: pos,
  //   spread: 120,
  //   startVelocity: 25,
  //   decay: 0.92,
  //   scalar: 1.2,
  // });
  // fire(0.1, {
  //   origin: pos,
  //   spread: 120,
  //   startVelocity: 45,
  // });
}
