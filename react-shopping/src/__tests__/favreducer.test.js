import { favsreducer } from '../redux/reducers/favs';


describe('favoriteReducer', () => {
    it('default', () => {
        const initialState = {
            favorites: []
        }
        const action = { type: 'default' };
        expect(favsreducer(initialState, action)).toEqual(initialState);
    })

    it('add_favs action', () => {
        const initialState = {
            favorites: []
        }
        const action = {
            type: 'add_favs', payload: {
        "name": "Backpack",
        "price": 60,
        "img_path": "./images/product-1-2.jpg",
        "sku": 111111,
        "color": "white"
            }
        };
        const expectedState = {
            favorites: [{
        "name": "Backpack",
        "price": 60,
        "img_path": "./images/product-1-2.jpg",
        "sku": 111111,
        "color": "white"
            }]
        };
        expect(favsreducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle remove_favorites action', () => {
        const initialState = {
            favorites: [{
        "name": "Backpack",
        "price": 60,
        "img_path": "./images/product-1-2.jpg",
        "sku": 111111,
        "color": "white"
            }]
        }
        const action = {
            type: 'remove_favs', payload: 111111
        };
        const expectedState = {
            favorites: [] 
        };
        expect(favsreducer(initialState, action)).toEqual(expectedState);
    });
})
