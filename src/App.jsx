import { BrowserRouter, } from 'react-router-dom'
import Pages from './pages/Pages'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  )
}

export default App
