import { gql } from "@apollo/client"

const GetUser = gql`
    query QueryGetUser($email: String, $password: String) {
    user(where: {email: {_eq: $email}, _and: {password: {_eq: $password}}}) {
    id_user
    display_name
    email
  }
}
`

export default GetUser