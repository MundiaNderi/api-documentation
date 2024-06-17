import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between pt-10  px-4 md:px-32 items-center '>
            <div className="content">
                <h1 className='font-Raleway text-veryDarkBlue font-bold text-3xl'>Start building with our APIs for absolutely free</h1>
                <h2 className='font-Raleway py-2 text-veryDarkBlue'>Simplifying API integration for developers and business owners</h2>
                <div className="flex mt-4">
                    <input type="email" placeholder="Enter your email" className="border text-sm border-gray-300 px-4 py-2 rounded-l-2xl focus:outline-none focus:ring-2 focus:veryDarkBlue" />
                    <button className="bg-veryDarkBlue hover:bg-desaturatedBlue text-sm text-white px-4 py-2 rounded-r-2xl rounded-l-none">Schedule a Demo</button>
                </div>
            </div>
            <div className='image'>
                <img className='' src='/assets/hero.png' alt='API Illustration' width="500" />
            </div>
        </div>
    )
}

export default Hero;
