import React from 'react'

const Dashboard = ({ setUser }) => {
  const logout = ()=>{
    sessionStorage.removeItem("token");
    setUser(false)
  }
  return (
    <div className='dashboard'>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard