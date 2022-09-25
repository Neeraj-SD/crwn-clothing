import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <h1>Hats Page</h1>
)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
      </Routes>
      {/* <HomePage /> */}
    </div >
  );
}

export default App;
