import { useState, useEffect } from 'react'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
