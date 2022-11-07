import { gql } from "@apollo/client"

const InsertFavorite = gql`
mutation MyMutation($id_buku_favorit: Int, $id_user: Int) {
    insert_favorit(objects: {id_buku_favorit: $id_buku_favorit, user_id: $id_user}) {
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