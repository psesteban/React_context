import { createContext, useState } from 'react'
import json from '../assets/photos.json'

export const JsonContext = createContext()

// eslint-disable-next-line react/prop-types
const JsonProvider = ({ children }) => {
  const [data, setData] = useState(json.photos)
  const handleLikeClick = (id) => {
    const updatedData = [...data]
    const post = updatedData.find((p) => p.id === id)
    post.liked = !post.liked
    setData(updatedData)
  }
  return (
    <JsonContext.Provider value={{ data, setData, handleLikeClick }}>
      {children}
    </JsonContext.Provider>
  )
}

export default JsonProvider
