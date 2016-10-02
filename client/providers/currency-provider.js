'use strict';

import { Component, PropTypes } from 'react';
import _ from 'lodash';

// TODO add more currencies!!
const currencyLookup = {
    USD: '$',
    GBP: '£',
    EUR: '€'
};

/**
 * As the whole application revolves around access to different currencies
 * and there are no currency characters returned from the server, we use these currencies
 * throughout and as the ones that are supported. Whilst it might not be ideal to use
 * context for this, it saves having to import a function everywhere its needed...which
 * will likely be a lot of places by the end of the day.
 * There are modules that provide currency symbols but a) another dependency and
 * b) Only want the above to be supported
 *
 * @class CurrencyProvider
 *
 */
class CurrencyProvider extends Component {
    constructor (props) {
        super(props);
    }

    getChildContext () {
        return { currency: {
            get: (currency) => {
                return currencyLookup[currency] || currency;
            },
            list: () => _.keys(currencyLookup).sort()
        }};
    }

    render () {
        return this.props.children;
    }
}

CurrencyProvider.childContextTypes = {
    currency: PropTypes.object
};

CurrencyProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default CurrencyProvider;
