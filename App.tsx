import { Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import { ThemeProvider } from "@/components/theme-provider"
import Home from "./pages/Home"
import Compile from "./pages/Compile"
import NotFound from "./pages/NotFound"

  

function App() {
   

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">  
       <Header/>
        <Routes>
          <Route path="/" element={<><Home/></>}/>
          <Route path="/compile" element={<><Compile/></>}/>
          <Route path="*" element={<><NotFound/></>}/>
        </Routes>
      </ThemeProvider> 
        
    </>
  )
}

export default App
