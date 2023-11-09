import React from 'react';

const Size = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-6'>
                <h1 className='text-xl uppercase'>Filter by size</h1>
                <div className='bg-gray-400 h-0 w-20 border-dashed border'></div>
            </div>

            <div className='bg-white text-gray-500 p-4 h-64 flex flex-col gap-4'>

                <div className='flex justify-between'>
                    <div>
                        <input className='checked:bg-yellow-400' checked type="checkbox" name="" id="checkbox" />
                        <label htmlFor=""> All size</label>
                    </div>
                    <div>
                        <span className='border border-gray-300 p-1 text-xs'>1000</span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                        <label htmlFor=""> XS</label>
                    </div>
                    <div>
                        <span className='border border-gray-300 p-1 text-xs'>150</span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                        <label htmlFor=""> S</label>
                    </div>
                    <div>
                        <span className='border border-gray-300 p-1 text-xs'>295</span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                        <label htmlFor=""> M</label>
                    </div>
                    <div>
                        <span className='border border-gray-300 p-1 text-xs'>246</span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                        <label htmlFor=""> L</label>
                    </div>
                    <div>
                        <span className='border border-gray-300 p-1 text-xs'>145</span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                        <label htmlFor=""> XL</label>
                    </div>
                    <div>
                        <span className='border border-gray-300 p-1 text-xs'>168</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Size;
