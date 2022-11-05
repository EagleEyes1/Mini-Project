import { gql } from "@apollo/client"

const InsertBook = gql`
mutation MutationInsertBook($judul_buku: String, $pengarang: String, $penerbit: String, $tebal_buku: String, $cetakan: String, $sampul_buku: String, $sinopsis: String) {
    insert_buku(objects: {judul_buku: $judul_buku, pengarang: $pengarang, penerbit: $penerbit, tebal_buku: $tebal_buku, cetakan: $cetakan, sampul_buku: $sampul_buku, sinopsis: $sinopsis}) {
      returning {
        id_buku
        judul_buku
        pengarang
        penerbit
        tebal_buku
        cetakan
        sampul_buku
        sinopsis
        total_rating
        download
      }
    }
  }
`

export default InsertBook