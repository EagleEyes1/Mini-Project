import { gql } from "@apollo/client"

const InsertFavorite = gql`
mutation MutationInsertFavorite($id_buku_favorit: Int, $user_id: Int) {
  insert_favorit(objects: {id_buku_favorit: $id_buku_favorit, user_id: $user_id, isFavorit: true}) {
    returning {
      bukufavorit {
        judul_buku
        sampul_buku
        total_rating
      }
      userid {
        display_name
      }
    }
  }
}
  `

export default InsertFavorite