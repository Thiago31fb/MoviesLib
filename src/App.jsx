import { useState } from 'react'

import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App
