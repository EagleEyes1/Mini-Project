import { gql } from "@apollo/client"

const DeleteReview = gql`
mutation MutationDeleteReview($id_review: Int) {
    delete_review(where: {id_review: {_eq: $id_review}}) {
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

export default DeleteReview