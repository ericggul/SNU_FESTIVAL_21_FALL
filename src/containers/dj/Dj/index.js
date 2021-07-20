import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import RandomTextShuffle from '@F/animation/text-animation/RandomTextShuffle';
import TypingTextTransition from '@F/animation/text-animation/TypingTextTransition';
import * as Tone from 'tone';
import * as S from './styles';

function Dj() {
  const drumCompress = new Tone.Compressor({
    threshold: -30,
    ratio: 10,
    attack: 0.01,
    release: 0.2,
  }).toDestination();

  const distortion = new Tone.Distortion({
    distortion: 0.4,
    wet: 0.4,
  });

  const hats = new Tone.Player({
    url: 'https://tonejs.github.io/audio/drum-samples/CR78/hihat.mp3',
    volume: -10,
    fadeOut: 0.01,
  }).chain(distortion, drumCompress);

  const hatsLoop = new Tone.Loop({
    callback(time) {
      hats.start(time).stop(time + 0.05);
    },
    interval: '16n',
    probability: 0.8,
  }).start('1m');

  const snare = new Tone.Player({
    url: 'https://tonejs.github.io/audio/drum-samples/CR78/snare.mp3',
    fadeOut: 0.1,
  }).chain(distortion, drumCompress);

  const snarePart = new Tone.Sequence(((time, velocity) => {
    snare.volume.value = Tone.gainToDb(velocity);
    snare.start(time).stop(time + 0.1);
  }), [null, 1, null, [1, 0.3]], '4n').start(0);

  const kick = new Tone.MembraneSynth({
    pitchDecay: 0.02,
    octaves: 6,
    oscillator: {
      type: 'square4',
    },
    envelope: {
      attack: 0.001,
      decay: 0.2,
      sustain: 0,
    },
  }).connect(drumCompress);

  const kickPart = new Tone.Sequence(((time, probability) => {
    if (Math.random() < probability) {
      kick.triggerAttack('C1', time);
    }
  }), [1, [1, [null, 0.3]], 1, [1, [null, 0.5]], 1, 1, 1, [1, [null, 0.8]]], '2n').start(0);

  const bass = new Tone.FMSynth({
    harmonicity: 1,
    modulationIndex: 3.5,
    oscillator: {
      type: 'custom',
      partials: [0, 1, 0, 2],
    },
    envelope: {
      attack: 0.08,
      decay: 0.3,
      sustain: 0,
    },
    modulation: {
      type: 'square',
    },
    modulationEnvelope: {
      attack: 0.1,
      decay: 0.2,
      sustain: 0.3,
      release: 0.01,
    },
  }).toDestination();

  const bassPart = new Tone.Part(((time, event) => {
    if (Math.random() < event.prob) {
      bass.triggerAttackRelease(event.note, event.dur, time);
    }
  }), [{
    time: '0:0', note: 'C2', dur: '4n.', prob: 1,
  }, {
    time: '0:2', note: 'C2', dur: '8n', prob: 0.6,
  },
  {
    time: '0:2.6666', note: 'C2', dur: '8n', prob: 0.4,
  }, {
    time: '0:3.33333', note: 'C2', dur: '8n', prob: 0.9,
  },
  {
    time: '1:0', note: 'C2', dur: '4n.', prob: 1,
  }, {
    time: '1:2', note: 'C2', dur: '8n', prob: 0.6,
  },
  {
    time: '1:2.6666', note: 'C2', dur: '8n', prob: 0.4,
  }, {
    time: '1:3.33333', note: 'E2', dur: '8n', prob: 0.9,
  },
  {
    time: '2:0', note: 'F2', dur: '4n.', prob: 1,
  }, {
    time: '2:2', note: 'F2', dur: '8n', prob: 0.6,
  },
  {
    time: '2:2.6666', note: 'F2', dur: '8n', prob: 0.4,
  }, {
    time: '2:3.33333', note: 'F2', dur: '8n', prob: 0.9,
  },
  {
    time: '3:0', note: 'F2', dur: '4n.', prob: 1,
  }, {
    time: '3:2', note: 'F2', dur: '8n', prob: 0.6,
  },
  {
    time: '3:2.6666', note: 'F2', dur: '8n', prob: 0.4,
  }, {
    time: '3:3.33333', note: 'B1', dur: '8n', prob: 0.9,
  }]).start(0);

  bassPart.loop = true;
  bassPart.loopEnd = '4m';

  const synth = new Tone.DuoSynth({
    vibratoAmount: 0.5,
    vibratoRate: 5,
    portamento: 0.1,
    harmonicity: 1.005,
    volume: 5,
    voice0: {
      oscillator: {
        type: 'sawtooth',
      },
      filter: {
        Q: 1,
        type: 'lowpass',
        rolloff: -24,
      },
      envelope: {
        attack: 0.01,
        decay: 0.25,
        sustain: 0.4,
        release: 1.2,
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.05,
        sustain: 0.3,
        release: 2,
        baseFrequency: 100,
        octaves: 4,
      },
    },
    voice1: {
      oscillator: {
        type: 'sawtooth',
      },
      filter: {
        Q: 2,
        type: 'bandpass',
        rolloff: -12,
      },
      envelope: {
        attack: 0.25,
        decay: 4,
        sustain: 0.1,
        release: 0.8,
      },
      filterEnvelope: {
        attack: 0.05,
        decay: 0.05,
        sustain: 0.7,
        release: 2,
        baseFrequency: 5000,
        octaves: -1.5,
      },
    },
  }).toDestination();

  const synthNotes = ['C2', 'E2', 'G2', 'A2',
    'C3', 'D3', 'E3', 'G3', 'A3', 'B3',
    'C4', 'D4', 'E4', 'G4', 'A4', 'B4', 'C5'];

  Tone.Transport.bpm.value = 125;

  const move = ({ x, y }) => {
    const note = synthNotes[Math.round(x * synthNotes.length - 1)];
    synth.setNote(note);
    synth.vibratoAmount.value = y;
  };

  const playSynth = (ev) => {
    const rect = ev.target.getBoundingClientRect();
    const x = (ev.clientX - rect.left) / rect.width;
    const y = (ev.clientY - rect.top) / rect.height;
    console.log(x, y);
    const player = new Tone.Player('https://tonejs.github.io/audio/berklee/gong_1.mp3').toDestination();
    Tone.loaded().then(() => {
      player.start();
    });
  };

  const [dotLoc, setDotLoc] = useState([10, 50]);
  const handleDragStart = (ev) => {
    ev.dataTransfer.setData('id', 'dot');
  };
  const handleDragOver = (ev) => {
    ev.preventDefault();
  };
  const handleDrop = (ev) => {
    setDotLoc([ev.clientX, ev.clientY]);
  };

  return (
    <S.StyledDj>
      <canvas id="slider-canvas" />

      <RandomTextShuffle text="Cleopatra" />
      <TypingTextTransition text="Cleopatra" />
    </S.StyledDj>
  );
}
export default Dj;

Dj.propTypes = {

};
