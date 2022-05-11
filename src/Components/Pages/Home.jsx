import React from 'react';
import Slider from '../Slider';

const Home = ({ images, option }) => {
    return (
        <div className="flex flex-col justify-center items-center px-5 py-10 md:py-0 lg:w-3/4 relative before_div">
            <Slider images={images} option={option} />
            <button className='button mt-8 '>Hire Me</button>
        </div>
    )
}

export default Home;