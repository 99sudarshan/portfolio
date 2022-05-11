import React from 'react';
import Eight from '../../images/8.jpg'

const Contact = () => {
    return (
        <div className='md:w-3/4 pt-10'>
            <div className='grid grid-cols-3 px-8'>
                <div className="">
                    <h1 className='body_header'>Contact Me</h1>
                    <p className="body_para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, nam.</p>
                    <a href='https://facebook.com' target="_blank" className='flex justify-baseline items-center gap-4 border h-12 w-72 rounded-3xl py-1 px-1 cursor-pointer hover:scale-105 transition-all duration-150 my-4'>
                        <li className='media-items list-none bg-blue-800 text-white text-2xl'>
                            <i className="fa-brands fa-facebook-f"></i>
                        </li>
                        <p className='text-blue-800'>Like me on Facebook</p>
                    </a>
                    <a href='https://twitter.com' target="_blank" className='flex justify-baseline items-center gap-4 border h-12 w-72 rounded-3xl py-1 px-1 cursor-pointer hover:scale-105 transition-all duration-150 my-4'>
                        <li className='media-items list-none bg-cyan-600 text-white text-2xl'>
                            <i className="fa-brands fa-twitter"></i>
                        </li>
                        <p className='text-cyan-600'>Follow me on Twitter</p>
                    </a>
                    <a href='https://dribbble.com' target="_blank" className='flex justify-baseline items-center gap-4 border h-12 w-72 rounded-3xl py-1 px-1 cursor-pointer hover:scale-105 transition-all duration-150 my-4'>
                        <li className='media-items list-none bg-pink-600 text-white text-2xl'>
                            <i className="fa-brands fa-dribbble"></i>
                        </li>
                        <p className='text-pink-600'>See my Dribbble shots</p>
                    </a>
                    <a href='https://linkedin.com' target="_blank" className='flex justify-baseline items-center gap-4 border h-12 w-72 rounded-3xl py-1 px-1 cursor-pointer hover:scale-105 transition-all duration-150'>
                        <li className='media-items list-none bg-blue-600 text-white text-2xl'>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </li>
                        <p className='text-blue-600'>Connect with me on Linkedin</p>
                    </a>
                </div>
                <div className='w-80'>
                    <img src={Eight} alt="" className='rounded-full h-80 w-80 object-cover' />
                </div>
                <form action="" className='mb-6 text-center'>
                    <p className='text-xl font-medium'>Send Me an Email</p>
                    <div className='input_field'>
                        <i className="fa-solid fa-user input_i"></i>
                        <input type="text" placeholder='Your name' className='form_input' />
                    </div>
                    <div className='input_field'>
                        <i className="fa-solid fa-envelope input_i"></i>
                        <input type="email" placeholder='Your email' className='form_input' />
                    </div>
                    <textarea rows="5" cols="36" placeholder='Leave your message' className='bg-gray-100 p-3 outline-none'></textarea>
                    <button className='button mt-3'>Click here to submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;


