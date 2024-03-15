import { createContext, useState } from 'react'
import json from '../assets/photos.json'

export const JsonContext = createContext()

// eslint-disable-next-line react/prop-types
const JsonProvider = ({ children }) => {
  const [data, setData] = useState(json.photos)
  const filteredData = data.filter((photo) => photo.liked)
  const showHeart = filteredData.length > 0
  const handleLikeClick = (id) => {
    const updatedData = [...data]
    const post = updatedData.find((p) => p.id === id)
    post.liked = !post.liked
    setData(updatedData)
  }
  return (
    <JsonContext.Provider value={{ data, handleLikeClick, filteredData, showHeart }}>
      {children}
    </JsonContext.Provider>
  )
}

export default JsonProvider
