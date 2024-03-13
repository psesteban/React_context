import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import JsonProvider from './context/ApiContext'
import Favorites from './views/Favorites'
import Home from './views/Home'
import './App.css'

const App = () => {
  return (
    <div>
      <JsonProvider>
        <Navbar />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/favoritos'
            element={<Favorites />}
          />
        </Routes>
      </JsonProvider>
    </div>
  )
}
export default App
