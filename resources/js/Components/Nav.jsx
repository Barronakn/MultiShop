import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const Nav = () => {

    const { url } = usePage();

    const links = [
        {
            text: "Home",
            url: "/"
        },
        {
            text: "Shop",
            url: "/shop"
        },
        {
            text: "Shop Details",
            url: "/details"
        },
    ]

    return (
        <section className='nav-bar'>
            <div className='logo uppercase text-5xl'>
                <Link className='flex m-2' href='/'>
                    <span className='text-yellow bg-gray-900'>Multi</span>
                    <span className='bg-yellow text-gray-900'>Shop</span>
                </Link>
            </div>
            <div className='bg-gray-900 flex items-center justify-between px-32'>
                <nav className='text-white text-center'>
                    <ul className='flex items-center gap-14'>
                        {
                            links.map((link, index) =>
                            (
                                <li key={index}>
                                    <Link className={url === link.url ? "text-yellow" : "text-white text-yellow-hover"} href={link.url}>{link.text}</Link>
                                </li>
                            )
                            )
                        }
                    </ul>
                </nav>
                <div class="flex gap-5">
                    <div class="bg-white hover:bg-gray-100 hover:cursor-pointer py-1 px-4 my-6">My Account</div>
                    <div class="bg-white hover:bg-gray-100 hover:cursor-pointer py-1 px-4 my-6">USD</div>
                    <div class="bg-white hover:bg-gray-100 hover:cursor-pointer py-1 px-4 my-6">EN</div>
                </div>
            </div>
        </section>
    );
};

export default Nav;
