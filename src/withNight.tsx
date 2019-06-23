import React from 'react';

import { useNight } from './useNight';

export const withNight = (WrappedComponent: React.ComponentClass) => (
  props: React.ComponentProps<any>
) => <WrappedComponent {...props} {...useNight()} />;
