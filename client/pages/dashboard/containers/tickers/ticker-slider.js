'use strict';

import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import Ticker from './ticker';
import { ArrowNext, ArrowPrev } from './arrows';
import _ from 'lodash';

const sliderConfig = {
    dots: false,
    infinite: true,
    nextArrow: <div><ArrowNext /></div>,
    prevArrow: <div><ArrowPrev /></div>
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

        this.slideHandler = this.slideHandler.bind(this);

        window.addEventListener('resize', this.slideHandler);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.slideHandler);
    }

    /**
     * Updates the current state of slidesToShow
     *
     * @for TickerSlider
     * @method slideHandler
     */
    slideHandler () {
        this.setState({ slidesToShow: this.slidesToShow() });
    }


    /**
     * Works out how many tickers to show in the current viewport based on its
     * deimensions
     *
     * @for TickerSlider
     * @method slidesToShow
     * @returns {Integer}
     */
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

TickerSlider.propTypes = {
    tickers: PropTypes.array.isRequired
};

export default TickerSlider;
