import { Link } from '@inertiajs/react';
import React from 'react';
import payments from '../../../public/assets/image/payments.png';

const Footer = () => {
    return (
        <footer className='text-white bg-gray-800 px-20'>
            <div className='flex gap-16 justify-center items-center py-20'>
                <div className='w-2/5 width'>
                    <h2 className='text-xl uppercase'>Get In Touch</h2>
                    <p className='py-8'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                    <div className='ml-10 flex flex-col gap-3'>
                        <span>123 Street, New York, USA</span>
                        <span>info@example.com</span>
                        <span>+012 345 67890</span>
                    </div>
                </div>
                <div className='w-1/5 width'>
                    <h2 className='text-xl uppercase'>Quick Shop</h2>
                    <ul className='flex flex-col gap-3 pt-8'>
                        <li>
                            <Link className='hover:underline' href='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='/shop'>Our Shop</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='/details'>Shop Detail</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='#'>Shopping Cart</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='#'>Checkout</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='#'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-1/5 width'>
                    <h2 className='text-xl uppercase'>My Account</h2>
                    <ul className='flex flex-col gap-3 pt-8'>
                        <li>
                            <Link className='hover:underline' href='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='/shop'>Our Shop</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='/details'>Shop Detail</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='#'>Shopping Cart</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='#'>Checkout</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' href='#'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-1/5 width flex flex-col gap-3'>
                    <h2 className='text-xl uppercase'>Newsletter</h2>
                    <p className='py-1'>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <form className='flex' action="#">
                        <input className='w-44 h-10' type="email" name="email" id="email" placeholder='Your Email Address' />
                        <input className='bg-yellow-400 px-3 hover:cursor-pointer hover:bg-yellow-500 text-gray-700' type="submit" value="Sign Up" />
                    </form>
                    <div>
                        <h3 className='uppercase my-5'>Follow Us</h3>
                        <ul className='flex gap-4'>
                            <li>
                                <Link href='#'>
                                    <div className='w-10 h-10 bg-yellow  hover:bg-yellow-500 hover:cursor-pointer'></div>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <div className='w-10 h-10 bg-yellow  hover:bg-yellow-500 hover:cursor-pointer'></div>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <div className='w-10 h-10 bg-yellow  hover:bg-yellow-500 hover:cursor-pointer'></div>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <div className='w-10 h-10 bg-yellow  hover:bg-yellow-500 hover:cursor-pointer'></div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-b flex py-5 justify-between'>
                <p>
                    ©
                    <Link className='text-yellow-400 hover:underline hover:text-yellow-500 ' href='#'>Domain</Link>
                    . All Rights Reserved. Designed by
                    <Link className='text-yellow-400 hover:underline hover:text-yellow-500 ' href='#'>HTML Codex</Link>
                </p>
                <img loading='lazy' src={payments} alt="payments-img" />
            </div>
        </footer>
    );
};

export default Footer;
