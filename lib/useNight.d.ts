declare type Output = {
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
export declare const useNight: () => Output;
export {};
