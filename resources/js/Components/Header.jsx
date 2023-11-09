import { Link } from '@inertiajs/react';
import React from 'react';

const Header = () => {
    return (
        <header className='bg-gray-200 px-16'>
            <div className='flex justify-center items-center gap-9'>
                <div className='header-bg-1 relative'>
                    <div className='absolute top-0 left-0 gap-5 bg-black-opacity text-white w-full h-full  flex flex-col justify-center items-center'>
                        <h1 className='text-6xl'>Men Fashion</h1>
                        <p className='w-1/2 text-center'>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                        <Link className='border border-white px-5 py-2 hover:bg-white hover:text-gray-600' href='#'>Show Now</Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-9 my-10'>
                    <div className='header-bg-2 relative'>
                        <div className='absolute top-0 left-0 gap-5 bg-black-opacity text-white w-full h-full  flex flex-col justify-center items-center'>
                            <h3 className='uppercase'>Save 20%</h3>
                            <h4 className='text-3xl text-center font-bold'>Special Offer</h4>
                            <Link className='border border-yellow-400 bg-yellow-400 px-5 py-2 hover:bg-yellow-500 text-gray-700' href='#'>Show Now</Link>
                        </div>
                    </div>
                    <div className='header-bg-3 relative'>
                        <div className='absolute top-0 left-0 gap-5 bg-black-opacity text-white w-full h-full  flex flex-col justify-center items-center'>
                            <h3 className='uppercase'>Save 20%</h3>
                            <h4 className='text-3xl text-center font-bold'>Special Offer</h4>
                            <Link className='border border-yellow-400 bg-yellow-400 px-5 py-2 hover:bg-yellow-500 text-gray-700' href='#'>Show Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap gap-5 items-center justify-center pt-10 pb-20'>
                <div className='text-xl bg-white w-52 text-center py-4'>Quality Product</div>
                <div className='text-xl bg-white w-52 text-center py-4'>Free Shipping</div>
                <div className='text-xl bg-white w-52 text-center py-4'>14-Day Return</div>
                <div className='text-xl bg-white w-52 text-center py-4'>24/7 Support</div>
            </div>
        </header>
    );
};

export default Header;
