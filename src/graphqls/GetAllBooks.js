import { gql } from "@apollo/client"

const GetAllBooks = gql`
query QueryGet($limit: Int!, $offset: Int!) {
    buku(limit: $limit, offset: $offset) {
        id_buku
        judul_buku
        pengarang
        penerbit
        sampul_buku
        cetakan
        sinopsis
        download
        total_rating
    }
}
`

export default GetAllBooks

