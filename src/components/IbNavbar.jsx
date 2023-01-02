import React from 'react'
import jugalux from '../media/jugalux.png'


function IbNavbar() {

    return (
        <div className='flex justufy-between h-16 w-full bg-purple-800'>
            <div className='flex'>
                <img src={jugalux} alt="logo" width='40' height='40' className='rounded-full m-3' />
                <div className='grid my-auto'>
                    <p className='text-white'>Berthold</p>
                    <p className='text-sm text-cyan-300'>en ligne</p>
                </div>
            </div>
            <div className='flex gap-x-4 ml-auto my-auto mr-3 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </div>
        </div>
    )
}

export default IbNavbar