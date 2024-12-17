import './App.css'
import Homepage from './components/homepage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LoginModal from './components/login'


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<LoginModal/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
