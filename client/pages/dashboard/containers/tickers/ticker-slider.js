'use strict';

import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import Ticker from './ticker';
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import PrevIcon from 'material-ui/svg-icons/image/navigate-before';
import _ from 'lodash';

const sliderConfig = {
    dots: false,
    infinite: true,
    nextArrow: <NextIcon />,
    prevArrow: <PrevIcon />
};

const wrapperStyle = {
    height: '220px',
    marginLeft: '20px',
    marginRight: '20px'
};

class TickerSlider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            slidesToShow: this.slidesToShow()
        };

        this.resizeHandler = this.resizeHandler.bind(this);

        window.addEventListener('resize', this.resizeHandler);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.resizeHandler);
    }

    resizeHandler () {
        this.setState({ slidesToShow: this.slidesToShow() });
    }

    slidesToShow () {
        var winWidth = document.body.clientWidth;
        var padding = 70; // Hard code for now
        var tickerWidth = 350; // Hard code for now

        return Math.floor((winWidth - padding) / tickerWidth);
    }

    render () {
        const { tickers } = this.props;
        const { slidesToShow } = this.state;

        return (
            <div style = {wrapperStyle}>
                <Slider {..._.merge(sliderConfig, { slidesToShow })}>
                    {tickers.map(tickerId =>
                        <div key = {tickerId} >
                            <Ticker options = {{ tickerId }} />
                        </div>
                    )}
                </Slider>
            </div>
        );
    }
}

export default TickerSlider;
