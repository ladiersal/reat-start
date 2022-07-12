import './App.css';
import logo from './indir.jpg'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <img src="/logo192.png" alt="" />
      <img src={logo} alt="" />
    </div>
  );
}

export default App;
