import './App.css';
import { fetching} from './redux/actions/index';
import { useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'
import {Cart, Favorites, Home} from '../src/pages';
import { useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetching())
  }, [dispatch]);


  return (

    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>

    </>
  )
}

export default App;