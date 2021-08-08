import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Tone from 'tone';
import * as S from './styles';

const NUM_OF_COLUMNS = 8;
const CHOSEN_OCTAVE = '4';
const COLUMNS_INDEXES = () => {
  let result = [];
  for (let i = 0; i < NUM_OF_COLUMNS; i += 1) {
    result.push(i);
  }
  return result;
};

const generateGrid = () => {
  let grid = [];
  for (let i = 0; i < NUM_OF_COLUMNS; i += 1) {
    let column = [
      { note: 'C', isActive: false },
      { note: 'D', isActive: false },
      { note: 'E', isActive: false },
      { note: 'F', isActive: false },
      { note: 'G', isActive: false },
      { note: 'A', isActive: false },
      { note: 'B', isActive: false },
    ];
    grid.push(column);
  }

  return grid;
};

function ToneComponent() {
  const [grid, setGrid] = useState(generateGrid());
  const [playing, setPlaying] = useState(false);
  const [currentPlayingColumn, setCurrentPlayingColumn] = useState(null);
  const synth = new Tone.PolySynth().toDestination();

  const handleNoteClick = (i, j) => {
    let updatedGrid = grid.map((column, index) => column.map((cell, cellIndex) => {
      let cellCopy = cell;
      if (index === i && cellIndex === j) {
        console.log(i, j);
        cellCopy.isActive = !cell.isActive;
      }
      return cellCopy;
    }));
    console.log(updatedGrid);
    setGrid(updatedGrid);
  };

  const playNote = (note) => {
    synth.triggerAttackRelease(`${note}4`, '16n');
  };

  const playMusic = async () => {
    let music = [];
    grid.map((column) => {
      let currentColumn = [];
      column.map((note) => note.isActive && currentColumn.push(note.note + CHOSEN_OCTAVE));
      music.push(currentColumn);
    });
    await Tone.start();

    const Sequencer = new Tone.Sequence(
      (time, column) => {
        setCurrentPlayingColumn(column);
        synth.triggerAttackRelease(music[column], '8n', time);
      },
      COLUMNS_INDEXES(),
      '8n',
    );

    if (playing) {
      setPlaying(false);
      setCurrentPlayingColumn(null);
      await Tone.Transport.stop();
      await Sequencer.stop();
      await Sequencer.clear();
      await Sequencer.dispose();
      return;
    }
    setPlaying(true);
    await Sequencer.start();
    await Tone.Transport.start();
  };

  console.log(currentPlayingColumn);

  return (
    <>
      <S.StyledTone>
        {grid.map((column, i) => (
          <S.Column key={i} current={currentPlayingColumn === i}>
            {column.map((button, j) => (
              <S.Button
                onClick={() => handleNoteClick(i, j)}
                key={20 * i + j}
                isActive={button.isActive}
              >
                {button.note}
              </S.Button>
            ))}
          </S.Column>
        ))}
      </S.StyledTone>
      <S.PlayButton onClick={() => playMusic()}>Play</S.PlayButton>
    </>
  );
}
export default ToneComponent;

export function Wrong() {
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: -1200 });
  const now = Tone.now();
  synth.triggerAttackRelease(['C4', 'D4', 'E4', 'B4', 'A4'], 0.5);
}

export function Beep() {
  const osc = new Tone.Oscillator().toDestination();
  // repeated event every 8th note
  Tone.Transport.scheduleRepeat((time) => {
    // use the callback time to schedule events
    if (time < 1) {
      osc.start(time).stop(time + 0.2);
    } else if (time < 2) {
      osc.start(time).stop(time + 0.1);
    } else {
      osc.start(time).stop(time + 0.05);
    }
  }, '8n');
  // transport must be started before it starts invoking events
  Tone.Transport.start();
}

ToneComponent.propTypes = {

};
