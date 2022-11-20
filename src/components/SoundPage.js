import React from "react";
import useSound from 'use-sound';
import boopSfx from '../assets/sounds/deneme.wav';


export const SoundPage = () => {

    const soundUrl = boopSfx;
  
    const [play, { stop, isPlaying }] = useSound(soundUrl);
  
  }