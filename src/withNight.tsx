import React from 'react';

import { NightContext } from './context';

export const withNight = (WrappedComponent: React.ComponentClass) => (
  props: React.ComponentProps<any>
) => (
  <NightContext.Consumer>
    {({ ...nightProps }) => <WrappedComponent {...props} {...nightProps} />}
  </NightContext.Consumer>
);
