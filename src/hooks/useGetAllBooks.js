import { useQuery } from "@apollo/client";
import GetAllBooks from "../graphqls/GetAllBooks";

const useGetAllBooks = () => {
    const { data: booksData, loading: booksLoading, error: booksError } = useQuery(GetAllBooks)
    return { booksData, booksLoading, booksError }
}

export default useGetAllBooks