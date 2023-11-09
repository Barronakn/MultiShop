import { Link } from '@inertiajs/react';
import React from 'react';
import product_1 from "../../../public/assets/image/product-1.jpg"
import product_2 from "../../../public/assets/image/product-2.jpg"
import product_3 from "../../../public/assets/image/product-3.jpg"
import product_4 from "../../../public/assets/image/product-4.jpg"
import product_5 from "../../../public/assets/image/product-5.jpg"
import product_6 from "../../../public/assets/image/product-6.jpg"
import product_7 from "../../../public/assets/image/product-7.jpg"
import product_8 from "../../../public/assets/image/product-8.jpg"

const ProductsList = () => {
    const products = [
        {
            image: product_1,
            name: "Product Name Goes Here",
            price: 123.00,
            reduceprice: 123.00,
        },
        {
            image: product_2,
            name: "Product Name Goes Here",
            price: 123.00,
            reduceprice: 123.00,
        },
        {
            image: product_3,
            name: "Product Name Goes Here",
            price: 123.00,
            reduceprice: 123.00,
        },
        {
            image: product_4,
            name: "Product Name Goes Here",
            price: 123.00,
            reduceprice: 123.00,
        },
        {
            image: product_5,
            name: "Product Name Goes Here",
            price: 123.00,
            reduceprice: 123.00,
        },
        {
            image: product_6,
            name: "Product Name Goes Here",
            price: 123.00,
            reduceprice: 123.00,
        },
        {
            image: product_7,
            name: "Product Name Goes Here",
            price: 123.00,
            reduceprice: 123.00,
        },
        {
            image: product_8,
            name: "Product Name Goes Here",
            price: 123.00,
            reduceprice: 123.00,
        },
    ]

    return (
        products.map((product, index) => (
            <div className='flex flex-col justify-center p-2 items-center gap-3 bg-white' key={index}>
                <img loading='lazy' src={product.image} alt="product-img" />
                <Link className='hover:text-yellow-500' href='#'>{product.name}</Link>
                <p className='flex gap-2 items-center text-xl text-black'>
                    ${product.price}
                    <span className='text-gray-500 line-through text-base'>${product.reduceprice}</span>
                </p>
            </div>
        ))

    );
};

export default ProductsList;
