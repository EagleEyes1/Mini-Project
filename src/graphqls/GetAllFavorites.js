import { gql } from "@apollo/client"

const GetAllFavorites = gql`
subscription SubscriptionFavorite {
  favorit {
    id_favorit
    id_buku_favorit
    user_id
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
  `

export default GetAllFavorites