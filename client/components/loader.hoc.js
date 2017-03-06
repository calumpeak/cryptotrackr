'use strict';

import React, { Component } from 'react';
import { ProgressCircular } from 'components/progress';
import { isEmpty } from 'lodash';

const LoaderCircular = (property) => (WrappedComponent) => {
    return class Loader extends Component {
        render () {
            return isEmpty(this.props[property]) ? <ProgressCircular /> : <WrappedComponent {...this.props} />;
        }
    };
};

export {
    LoaderCircular
};
