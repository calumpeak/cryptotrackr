'use strict';

// CSS
import 'styles/app.css';

import React, { PropTypes, Component } from 'react';
import Navigation from './navigation';

// Add necessary providers
import SocketProvider from 'providers/socket-provider';
import CurrencyProvider from 'providers/currency-provider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Theme it!
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Application extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <MuiThemeProvider>
                <SocketProvider>
                    <CurrencyProvider>
                        <div>
                            <Navigation />
                            <div id='container'>
                                {this.props.children}
                            </div>
                        </div>
                    </CurrencyProvider>
                </SocketProvider>
            </MuiThemeProvider>
        );
    }
}

export default Application;
