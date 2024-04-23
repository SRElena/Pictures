import { useState } from 'react'
import SearchBar from './components/Searchbar'
import './App.css'

function App() {
  const [images, setCount] = useState([])

  return (
      <div>
        <h1>App</h1>
        <SearchBar onSumit={handleSubmit} />
    </div>
  )
}

export default App
