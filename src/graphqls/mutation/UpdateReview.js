import { gql } from "@apollo/client"

const UpdateReview = gql`
mutation MyMutation($id_review: Int!, $hasil_review: String, $rating: Int) {
  update_review_by_pk(pk_columns: {id_review: $id_review}, _set: {hasil_review: $hasil_review, rating: $rating}) {
    id_review
    buku_id
    nama_reviewer
    hasil_review
    rating
  }
}
  `

export default UpdateReview