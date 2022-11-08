import { gql } from "@apollo/client"

const SubsAllFavorites = gql`
subscription SubscriptionFavorites($id_user: Int) {
    favorit(where: {user_id: {_eq: $id_user}}) {
      id_favorit
      id_buku_favorit
      isFavorit
      userid {
        id_user
        display_name
      }
      bukufavorit {
        judul_buku
        sampul_buku
        total_rating
      }
    }
  }
`

export default SubsAllFavorites