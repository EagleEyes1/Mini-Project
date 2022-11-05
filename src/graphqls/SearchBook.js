import { gql } from "@apollo/client"

const SearchBook = gql`
query QuerySearch($judul_buku: String) {
    buku(where: {judul_buku: {_ilike: $judul_buku}}) {
      id_buku
      judul_buku
      pengarang
      penerbit
      download
      cetakan
      sampul_buku
      sinopsis
      tebal_buku
      total_rating
    }
  }
  `

export default SearchBook
