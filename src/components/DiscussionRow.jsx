import React from 'react'

import logo from '../media/user.png'


function DiscussionRow({ name, message, time }) {

    return (
        <div className='flex p-2 pt-0 hover:bg-purple-900 cursor-pointer'>
            <div className='mr-4'>
                <img src={logo} alt="logo" width={60} height={60} className='rounded-full mt-3' />
            </div>
            <div className='flex justify-between border-t border-purple-700 p-2 pl-0 w-full pt-3'>
                <div className='grid'>
                    <p className='text-white text-md'>{name}</p>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto mr-1 text-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <p className='text-gray-300 text-sm'>{message}</p>
                    </div>
                </div>
                <div className='grid'>
                    <p className='text-sm text-gray-300'>{time}</p>
                </div>
            </div>
        </div>
    )
}

export default DiscussionRow