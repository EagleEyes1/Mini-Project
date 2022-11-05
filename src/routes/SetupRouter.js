import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DetailBuku from '../pages/DetailBuku'
import TambahBukus from '../pages/TambahBukus'
import Favorites from '../pages/Favorites'
import Logins from '../pages/Logins'

const SetupRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detailbuku/:id" element={<DetailBuku />} />
                <Route path="/tambahbuku" element={<TambahBukus />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path='/login' element={<Logins />} />
            </Routes>
        </BrowserRouter>
    )
}

export default SetupRouter