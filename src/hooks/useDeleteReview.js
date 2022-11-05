import { useMutation } from "@apollo/client";
import DeleteReview from "../graphqls/mutation/DeleteReview";
import GetAllReviewsByBookId from "../graphqls/GetAllReviewsByBookId"

const useDeleteReview = () => {
    const [deleteReview, { loading: deleteLoading }] = useMutation(DeleteReview, {
        refetchQueries: [GetAllReviewsByBookId]
    })

    return { deleteLoading, deleteReview }
}

export default useDeleteReview