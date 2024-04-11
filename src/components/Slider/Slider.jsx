import React from 'react';
import Frames from './Slider-frams.jsx';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider_arrow from '../../img/slider-arrow.svg';
import '../../styles/Slider.css';

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <img src={slider_arrow} alt='arrow' className='nextArrow' />,
    prevArrow: <img src={slider_arrow} alt='arrow' className='prevArrow' />,
};

function Slider() {
    return (
        <div className='content'>
            <ReactSlick className='slickContainer' {...settings}>
                {Frames.map((item) => (
                    <div className='frameContainer'>
                        <div key={item.id}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                className='img'
                            />
                            <p className='description'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </ReactSlick>
        </div>
    );
}

export default Slider;
