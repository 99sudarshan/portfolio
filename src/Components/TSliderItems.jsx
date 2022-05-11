import React from 'react'

const TSliderItems = ({ img, name }) => {
    return (
        <div className='w-full flex bg-cyan-100 rounded-sm py-4 px-6'>
            <div className='w-2/5 py-4 px-4 relative'>
                <div className=" bg-blue-500 w-44 h-44 rotate-45 rounded-3xl shadow-lg shadow-neutral-500/50">
                </div>
                <img src={img} alt="" className='absolute top-4 rounded-full  object-cover w-44 h-44 ' />
                <h3 className='text-xl float-right pt-5 text-gray-700 [text-shadow:0px_1px_2px]'>{name}</h3>
            </div>
            <div className='w-3/5'>
                <p className='text-gray-500 font-sans'><i className="fa-solid fa-quote-left text-2xl pr-3 "></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in iste id, facere atque itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, nisi hic. Possimus, nisi rerum voluptatum facilis dignissimos assumenda quaerat tempore pariatur corporis commodi? Itaque quasi harum natus ut ratione! Aliquam nobis officia quisquam nemo.<i className="fa-solid fa-quote-right text-2xl pl-3 "></i></p>
            </div>
        </div>
    )
}

export default TSliderItems;