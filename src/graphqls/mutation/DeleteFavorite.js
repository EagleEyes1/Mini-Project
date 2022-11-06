import { gql } from "@apollo/client"

const DeleteFavorite = gql`
mutation MutationDeleteFavorite($id_favorit: Int!) {
    delete_favorit_by_pk(id_favorit: $id_favorit) {
      id_buku_favorit
      id_favorit
      user_id
      bukufavorit {
        judul_buku
        sampul_buku
        total_rating
      }
    }
  }
  `

export default DeleteFavorite