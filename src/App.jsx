import './App.css'
import Layout from './Layout'
import {Routes} from "react-router-dom"
import HomePage from './Homepage'
import { Route } from 'react-router-dom'


function App() {


  return (
    <div className='App'>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
     </Routes> 
    </div>
  )
}

export default App
