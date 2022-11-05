import { useMutation } from "@apollo/client";
import GetAllBooks from "../graphqls/GetAllBooks"
import InsertBook from "../graphqls/mutation/InsertBook";

const useInsertBook = () => {
    const [insertNewBook, { loading: insertBookLoading, error: insertBookError }] = useMutation(InsertBook, {
        refetchQueries: [{ query: GetAllBooks }]
    })

    return { insertNewBook, insertBookLoading, insertBookError }
}

export default useInsertBook