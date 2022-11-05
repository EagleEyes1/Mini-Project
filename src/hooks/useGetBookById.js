import { useQuery } from "@apollo/client";
import GetBookById from "../graphqls/GetBookById";

const useGetBookById = (id_buku) => {
    const { data: bookData, loading: bookLoading, error: bookError } = useQuery(GetBookById, {
        variables: {
            id_buku
        }
    })
    return { bookData, bookLoading, bookError }
}

export default useGetBookById