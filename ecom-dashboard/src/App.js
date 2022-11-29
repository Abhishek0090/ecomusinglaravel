import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Login from './Login';
import { Route, Router, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Register from './Register';
import Home from './Home';

function App() {
  return (
    <div className="App">  
    {/* <Header/> */}
        {/* <h1>Ecom Dashboard</h1>  */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<AddProduct/>} />
      <Route path="/update" element={<UpdateProduct/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </div>
  );
}

export default App;
