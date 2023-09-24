const initialState = {
    products: []
}

export function productsreducer (state = initialState, action) {
    switch (action.type) {
        case 'fetching':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}