const getlocal = (key) => {
    const localData = JSON.parse(localStorage?.getItem(key));
    return localData || [];
}

const initialState = {
    cart: getlocal('cart'),
    total: 0
}

export function cartreducer (state = initialState, action) {
    switch (action.type) {
        case 'add_items':
            return {
                cart: [...state.cart, action.payload]
            }
        case 'remove_items':
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }

        case 'set_total':
            return {
                ...state,
                total: action.payload
            }
        case 'clear':
            localStorage.removeItem('cart')
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}