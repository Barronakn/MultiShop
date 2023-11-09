import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import ShopList from '@/Components/ShopList';
import { Link } from '@inertiajs/react';
import React from 'react';

const Shop = () => {
    return (
        <div>
            <Nav />
            <ShopList />
            <Footer />
        </div>
    );
};

export default Shop;
