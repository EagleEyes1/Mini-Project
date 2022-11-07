import React from 'react'
import ContentListBuku from '../components/ContentListBuku/ContentListBuku'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <ContentListBuku />
            <Footer />
        </div>
    )
}

export default Home