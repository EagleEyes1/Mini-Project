import { gql } from "@apollo/client"

const GetBookById = gql`
query GetQueryById($id_buku: Int!) {
  buku_by_pk(id_buku: $id_buku) {
    id_buku
    judul_buku
    pengarang
    penerbit
    tebal_buku
    sampul_buku
    cetakan
    download
    sinopsis
    total_rating
    file
  }
}
`

export default GetBookById
