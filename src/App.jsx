import{BrowserRouter , Routes , Route } from "react-router-dom"
import React from 'react';
import './App.css'
import { Landing } from "./components/Landing"
const Dashboard = React.lazy(()=> import("./components/Dashboard"))

function App() {
  // const navigate = useNavigate();

  return (
    <div>
      {/* <div style={{background:"skyblue"}}>
        hii my name is shri
      </div> */}
      {/* <BrowserRouter>
        <Appbar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={
            <Dashboard />
          }></Route>
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
// function Appbar(){
//   const navigate = useNavigate();
//   return <div>
//     <button onClick={()=>{
//         navigate("/")
//       }}>Landing Page</button>
//       <button onClick={()=>{
//         navigate("/dashboard")
//       }}>Dashboard</button>
//   </div>

// }

export default App
