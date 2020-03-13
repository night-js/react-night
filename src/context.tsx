import React from 'react';
import Night from 'night.js';

type Settings = {
  auto: boolean;
  brightness: boolean;
  brightnessHighClass: string;
  brightnessLowClass: string;
  checkBreakpoint: boolean;
  darkClass?: string;
  lightClass?: string;
  mode: 'smart' | 'color-scheme';
  permissionDelay: number;
  soundTimeout: number;
  soundUrl?: string;
  storage: boolean;
  storageClear: boolean;
};

type Callbacks = {
  onAccess: () => void;
  onAccessDenied: () => void;
  onBrightness: () => void;
  onBrightnessNotSupported: () => void;
  onDark: () => void;
  onInit: () => void;
  onToggle: () => void;
  onLight: () => void;
  onSmartSwitch: () => void;
  onSoundPlay: () => void;
  onSoundPause: () => void;
  onStorageClear: () => void;
};

type Config = {
  settings: Settings;
  callbacks: Callbacks;
};

export const NightContext = React.createContext<any>(null);

export const NightProvider: React.FC<{
  config?: Partial<Config>;
}> = ({ children, config }) => {
  const night = new Night(config);

  return (
    <NightContext.Provider value={night}>{children}</NightContext.Provider>
  );
};
