import { useContext } from 'react';

import { NightContext } from './context';

type Output = {
  readonly toggle: () => void;
  readonly light: () => void;
  readonly dark: () => void;
  readonly smartSwitch: () => void;
  readonly setCoords: (latiutde: number, longitude: number) => void;
  readonly setTimes: (sunrise: number, sunset: number) => void;
  readonly reset: () => void;
  readonly destroy: () => void;
  readonly night: object;
};

export const useNight = (): Output => {
  const night = useContext(NightContext);

  const toggle = night.toggle;
  const light = night.light;
  const dark = night.dark;
  const smartSwitch = night.smartSwitch;
  const setCoords = night.setCoords;
  const setTimes = night.setTimes;
  const reset = night.reset;
  const destroy = night.destroy;

  return {
    toggle,
    light,
    dark,
    smartSwitch,
    setCoords,
    setTimes,
    reset,
    destroy,
    ...night,
  };
};
