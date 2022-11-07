import { gql } from "@apollo/client"

const InsertReview = gql`
mutation MutationInsertReview($buku_id: Int, $nama_reviewer: String, $hasil_review: String, $rating: Float) {
  insert_review(objects: {buku_id: $buku_id, nama_reviewer: $nama_reviewer, hasil_review: $hasil_review, rating: $rating}) {
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