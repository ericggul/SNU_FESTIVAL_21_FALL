import confetti from 'canvas-confetti';

export const speakRightorWrong = (tf) => {
  if (tf) {
    const utterance = new SpeechSynthesisUtterance('짝짝짝. 참 잘했어요.');
    utterance.lang = 'ko';
    utterance.rate = 1;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  } else {
    const utterance = new SpeechSynthesisUtterance('땡');
    utterance.lang = 'ko';
    utterance.rate = 0.8;
    utterance.pitch = 0.8;
    speechSynthesis.speak(utterance);
  }
};

export const confettiRightorWrong = (isMobile, tf) => {
  let rightColors = ['#ffffff', '#bb0000'];
  if (tf) {
    confetti({
      typeparticleCount: 10,
      angle: 60,
      spread: 15,
      origin: { x: 0 },
      colors: ['#ffffff'],
    });
    confetti({
      typeparticleCount: 10,
      angle: 120,
      spread: 15,
      origin: { x: 1 },
      colors: ['#ffffff'],
    });
  } else if (isMobile) {
    confetti({
      typeparticleCount: 1,
      angle: -45,
      spread: 4,

      origin: { x: 0, y: 0.35 },
      colors: ['#bb0000'],
    });
    confetti({
      typeparticleCount: 1,
      angle: -135,
      spread: 4,

      origin: { x: 1, y: 0.35 },
      colors: ['#bb0000'],
    });
  } else {
    confetti({
      typeparticleCount: 2,
      angle: -45,
      spread: 4,

      origin: { x: 0.35, y: 0.35 },
      colors: ['#bb0000'],
    });
    confetti({
      typeparticleCount: 2,
      angle: -135,
      spread: 4,

      origin: { x: 0.65, y: 0.35 },
      colors: ['#bb0000'],
    });
  }
};
