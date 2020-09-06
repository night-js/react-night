import React from 'react';
import Night from 'night.js';

export const NightContext = React.createContext<any>(null);

export const NightProvider: React.FC<{
  readonly config?: any;
}> = ({ children, config }) => {
  const night = new Night(config);

  return (
    <NightContext.Provider value={night}>{children}</NightContext.Provider>
  );
};
