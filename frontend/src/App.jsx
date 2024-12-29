import { Route, Routes } from "react-router-dom"
import { RoutesData } from "./Routes/RoutesData.jsx"
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Routes>
        {RoutesData.map((item, index)=>{
          return(
            <Route path={item.path} element={item.element} key={index} />
          )
        })}
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App