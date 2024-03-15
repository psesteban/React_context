import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { JsonContext } from '../context/ApiContext'

const Navbar = () => {
  const { filteredData, showHeart } = useContext(JsonContext)

  return (
    <nav className='navbar'>
      <Link to='/'> Home  |</Link>  <Link to='/favoritos'>| Favoritos   {showHeart && (<> ❤️<sup>{filteredData.length}</sup></>)} </Link>
    </nav>
  )
}
export default Navbar
