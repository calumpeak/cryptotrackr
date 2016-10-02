'use strict';

import React, { PropTypes } from 'react';
import NavBar from 'material-ui/AppBar';

const style = {
    position: 'fixed',
    top: '0px'
}

const Nav = ({ title }) => (
    <NavBar
        style = {style}
        title = {title}
        showMenuIconButton = {false}
        zDepth = {2}
    />
);

Nav.propTypes = {
    title: PropTypes.node.isRequired
}

export default Nav;
