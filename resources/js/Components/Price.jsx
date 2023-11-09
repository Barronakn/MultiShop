import React from 'react';

const Price = () => {
    return (
        <div className='bg-white text-gray-500 p-4 h-64 flex flex-col gap-4'>
            <div className='flex justify-between'>
                <div>
                    <input className='checked:bg-yellow-400' checked type="checkbox" name="" id="checkbox" />
                    <label htmlFor=""> All price</label>
                </div>
                <div>
                    <span className='border border-gray-300 p-1 text-xs'>1000</span>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                    <label htmlFor=""> $0 - $100</label>
                </div>
                <div>
                    <span className='border border-gray-300 p-1 text-xs'>150</span>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                    <label htmlFor=""> $100 - $200</label>
                </div>
                <div>
                    <span className='border border-gray-300 p-1 text-xs'>295</span>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                    <label htmlFor=""> $200 - $300</label>
                </div>
                <div>
                    <span className='border border-gray-300 p-1 text-xs'>246</span>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                    <label htmlFor=""> $300 - $400</label>
                </div>
                <div>
                    <span className='border border-gray-300 p-1 text-xs'>145</span>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <input className='checked:bg-yellow-400' type="checkbox" name="" id="checkbox" />
                    <label htmlFor=""> $400 - $500</label>
                </div>
                <div>
                    <span className='border border-gray-300 p-1 text-xs'>168</span>
                </div>
            </div>
        </div>
    );
};

export default Price;
