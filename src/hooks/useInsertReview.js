import { useMutation } from "@apollo/client";
import GetAllReviewsByBookId from "../graphqls/GetAllReviewsByBookId";
import InsertReview from "../graphqls/mutation/InsertReview"

const useInsertReview = () => {
    const [insertNewReview, { loading: insertLoading, error: insertError }] = useMutation(InsertReview, {
        refetchQueries: [{ query: GetAllReviewsByBookId }]
    })

    return { insertNewReview, insertLoading, insertError }
}

export default useInsertReview