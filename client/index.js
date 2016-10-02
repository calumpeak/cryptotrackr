'use strict';

import React from 'react';
import { render } from 'react-dom';

import reactTapPlugin from 'react-tap-event-plugin';

import App from './app';

reactTapPlugin();

render(
    <App />,
    document.getElementById('cryptotrackr-app')
);
