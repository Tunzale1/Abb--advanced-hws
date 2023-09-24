export function fetching () {
    return async (dispatch) => {
        try {
            const response = await fetch('../products.json')
            const data = await response.json();
            dispatch({
                type: 'fetching',
                payload: data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function addFavorites (product) {
    return dispatch => {
        dispatch({
            type: 'add_favs',
            payload: product
        })
    }
}

export function removeFavorites (product) {
    return dispatch => {
        dispatch({
            type: 'remove_favs',
            payload: product
        })
    }
}

export function addProducts (product) {
    return dispatch => {
        dispatch({
            type: 'add_items',
            payload: product
        })
    }
}

export function removeProducts (productId)  {
    return dispatch => {
        dispatch({
            type: 'remove_items',
            payload: productId
        })
    }
}

export function setTotal (total) {
    return dispatch => {
        dispatch({
            type: 'set_total',
            payload: total
        })
    }
}

export function setModal (isModalOpen, modalData, selectedProductId) {
    return dispatch => {
        dispatch({
            type: 'set_modal',
            payload: {isModalOpen, modalData, selectedProductId}
        })
    }
}

export const clearShoppingCart = () => {
    return dispatch => {
        dispatch({
            type: 'clear'
        })
    }
}