import { useQuery } from "@apollo/client";
import IsEditReview from "../graphqls/IsEditReview";

const useIsEditReview = (id_buku, display_name) => {
    const { data: IsEditData, loading: IsEditLoading, error: IsEditError } = useQuery(IsEditReview, {
        variables: {
            id_buku,
            display_name
        }
    })
    return { IsEditData, IsEditLoading, IsEditError }
}

export default useIsEditReview