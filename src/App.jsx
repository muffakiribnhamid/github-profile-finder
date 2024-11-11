import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import UserProfile from './components/UserProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <SearchBar/>
      <UserProfile/>
    </div>
  
  )

}

export default App
