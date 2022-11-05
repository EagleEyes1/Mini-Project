import { useLazyQuery } from "@apollo/client";
import SearchBook from "../graphqls/SearchBook";

const useSearchBooks = () => {
    const [searchBook, { data: searchData, loading: searchLoading, error: searchError }] = useLazyQuery(SearchBook)
    return { searchBook, searchData, searchLoading, searchError }
}

export default useSearchBooks