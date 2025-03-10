import React, { useEffect, useRef } from 'react'

const SoundEffect = () => {
  const drumRef = useRef(new Audio("/audio/drums.mp3"));
  const synthRef = useRef(new Audio("/audio/synth.mp3"));
  const snareRef = useRef(new Audio("/audio/snare.mp3"));

  useEffect(() => {
    const drum = drumRef.current;
    const synth = synthRef.current;
    const snare = snareRef.current;

    drum.loop = true;
    synth.loop = true;
    snare.loop = true;

    drum.volume = 0.5;
    synth.volume = 0.5;
    snare.volume = 0.5;

    const playSounds = () => {
      drum.play();
      synth.play();
      snare.play();
    };

    playSounds();

    return () => {
      drum.pause();
      synth.pause();
      snare.pause();
    };
  }, []);

  return null;
};

export default SoundEffect;
