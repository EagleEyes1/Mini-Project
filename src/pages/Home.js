import React, { useEffect, useState } from 'react'
import LoadingSvg from '../assets/LoadingSvg'
import ContentListBuku from '../components/ContentListBuku/ContentListBuku'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import useGetAllBooks from '../hooks/useGetAllBooks'


const Home = () => {
    const { booksData, booksLoading, booksError } = useGetAllBooks()

    if (booksLoading) {
        return <LoadingSvg />
    }

    if (booksError) {
        console.log(booksError)
        return null
    }

    // const [books, setBooks] = useState(booksData?.buku)

    // const filterBooks = searchValue => {
    //     if (searchValue === "") {
    //         return booksData?.buku[0]
    //     }
    //     return booksData?.buku.filter(books =>
    //         books.judul_buku.toLowerCase().includes(searchValue.toLowerCase())
    //     )
    // }

    // const filteredBooks = booksData?.buku.filter(bukus => {
    //     if (searchValue === "") {
    //         return bukus;
    //     } else if (bukus.judul_buku.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return bukus;
    //     }
    // })

    // {booksData?.buku.filter(bukus => {
    //     if (search === "") {
    //         return bukus;
    //     } else if (bukus.judul_buku.toLowerCase().includes(search.toLowerCase())) {
    //         return bukus; 
    //     }})}


    // useEffect(() => {
    //     const filteredBooks = filterBooks(searchValue)
    //     setBooks(filteredBooks)
    // }, [searchValue])

    // callback = {(searchValue) => setSearchValue(searchValue)}

    // data={filteredBooks} 
    return (
        <div>
            <Navbar />
            <ContentListBuku data={booksData?.buku} />
            <Footer />
        </div>
    )
}

export default Home