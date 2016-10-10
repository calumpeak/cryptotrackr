'use strict';

import React from 'react';
import { render } from 'react-dom';
import Router from './router';

import reactTapPlugin from 'react-tap-event-plugin';
reactTapPlugin();

render(
    <Router />,
    document.getElementById('cryptotrackr-app')
);
