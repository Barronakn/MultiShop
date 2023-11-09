import React from 'react';
import { Link } from '@inertiajs/react';
import camera from '../../../public/assets/image/product-1.jpg';

const Details = () => {
    return (
        <div className='details bg-gray-200 px-20 py-10'>
            <section>
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
                            Shop Detail
                        </span>
                    </li>
                </ul>
            </section>

            <section className='details-card text-gray-900 flex gap-10 py-5'>
                <div>
                    <img loading='lazy' src={camera} alt="camera" />
                </div>
                <div className='bg-white p-5 w-2/3 width flex flex-col gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-bold'>Product Name Goes Here</h1>
                        <span className='text-xs text-gray-500'>(99 Reviews)</span>
                        <h2 className='text-3xl font-bold'>$150.00</h2>
                        <p>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>
                    </div>
                    <div className='sizes flex gap-2'>
                        <form action="#">
                            <h3 className='font-bold'>Sizes: </h3>
                            <div className=' text-gray-500 flex gap-4'>
                                <div>
                                    <input className='checked:bg-yellow-400' type="radio" name="sizes" id="radio" />
                                    <label htmlFor="sizes-xs"> XS</label>
                                </div>

                                <div>
                                    <input className='checked:bg-yellow-400' type="radio" name="sizes" id="radio" />
                                    <label htmlFor="sizes-s"> S</label>
                                </div>

                                <div>
                                    <input className='checked:bg-yellow-400' type="radio" name="sizes" id="radio" />
                                    <label htmlFor="sizes-m"> M</label>
                                </div>

                                <div>
                                    <input className='checked:bg-yellow-400' type="radio" name="sizes" id="radio" />
                                    <label htmlFor="sizes-l"> L</label>
                                </div>

                                <div>
                                    <input className='checked:bg-yellow-400' type="radio" name="sizes" id="radio" />
                                    <label htmlFor="sizes-xl"> XL</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='color flex gap-2'>
                        <h3 className='font-bold'>Color: </h3>
                        <div className=' text-gray-500 flex gap-4'>
                            <div>
                                <input className='checked:bg-yellow-400' type="radio" name="color" id="radio" />
                                <label htmlFor=""> Black</label>
                            </div>

                            <div>
                                <input className='checked:bg-yellow-400' type="radio" name="color" id="radio" />
                                <label htmlFor=""> White</label>
                            </div>

                            <div>
                                <input className='checked:bg-yellow-400' type="radio" name="color" id="radio" />
                                <label htmlFor=""> Red</label>
                            </div>

                            <div>
                                <input className='checked:bg-yellow-400' type="radio" name="color" id="radio" />
                                <label htmlFor=""> Blue</label>
                            </div>

                            <div>
                                <input className='checked:bg-yellow-400' type="radio" name="color" id="radio" />
                                <label htmlFor=""> Green</label>
                            </div>
                        </div>
                    </div>
                    <div className='cart flex gap-2'>
                        <div>
                            <button className='bg-yellow-400 px-3 hover:cursor-pointer hover:bg-yellow-500 text-gray-700'>+</button>
                            <input className='w-20 h-6 bg-gray-200 text-center border-gray-100' type="tel" defaultValue={1} name="number" id="number" />
                            <button className='bg-yellow-400 px-3 hover:cursor-pointer hover:bg-yellow-500 text-gray-700'>-</button>
                        </div>
                        <div>
                            <button className='bg-yellow-400 px-3 hover:cursor-pointer hover:bg-yellow-500 text-gray-700'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-white p-10'>
                <ul className='desc flex py-2 border-0 border-b'>
                    <li>
                        <Link href='#tab-pane-1' className='border bg-gray-200 px-5 py-3 text-gray-800 hover:text-black'>Description</Link>
                    </li>
                    <li>
                        <Link href='#tab-pane-2' className='border-white border-b-gray-200 border px-5 py-3 text-gray-800 hover:text-black hover:border-gray-300'>Information</Link>
                    </li>
                    <li>
                        <Link href='#tab-pane-3' className='border-white border-b-gray-200 border px-5 py-3 text-gray-800 hover:text-black hover:border-gray-300'>Reviews (0)</Link>
                    </li>
                </ul>
                <div id='tab-pane-1'>
                    <h1 className='text-2xl py-6 text-gray-700'>Product Description</h1>
                    <p className='pb-6 text-gray-500'>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                    <p className='text-gray-500'>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                </div>
            </section>

            <div className='flex items-center my-6'>
                <h1 className='text-3xl font-bold w-full uppercase'>You May Also Like</h1>
                <div className='bg-gray-400 h-0 w-full border-dashed border'></div>
            </div>
        </div>
    );
};

export default Details;
