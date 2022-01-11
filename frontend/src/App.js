import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Category from './Category';
import Thread from './Thread';
import Register from './Register';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/category/:categoryid" element={<Category/>} />
        <Route path="/thread/:threadid" element={<Thread/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
