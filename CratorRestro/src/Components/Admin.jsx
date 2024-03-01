import React from 'react'

const Admin = () => {
  return (
    <div className='myDiv' style={{height:"100vh"}}>
      <form className='myForm' style={{backgroundImage:"none",backgroundColor:"orange"}}>
        <h1 style={{textAlign:"center",marginBottom:"2rem"}}>Admin Login</h1>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">User ID</label>
      <input type="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Username'/>

    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
    </div>

    <button type="button" class="btn btn-primary" onClick={()=>{alert("Login Successfully");}}>Login</button>
  </form></div>
  )
}

export default Admin