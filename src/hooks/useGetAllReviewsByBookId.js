import { useSubscription } from "@apollo/client";
import SubAllReviewById from "../graphqls/subscription/SubsAllReviewById";

const useGetAllReviewsByBookId = (id_buku) => {
    const { data: reviewsData, loading: reviewsLoading, error: reviewsError } = useSubscription(SubAllReviewById, {
        variables: {
            id_buku
        }
    })
    return { reviewsData, reviewsLoading, reviewsError }
}

export default useGetAllReviewsByBookId