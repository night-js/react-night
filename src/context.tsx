import React from 'react';
import Night from 'night.js';

type Settings = {
  mode: 'smart' | 'color-scheme';
  auto: boolean;
  darkClass?: string;
  lightClass?: string;
  brightness: boolean;
  brightnessHighClass: string;
  brightnessLowClass: string;
  storage: boolean;
  storageClear: boolean;
  soundUrl?: string;
  soundTimeout: number;
};

type Callbacks = {
  onToggle: () => void;
  onSmartSwitch: () => void;
  onLight: () => void;
  onDark: () => void;
  onInit: () => void;
  onStorageClear: () => void;
  onBrightness: () => void;
  onBrightnessNotSupported: () => void;
  onAccess: () => void;
  onAccessDenied: () => void;
  onSoundPlay: () => void;
  onSoundPause: () => void;
};

type Config = {
  settings: Settings;
  callbacks: Callbacks;
};

export const NightContext = React.createContext<any>(null);

export const NightProvider = (
  config?: Partial<Config>,
  children?: React.ReactChildren
) => {
  const night = new Night(config);

  console.log(children);

  return (
    <NightContext.Provider value={night}>{children}</NightContext.Provider>
  );
};
