import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import TSliderItems from './TSliderItems';

const TestimonialSlider = ({ option, slideCard, name }) => {
    return (
        <Splide options={{ ...option }}
            hasSliderWrapper>
            {slideCard.map((slide, index) => {
                return <SplideSlide>
                    <TSliderItems img={slide.img} key={index} name={slide.name} />
                </SplideSlide>
            })}
        </Splide>
    )
}

export default TestimonialSlider;