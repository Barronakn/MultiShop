import React from 'react';
import woman from "../../../public/assets/image/cat-1.jpg"
import camera from "../../../public/assets/image/cat-2.jpg"
import shoes from "../../../public/assets/image/cat-3.jpg"
import pomade from "../../../public/assets/image/cat-4.jpg"
import { Link } from '@inertiajs/react';

const CategoriesList = () => {
    const categories = [
        {
            image: woman,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: camera,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: shoes,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: pomade,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: pomade,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: shoes,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: camera,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: woman,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: camera,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: woman,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: pomade,
            name: "Category Name",
            number: "100 Products",
        },
        {
            image: shoes,
            name: "Category Name",
            number: "100 Products",
        },
    ]

    return (
        <section className='grid grid-cols-4 gap-10 mt-10'>
            {
                categories.map((category, index) => (
                    <Link href='#' className='flex gap-3 bg-white' key={index}>
                        <div>
                            <img loading='lazy' className='w-24 h-24' src={category.image} alt="category-img" />
                        </div>
                        <div className='flex flex-col p-2 justify-center items-center'>
                            <h1>{category.name}</h1>
                            <h4 className='text-gray-400 text-sm'>{category.number}</h4>
                        </div>
                    </Link>
                ))
            }
        </section>
    );
};

export default CategoriesList;
