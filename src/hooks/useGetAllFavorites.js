import { useSubscription } from "@apollo/client"
import GetAllFavorites from "../graphqls/GetAllFavorites"

const useGetAllFavorites = () => {
    const { data: favoriteData, loading: favoriteLoading, error: favoriteError } = useSubscription(GetAllFavorites)
    return { favoriteData, favoriteLoading, favoriteError }
}

export default useGetAllFavorites