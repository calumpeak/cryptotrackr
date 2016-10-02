'use strict';

import { Component, PropTypes } from 'react';
import IO from 'socket.io-client';

/**
 * Socket IO provider
 * Passes the socket instance to all children via context.socket
 * Alleviates the need to pass the socket manually from component to component
 *
 * @class SocketProvider
 */
class SocketProvider extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {
        this.socket = IO(this.props.namespace);
    }

    componentWillUnmount () {
        this.socket.close();
    }

    getChildContext () {
        return { socket: this.socket };
    }

    render () {
        return this.props.children;
    }
}

SocketProvider.childContextTypes = {
    socket: PropTypes.object
};

SocketProvider.propTypes = {
    namespace: PropTypes.string,
    children: PropTypes.element.isRequired
};

export default SocketProvider;
