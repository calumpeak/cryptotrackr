'use strict';

// CSS
import './styles/app.css';

import React, { PropTypes, Component } from 'react';
import Nav from './components/nav';

// Add necessary providers
import SocketProvider from './providers/socket-provider';
import CurrencyProvider from './providers/currency-provider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Theme it!
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Pages
import Dashboard from './pages/dashboard';


class App extends Component {
    constructor (props) {
        super(props);
    }

    title () {
        return (
            <span>{'Crypto'}<span style = {{fontWeight:100}}>{'trackr'}</span></span>
        );
    }

    render () {
        return (
            <MuiThemeProvider>
                <SocketProvider>
                    <CurrencyProvider>
                        <div>
                            <Nav title = {this.title()} />
                            <div id='container'>
                                <Dashboard />
                            </div>
                        </div>
                    </CurrencyProvider>
                </SocketProvider>
            </MuiThemeProvider>
        );
    }
}

export default App;
