import { useState } from 'react'
import SearchBar from './components/Searchbar'
import imageList from './components/imagenList'
import SearchBar from './api'
import './App.css'
import searchImage from './api'

function App() {
  const [images, setCount] = useState([])

  const handleSubmit = async(term) =>{
    console.log('Usted esta buscando con: ',term)
    const result = await searchImage(term)

    console.log('coco')
    console.log(result)

    setImages(result)
  }

  return (
      <div>
        <h1>App</h1>
        <SearchBar onSumit={handleSubmit} />
        <imageList images={images} />
    </div>
  )
}

export default App
