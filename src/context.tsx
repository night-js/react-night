import React from 'react';
import Night from 'night.js';

type Settings = {
  readonly auto: boolean;
  readonly brightness: boolean;
  readonly brightnessHighClass: string;
  readonly brightnessLowClass: string;
  readonly checkBreakpoint: boolean;
  readonly darkClass?: string;
  readonly lightClass?: string;
  readonly mode: 'smart' | 'color-scheme';
  readonly permissionDelay: number;
  readonly soundTimeout: number;
  readonly soundUrl?: string;
  readonly storage: boolean;
  readonly storageClear: boolean;
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
  readonly settings: Settings;
  readonly callbacks: Callbacks;
};

// TODO add types
export const NightContext = React.createContext<any>(null);

export const NightProvider: React.FC<{
  readonly config?: Partial<Config>;
}> = ({ children, config }) => {
  const night = new Night(config);

  return (
    <NightContext.Provider value={night}>{children}</NightContext.Provider>
  );
};
