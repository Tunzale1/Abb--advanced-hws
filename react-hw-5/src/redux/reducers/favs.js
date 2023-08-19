const getlocal = (key) => {
    const localData = JSON.parse(localStorage?.getItem(key));
    return localData || [];
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
                favorites: state.favorites.filter((id) => id !== action.payload)
            }
     
        default:
            return state
    }
}