import React from 'react';
import ProductsList from './ProductsList';
import { Link } from '@inertiajs/react';

const Products = () => {
    return (
        <section className='products bg-gray-200 px-20 py-20'>
            <div className='section-1'>
                <div className='flex justify-center items-center'>
                    <h1 className='w-full font-bold text-3xl uppercase'>Featured Products</h1>
                    <div className='bg-gray-400 h-0 w-full border-dashed border'></div>
                </div>
                <div className='grid grid-cols-4 gap-10 mt-10'>
                    <ProductsList />
                </div>
            </div>

            <div className='section-2 flex gap-10 justify-center items-center my-20'>
                <div className='header-bg-2 bg-products relative'>
                    <div className='absolute top-0 left-0 gap-5 bg-black-opacity text-white w-full h-full  flex flex-col justify-center items-center'>
                        <h3 className='uppercase'>Save 20%</h3>
                        <h4 className='text-3xl text-center font-bold'>Special Offer</h4>
                        <Link className='border border-yellow-400 bg-yellow-400 px-5 py-2 hover:bg-yellow-500 text-gray-700' href='#'>Show Now</Link>
                    </div>
                </div>
                <div className='header-bg-3 bg-products relative'>
                    <div className='absolute top-0 left-0 gap-5 bg-black-opacity text-white w-full h-full  flex flex-col justify-center items-center'>
                        <h3 className='uppercase'>Save 20%</h3>
                        <h4 className='text-3xl text-center font-bold'>Special Offer</h4>
                        <Link className='border border-yellow-400 bg-yellow-400 px-5 py-2 hover:bg-yellow-500 text-gray-700' href='#'>Show Now</Link>
                    </div>
                </div>
            </div>

            <div className='section-3'>
                <div className='flex justify-center items-center'>
                    <h1 className='w-full font-bold text-3xl uppercase'>Recent Products</h1>
                    <div className='bg-gray-400 h-0 w-full border-dashed border'></div>
                </div>
                <div className='grid grid-cols-4 gap-10 mt-10'>
                    <ProductsList />
                </div>
            </div>
        </section>
    );
};

export default Products;
