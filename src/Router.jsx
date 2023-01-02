import React, { useState, useContext } from 'react'
import { Routes, Route } from "react-router-dom"

import Chat from './pages/Chat'
import Account from './pages/Account'


const Router = () => {

	return(
			
        <Routes>
            
            <Route path="/" >

                <Route index element={<Chat />} />
                <Route  path="account" element={<Account />} />

                <Route  path="*" element={ <Chat /> } />

            </Route>
        </Routes>

	)
}

export default Router;