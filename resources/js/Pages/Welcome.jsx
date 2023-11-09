import Categories from '@/Components/Categories';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Nav from '@/Components/Nav';
import Products from '@/Components/Products';
import React from 'react';

const Welcome = () => {
    return (
        <div className=''>
            <Nav />
            <Header />
            <Categories />
            <Products />
            <Footer />
        </div>
    );
};

export default Welcome;
