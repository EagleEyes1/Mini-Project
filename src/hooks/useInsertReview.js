import { useMutation } from "@apollo/client";
import InsertReview from "../graphqls/mutation/InsertReview"

const useInsertReview = () => {
    const [insertNewReview, { loading: insertLoading, error: insertError }] = useMutation(InsertReview)
    return { insertNewReview, insertLoading, insertError }
}

export default useInsertReview