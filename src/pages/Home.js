import React, { useEffect, useState } from 'react'
import LoadingSvg from '../assets/LoadingSvg'
import ContentListBuku from '../components/ContentListBuku/ContentListBuku'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import useGetAllBooks from '../hooks/useGetAllBooks'


const Home = () => {
    const { booksData, booksLoading, booksError } = useGetAllBooks()

    // console.log(booksData)

    if (booksLoading) {
        return <LoadingSvg />
    }

    if (booksError) {
        console.log(booksError)
        return null
    }


    return (
        <div>
            <Navbar />
            <ContentListBuku data={booksData?.buku} />
            <Footer />
        </div>
    )
}

export default Home