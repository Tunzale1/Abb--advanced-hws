const getlocal = (key) => {
    const localData = localStorage.getItem(key);

    try {
        const parsedData = JSON.parse(localData)
        return parsedData || [];
    }
    catch (e) {
        return []
    }
}

const initialState = {
    favorites: getlocal('favorites')
}

export function favsreducer (state = initialState, action) {
    switch (action.type) {
        case 'add_favs':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case 'remove_favs':
            return {
                ...state,
                favorites: state.favorites.filter((fav) => fav.sku !== action.payload)
            }
     
        default:
            return state
    }
}