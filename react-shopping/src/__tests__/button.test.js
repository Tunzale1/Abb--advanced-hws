import { render, screen,cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store/index';
import Product from '../components/Product/Product';

afterEach(cleanup)

describe('buttons', () => {
  test('add to cart button rendering', () => {
    render(
      <Provider store={store}>
        <Product />
      </Provider>)

    const add = screen.getByTestId('btn_add')
    expect(add).toBeInTheDocument();
  })


  test('remove from cart button rendering', () => {
    const product = {
      "name": "Backpack",
      "price": 60,
      "img_path": "./images/product-1-2.jpg",
      "sku": 111111,
      "color": "white"
    }
    render(
      <Provider store={store}>
        <Product product={product} isInCart={true}/>
      </Provider>)

    const remove = screen.getByTestId('btn_remove')
    expect(remove).toBeInTheDocument();

  })
});




