import { useSubscription } from "@apollo/client"
import SubsAllFavorites from "../graphqls/subscription/SubsAllFavorites"

const useSubsAllFavorites = (id_user) => {
    const { data: favoriteData, loading: favoriteLoading, error: favoriteError } = useSubscription(SubsAllFavorites, {
        variables: {
            id_user
        }
    })
    return { favoriteData, favoriteLoading, favoriteError }
}

export default useSubsAllFavorites