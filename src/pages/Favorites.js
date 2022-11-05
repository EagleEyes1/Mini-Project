import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import FavoriteList from '../components/FavoriteList/FavoriteList'
import Footer from '../components/Footer/Footer'

const Favorites = () => {
    return (
        <div>
            <Navbar />
            <FavoriteList />
            <Footer />
        </div>
    )
}

export default Favorites