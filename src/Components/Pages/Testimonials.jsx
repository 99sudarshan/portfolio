import React from 'react'
import TSlider from '../TSlider';
import Nine from '../../images/9.jpg';
import Ten from '../../images/10.jpg';
import Eleven from '../../images/11.jpg';
import Twelve from '../../images/12.jpg';
import Thirteen from '../../images/13.jpg';

const Testimonials = () => {

    const slideCard = [
        {
            img: `${Nine}`,
            name: 'Beatheny Feather'
        },
        {
            img: ` ${Ten}`,
            name: 'Jo Hu Yang'
        },
        {
            img: ` ${Eleven}`,
            name: 'Lara Bell'
        },
        {
            img: ` ${Twelve}`,
            name: 'Martha'
        },
        {
            img: `${Thirteen}`,
            name: 'Less Twins'
        }
    ];

    const option = {
        // type:'loop',
        perPage: 1,
        gap: '1rem',
        speed: 1000,
        rewind: true,
        rewindSpeed: 1000,
        // resetProgress: 'true',
        width: '40rem',
        height: '20rem'
    };
    return (
        <div className='md:w-3/4 flex flex-col items-center'>
            <div className="py-10 text-center">
                <h1 className='body_header'> Testimonials</h1>
                <p className='py-3 font-mono text-xl [text-shadow:0px_1px_2px_#948281]'>See what people are saying</p>
            </div>
            <TSlider slideCard={slideCard} option={option} />
        </div>
    )
}

export default Testimonials;