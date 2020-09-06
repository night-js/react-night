import { useContext } from 'react';

import { NightContext } from './context';

export const useNight = () => {
  const night = useContext(NightContext);

  return night;
};
