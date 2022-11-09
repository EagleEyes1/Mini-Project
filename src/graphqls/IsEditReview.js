import { gql } from "@apollo/client"

const IsEditReview = gql`
query QueryIsEdit($display_name: String, $id_buku: Int) {
  review(where: {nama_reviewer: {_eq: $display_name}, buku_id: {_eq: $id_buku}}) {
    isEdit
    buku_id
    id_review
    hasil_review
    nama_reviewer
  }
}
`

export default IsEditReview
