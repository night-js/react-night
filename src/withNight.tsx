import React from 'react';

import { useNight } from './useNight';

export function withNight<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => <WrappedComponent {...props} {...useNight()} />;
}
