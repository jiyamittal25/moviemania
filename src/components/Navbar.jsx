import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import logo from "../assets/logo.png"
import {FiSearch} from 'react-icons/fi'

const Navbar = () => {
  const{user ,logOut}=UserAuth()
  const navigate=useNavigate()

  const handleLogout=async()=>{
    try{
      await logOut()
      navigate('/')
    }catch(error){
      console.log(error)
    }
  };
  //console.log(user)
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className='text-red-600 h-[159px] w-[160px] cursor-pointer font-bold p-2 text-2xl'>Movie Mania</h1>
        </Link>
      
       {user?.email ? <div className='absolute top-3 right-6'>
       
            <Link to='/account'>
            <button className='text-white pr-4'>Account</button></Link>
            <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
        </div>  :  <div className='absolute top-3 right-6'>
        
            <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button></Link>
            <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button></Link>
        </div>}
    </div>
  )
}

export default Navbar

