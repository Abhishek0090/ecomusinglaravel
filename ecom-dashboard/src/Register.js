import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function signUp(){
    console.warn(name,email,password);

    let item = {name,email,password};
    let result = await fetch("http://localhost:8000/api/register",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    result = await result.json();
    localStorage.setItem('user-info',JSON.stringify(result))
    console.warn(result);
    navigate.push('/add')
  }



  return (
    <div className='col-sm-6 offset-sm-3'>
      
      <h1>Register Page</h1>
    <input type="text"  onChange={(e)=>{setName(e.target.value)}}className='form-control' placeholder='Enter Your Name' />
    <br/>
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className='form-control' placeholder='Enter Your Email' />
    <br/>
    <input type="password"  onChange={(e)=>{setPassword(e.target.value)}}className='form-control' placeholder='Enter Your Password' />
    <br/>
    <button className='btn btn-primary'>Sign Up</button>
    


    
    </div>
  )
}

export default Register