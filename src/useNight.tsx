import { useContext } from 'react';

import { NightContext } from './context';

type Output = {
  toggle: () => void;
  light: () => void;
  dark: () => void;
  smartSwitch: () => void;
  setCoords: (latiutde: number, longitude: number) => void;
  setTimes: (sunrise: number, sunset: number) => void;
  reset: () => void;
  destroy: () => void;
};

export const useNight = (): Output => {
  const { night } = useContext(NightContext);

  const toggle = () => night.toggle();
  const light = () => night.light();
  const dark = () => night.dark();
  const smartSwitch = () => night.smartSwitch();

  const setCoords = (latitude: number, longitude: number) => {
    night.setCoords(latitude, longitude);
  };

  const setTimes = (sunrise: number, sunset: number) => {
    night.setTimes(sunrise, sunset);
  };

  const reset = () => night.reset();
  const destroy = () => night.destroy();

  return {
    toggle,
    light,
    dark,
    smartSwitch,
    setCoords,
    setTimes,
    reset,
    destroy
  };
};
