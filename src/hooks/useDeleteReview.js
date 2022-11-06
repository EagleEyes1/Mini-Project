import { useMutation } from "@apollo/client";
import DeleteReview from "../graphqls/mutation/DeleteReview";

const useDeleteReview = () => {
    const [deleteReview, { loading: deleteLoading }] = useMutation(DeleteReview)
    return { deleteLoading, deleteReview }
}

export default useDeleteReview