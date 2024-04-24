import { useState } from 'react'
import SearchBar from './components/Searchbar'
import ImageList from './components/ImagenList'
import SearchBar from './api'
import './App.css'
import SearchImage from './api'

function App() {
  const [images, setCount] = useState([])

  const handleSubmit = async(term) =>{
    console.log('Usted esta buscando con: ',term)
    const result = await SearchImage(term)

    console.log('coco')
    console.log(result)

    SetImages(result)
  }

  return (
      <div>
        <h1>App</h1>
        <SearchBar onSumit={handleSubmit} />
        <ImageList images={images} />
    </div>
  )
}

export default App
