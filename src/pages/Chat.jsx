import React from 'react'
import logo from '../media/logo.png'
import jugalux from '../media/jugalux.png'

import SearchBar from '../components/SearchBar'
import DiscussionRow from '../components/DiscussionRow'
import IbNavbar from '../components/IbNavbar'
import BoxMessage from '../components/BoxMessage'
import TypeMessageBar from '../components/TypeMessageBar'


function Chat() {


    return (

        <div className='grid grid-cols-7 h-screen'>
            <div className='col-span-2 bg-purple-800'>
                <div className='header h-16 bg-purple-900 flex justify-between'>
                    <img src={jugalux} alt="logo" width='50' height='50' className='rounded-full m-2' />
                    <div className='flex my-auto pr-5 gap-x-7 text-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </div>
                </div>

                <div className='flex justify-between w-full pr-4'>
                    <SearchBar />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 my-auto ml-1 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                </div>

                <div className='my-3 overflow-y-auto h-auto'>
                    <DiscussionRow 
                        name='Christelle Org' 
                        message='ça dépend de toi nor, Oui si...' 
                        time='09:17 am'
                    />
                    <DiscussionRow 
                        name='Urielle' 
                        message='Nada 😂' 
                        time='Yesterday'
                    />
                    <DiscussionRow 
                        name='Awal' 
                        message='Mais si non c`est intéressant 👩‍💻' 
                        time='Tuesday'
                    />
                    <DiscussionRow 
                        name='Berthold' 
                        message='Je suis fatiguée 😩 j`ai codé tou...' 
                        time='Monday'
                    />
                    <DiscussionRow 
                        name='Cabrel' 
                        message='Bonjour, j`ai bu ton yaourt hein 👀' 
                        time='Monday'
                    />
                    {/* <DiscussionRow 
                        name='Brunelle' 
                        message='Laisse moi tranquille 😑' 
                        time='Monday'
                    /> */}
                    <DiscussionRow 
                        name='Romaric' 
                        message='Hey, please consulte ta boîte mail' 
                        time='Monday'
                    />
                </div>
            </div>

            <div className='col-span-5 bg-purple-50 flex justify-center text-center text-gray-700 border-b-4 border-purple-900'>
                {/* <div className='m-auto overflow-y-auto'>
                    <img src={logo} alt="Logo WaChat" className='mx-auto' />
                    <h1 className='text-2xl my-8 font-medium'>WaChat Web</h1>
                    <p>
                        Send and receive messages without keeping your phone online. 
                        Use WaChat on up to 4 Linked devices and 1 phone at the same time.
                    </p>
                </div> */}
                <div className='overflow-y-auto w-full'>
                    <IbNavbar />

                    <div className='overflow-y-auto h-5/6 bg-gray-200 pr-5'>
                        <div>                        
                            <BoxMessage 
                                time='09:30'
                                bgColor='light'
                                message='Je dis qu`hein, l`école veut seulement nous tuer ?' 
                            />
                            <BoxMessage 
                                time='09:35'
                                bgColor='dark'
                                message='Je suis fatiguée 😩 j`ai codé toute la nuit' 
                            />
                        </div>
                    </div>

                    <TypeMessageBar />
                </div>
            </div>
        </div>

    )
}

export default Chat