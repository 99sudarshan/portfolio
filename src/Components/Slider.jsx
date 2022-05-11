import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import SlideItem from './SlideItem';

const Slider = ({ option, images }) => {
    return (
        <>
            <Splide
                options={{ ...option }}
                hasSliderWrapper
                hasAutoplayProgress
            >
                {images.map((slide, index) => {
                    return <SplideSlide key={index}>
                        <SlideItem img={slide.img}
                        />
                    </SplideSlide>

                })}
            </Splide>
        </>
    )
}

export default Slider;
