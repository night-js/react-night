# [react-night](https://github.com/night-js/react-night)

[![NPM version](http://img.shields.io/npm/v/react-night?style=flat-square)](https://www.npmjs.com/package/react-night)
[![NPM downloads](http://img.shields.io/npm/dm/react-night?style=flat-square)](https://www.npmjs.com/package/react-night)
[![NPM license](https://img.shields.io/npm/l/react-night?style=flat-square)](https://www.npmjs.com/package/react-night)
[![Travis](https://img.shields.io/travis/night-js/react-night/master?style=flat-square)](https://travis-ci.org/night-js/react-night)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-night?style=flat-square)](https://bundlephobia.com/result?p=react-night)

#### [night.js](https://www.npmjs.com/package/night.js) implementation for React

## Demo

**[See plugin in action](https://night-js.github.io/night.js/)**

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-night
```

Or Yarn:

```sh
$ yarn add react-night
```

## Getting Started

**• Import `NightProvider` from library in your React app and wrap main component:**

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { NightProvider } from 'react-night';

import App from './App';

ReactDOM.render(
  <NightProvider config={{ /* night.js settings */ }}>
    <App />
  </NightProvider>,
  document.getElementById('root')
);
```

## Example

**• `useNight` hook:**

```js
// App.js

import React from 'react';
import { useNight } from 'react-night';

const App = () => {
  const { /* night.js params */ } = useNight();

  return (
    <h1>Hello Night!</h1>
  );
};

export default App;
```

**• `withNight` HOC:**

```js
// App.js

import React from 'react';
import { withNight } from 'react-night';

const App = (props) => {
  return (
    <h1>Hello Night!</h1>
  );
};

export default withNight(App);
```

## License

This project is licensed under the MIT License © 2019-present Jakub Biesiada
