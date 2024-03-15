import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import JsonProvider from './context/ApiContext'
import Favorites from './views/Favorites'
import Home from './views/Home'
import NotFound from './views/Notfound'
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
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </JsonProvider>
    </div>
  )
}
export default App
