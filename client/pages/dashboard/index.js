'use strict';

import React, { Component, PropTypes } from 'react';
import Tickers from './containers/tickers';

class Dashboard extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Tickers />
            </div>
        );
    }
}

Dashboard.propTypes = {

};

export default Dashboard;
