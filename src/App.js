import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
      {/* <HomePage /> */}
    </div >
  );
}

export default App;
