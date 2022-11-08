import { gql } from "@apollo/client"

const GetAllBooks = gql`
query QueryGet($limit: Int!, $offset: Int!, $id_user: Int) {
    buku(limit: $limit, offset: $offset) {
        id_buku
        judul_buku
        pengarang
        penerbit
        sampul_buku
        cetakan
        sinopsis
        download
        tebal_buku
        total_rating
        idbukufavorits(where: {user_id: {_eq: $id_user}}) {
            isFavorit
    }
    }
}
`

export default GetAllBooks

