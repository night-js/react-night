import React, { useContext } from 'react';

import { NightContext } from './context';

export const withNight = (Component: React.ComponentClass) => {
  const { ...nightProps } = useContext(NightContext);

  return (props: React.ComponentProps<any>) => {
    const concatedProps = {
      ...props,
      ...nightProps
    };

    return <Component {...concatedProps} />;
  };
};
