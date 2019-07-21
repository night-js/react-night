declare type Output = {
    toggle: () => void;
    light: () => void;
    dark: () => void;
    smartSwitch: () => void;
    setCoords: (latiutde: number, longitude: number) => void;
    setTimes: (sunrise: number, sunset: number) => void;
    reset: () => void;
    destroy: () => void;
    night: object;
};
export declare const useNight: () => Output;
export {};
