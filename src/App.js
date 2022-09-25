import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      {/* <HomePage /> */}
    </div >
  );
}

export default App;
