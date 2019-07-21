import React from 'react';
declare type Settings = {
    auto: boolean;
    brightness: boolean;
    brightnessHighClass: string;
    brightnessLowClass: string;
    darkClass?: string;
    lightClass?: string;
    mode: 'smart' | 'color-scheme';
    permissionDelay: number;
    soundTimeout: number;
    soundUrl?: string;
    storage: boolean;
    storageClear: boolean;
};
declare type Callbacks = {
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
declare type Config = {
    settings: Settings;
    callbacks: Callbacks;
};
export declare const NightContext: React.Context<any>;
export declare const NightProvider: ({ children, config }: {
    children: React.ReactChildren;
    config?: Partial<Config> | undefined;
}) => JSX.Element;
export {};
