import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/routes"
import { UserAuth } from "./context/UserAuth"
const router = createBrowserRouter(routes)
import { useState } from "react"
import "./style/css/main.css"


function App() {
  
  const [isLogin, setIsLogin] = useState({})

  return (
    <>
    <UserAuth.Provider value={{isLogin, setIsLogin}}>
    <RouterProvider router={router}/>
  </UserAuth.Provider></>
  )
}

export default App
