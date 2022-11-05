import { useMutation } from "@apollo/client";
import GetAllReviewsByBookId from "../graphqls/GetAllReviewsByBookId";
import UpdateReview from "../graphqls/mutation/UpdateReview";

const useUpdateReview = () => {
    const [updateOldReview, { loading: updateLoading, error: updateError }] = useMutation(UpdateReview, {
        refetchQueries: [{ query: GetAllReviewsByBookId }]
    })

    return { updateOldReview, updateLoading, updateError }
}

export default useUpdateReview