import Modal from '../components/Modal/Modal.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/index';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react'


test('Modal component snapshot', () => {
    const modalData = [
        {
            header: 'Are you want to add this item in your card?',
        }
    ];
    const tree = renderer
        .create(
            <Provider store={store}>
                <BrowserRouter>
                    <Modal modalData={modalData} />
                </BrowserRouter>
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('modal renders', () => {
    render(
        <Modal />
    )
    const modal = screen.getByTestId('modal')
    expect(modal).toBeInTheDocument()
})

test('modal closes', () => {
    const onClose = jest.fn()
    render(
        <Modal onClose={onClose} />
    )
    const overlay = screen.getByTestId("overlay");
    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalledTimes(1)
})


test('modal renders with modal data', () => {
    const modalDataMock = {
        header: 'Are you want to add this item in your card?',
        
      };
      render(
        <Modal modalData={modalDataMock} />
      );
    
      const modal = screen.getByTestId("modal");
      const title = screen.getByTestId("title");
      expect(modal).toBeInTheDocument();
      expect(title).toHaveTextContent(modalDataMock.header);
      
})