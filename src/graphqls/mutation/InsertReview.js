import { gql } from "@apollo/client"

const InsertReview = gql`
mutation MutationInsert($hasil_review: String, $rating: Float, $buku_id: Int = 10) {
  insert_review(objects: {hasil_review: $hasil_review, rating: $rating, buku_id: $buku_id}) {
    returning {
      id_review
      buku_id
      nama_reviewer
      hasil_review
      rating
    }
  }
}
  `

export default InsertReview