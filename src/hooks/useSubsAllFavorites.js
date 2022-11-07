import { useSubscription } from "@apollo/client"
import SubsAllFavorites from "../graphqls/subscription/SubsAllFavorites"

const useSubsAllFavorites = () => {
    const { data: favoriteData, loading: favoriteLoading, error: favoriteError } = useSubscription(SubsAllFavorites)
    return { favoriteData, favoriteLoading, favoriteError }
}

export default useSubsAllFavorites