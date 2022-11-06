import { useMutation } from "@apollo/client";
import DeleteFavorite from "../graphqls/mutation/DeleteFavorite";

const useDeleteFavorite = () => {
    const [deleteFavorite, { loading: deleteFavoriteLoading }] = useMutation(DeleteFavorite)
    return { deleteFavoriteLoading, deleteFavorite }
}

export default useDeleteFavorite