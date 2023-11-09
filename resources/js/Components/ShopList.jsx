import React from 'react';
import ProductsList from './ProductsList';
import product_9 from "../../../public/assets/image/product-9.jpg"
import { Link } from '@inertiajs/react';
import Price from './Price';
import Color from './Color';
import Size from './Size';

const ShopList = () => {
    return (
        <section className='shoplist bg-gray-200 px-20 pt-10'>

            <section className=''>
                <ul className='bg-white pl-5 h-14 flex items-center gap-2'>
                    <li className=''>
                        <Link className='hover:underline' href='/'>
                            Home
                        </Link>
                    </li>
                    <span>/</span>
                    <li>
                        <Link className='hover:underline' href='/shop'>
                            Shop
                        </Link>
                    </li>
                    <span>/</span>
                    <li>
                        <span className='text-gray-600'>
                            Shop List
                        </span>
                    </li>
                </ul>
            </section>
            <div className='shop flex gap-6'>
                <div className='left w-25'>
                    <div className='flex justify-between items-center my-6'>
                        <h1 className='text-xl uppercase'>Filter by price</h1>
                        <div className='bg-gray-400 h-0 w-20 border-dashed border'></div>
                    </div>

                    <Price />
                    <Color />
                    <Size />

                </div>
                <div className='right w-75'>
                    <div className='flex justify-between'>
                        <div></div>
                        <div className='flex gap-5'>
                            <div className='bg-white hover:bg-gray-100 hover:cursor-pointer py-1 px-4 my-6'>
                                Sorting
                            </div>
                            <div className='bg-white hover:bg-gray-100 hover:cursor-pointer py-1 px-4 my-6'>
                                Showing
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-3 gap-10'>
                            <ProductsList />
                            <div className='flex flex-col justify-center p-2 items-center gap-3 bg-white'>
                                <img loading='lazy' src={product_9} alt="product-img" />
                                <Link className='hover:text-yellow-400' href='#'>Product Name Goes Here</Link>
                                <p className='flex gap-2 items-center text-xl text-black'>
                                    $123.00
                                    <span className='text-gray-500 line-through text-base'>$123.00</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <ul className='flex justify-center items-center my-10'>
                                <li>
                                    <span className='text-slate-600 p-2 bg-white border border-gray-300' href='#'>Previous</span>
                                </li>
                                <li>
                                    <Link className='text-white bg-yellow p-2 border border-gray-300' href='#'>1</Link>
                                </li>
                                <li>
                                    <Link className='text-yellow border p-2 bg-white border-gray-300 hover:bg-gray-100' href='#'>2</Link>
                                </li>
                                <li>
                                    <Link className='text-yellow border p-2 bg-white border-gray-300 hover:bg-gray-100' href='#'>3</Link>
                                </li>
                                <li>
                                    <Link className='text-yellow border p-2 bg-white border-gray-300 hover:bg-gray-100' href='#'>Next</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopList;
