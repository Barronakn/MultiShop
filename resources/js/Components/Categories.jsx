import React from 'react';
import CategoriesList from './CategoriesList';

const Categories = () => {

    return (
        <section className='categories bg-gray-200 px-20 py-20'>
            <div className='flex gap-5 justify-center items-center'>
                <h1 className='font-bold text-3xl uppercase'>Categories</h1>
                <div className='bg-gray-400 h-0 w-full border-dashed border'></div>
            </div>
            <CategoriesList />
        </section>
    );
};

export default Categories;
