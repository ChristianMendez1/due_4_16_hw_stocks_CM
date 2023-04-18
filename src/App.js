import './App.css';
import { Route, Routes } from 'react-router-dom'

//components
import Home from './components/home'
import About from './components/about'
import Nav from './components/nav'
import Dashboard from './components/dashboard'
import StockSymbol from './components/stock'


function App() {
  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route path ='/' element={<Home />}/>
        <Route path ='/About' element={<About/>}/>
        <Route path ='/Stocks' element={<Dashboard/>}/>
        <Route path="/Stocks/:symbol" element={<StockSymbol/>}/>
      </Routes>
    </div>
  );
}

export default App;
