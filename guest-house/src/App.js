import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import GuestFormLayout from './views/GuestFormLayout';
import ThankPage from './views/ThankPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="whole-content-wrap">
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path="/guest-form" element={<GuestFormLayout/>}></Route>
              <Route path="/thankyou" element={<ThankPage/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
