import React from 'react'

const SlideItem = ({ img }) => {
    return (
        <div className='w-full flex flex-col relative'>
            <img src={img} alt="" className='h-80 opacity-90 object-cover' />
            <div className='absolute text-center bottom-6 sm:mx-2 md:mx-12 text-white'>
                <p className='font-medium text-lg [text-shadow:0px_1px_2px_#121314]'>Welcome</p>
                <h1 className='font-bold text-2xl [text-shadow:0px_1px_2px_#121314]'>I'm a Freelancer.</h1>
                <p className='[text-shadow:0px_1px_2px_#121314]'>based in Los Angeles, California. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ea.</p>
            </div>
        </div>
    )
}

export default SlideItem;