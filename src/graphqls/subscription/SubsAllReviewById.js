import { gql } from "@apollo/client"

const SubAllReviewById = gql`
subscription SubscriptionReview($id_buku: Int) {
    review(where: {buku_id: {_eq: $id_buku}}) {
      id_review
      buku_id
      nama_reviewer
      hasil_review
      rating
    }
  }
  `

export default SubAllReviewById
