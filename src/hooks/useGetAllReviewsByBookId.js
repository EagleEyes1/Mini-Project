import { useQuery } from "@apollo/client";
import GetAllReviewsByBookId from "../graphqls/GetAllReviewsByBookId";

const useGetAllReviewsByBookId = (id_buku) => {
    const { data: reviewsData, loading: reviewsLoading, error: reviewsError } = useQuery(GetAllReviewsByBookId, {
        variables: {
            id_buku
        }
    })
    return { reviewsData, reviewsLoading, reviewsError }
}

export default useGetAllReviewsByBookId