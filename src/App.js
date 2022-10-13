import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom'
import AllShips from './pages/AllShips/AllShips';
import ShipDetails from './pages/ShipDetails/ShipDetails';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<AllShips />} />
        <Route path='/starship' element={<ShipDetails />} />
      </Routes>
    </>
  );
}

export default App;
