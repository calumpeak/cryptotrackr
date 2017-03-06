'use strict';

import React, { Component, PropTypes } from 'react';
import Slick from 'react-slick';
import { ArrowNext, ArrowPrev } from './arrows';
import { merge } from 'lodash';

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

class Slider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            slidesToShow: this.slidesToShow()
        };

        this.slideHandler = this.slideHandler.bind(this);
    }

    componentDidMount () {
        window.addEventListener('resize', this.slideHandler);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.slideHandler);
    }

    /**
     * Updates the current state of slidesToShow
     *
     * @for Slider
     * @method slideHandler
     */
    slideHandler () {
        this.setState({ slidesToShow: this.slidesToShow() });
    }

    /**
     * Works out how many slides to show in the current viewport based on its
     * deimensions
     *
     * @for Slider
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
        const { slidesToShow } = this.state;

        return (
            <div style = {wrapperStyle}>
                <Slick {...merge(sliderConfig, { slidesToShow })}>
                    {this.props.children}
                </Slick>
            </div>
        );
    }
}

Slider.propTypes = {
    children: PropTypes.array.isRequired
};

export default Slider;
