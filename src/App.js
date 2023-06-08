import React, {useEffect, useState} from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    // if(token!=null && jwt_decode(token)!==Error){
    //   let decoded = jwt_decode(token)
    //   setUser(decoded.sub)
    // }else{
    //   sessionStorage.removeItem("token")
    // }
    if(token!=null){
      let decoded = jwt_decode(token)
      setUser(decoded.sub)
    }
  },[user])

  return (
    <div className="App">
      <Routes>
      <Route 
      path="/" 
      element={user? <Navigate to="/dashboard" /> :<Login setUser={setUser}  />} 
      />
      <Route 
      path="/dashboard" 
      element={user ?<Dashboard setUser={setUser}/> : <Navigate to="/" />} 
      />
    </Routes>
    </div>
  );
}

export default App;