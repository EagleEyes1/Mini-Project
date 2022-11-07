import { useMutation } from "@apollo/client";
import InsertFavorite from "../graphqls/mutation/InsertFavorite";

const useInsertFavorite = () => {
    const [insertNewFavorite, { loading: insertFavoriteLoading, error: insertFavoriteError }] = useMutation(InsertFavorite)
    return { insertNewFavorite, insertFavoriteLoading, insertFavoriteError }
}

export default useInsertFavorite