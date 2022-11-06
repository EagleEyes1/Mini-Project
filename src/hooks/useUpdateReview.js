import { useMutation } from "@apollo/client";
import UpdateReview from "../graphqls/mutation/UpdateReview";

const useUpdateReview = () => {
    const [updateOldReview, { loading: updateLoading, error: updateError }] = useMutation(UpdateReview)
    return { updateOldReview, updateLoading, updateError }
}

export default useUpdateReview