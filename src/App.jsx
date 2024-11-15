import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
   
    <form className='container'>
        <div>
          <h1 className='text-[30px]'>Contact Us</h1>
        </div>
        <div className="form-content flex flex-col gap-10 relative mt-[30px]">
          <label htmlFor="">
            First Name *
            <input className='block' type="text" />
            
          </label>
          <label htmlFor="">
            Last Name *
            <input className='block' type="text" />
            
          </label>
          <label htmlFor="">
            Email Address *
            <input className='block' type="email" />
            
          </label>
          <label className='relative top-[15px]' htmlFor="">
            Query Type *
          </label>
          <label className='query-label' htmlFor="">
            <input name='query' type="radio" />
            General Enquiry
          </label>
          <label className='query-label' htmlFor="">
            <input name='query' type="radio" />
            Support Request
          </label>
          <label htmlFor="">
            Message *
            <textarea className='block' name="" id="" cols="30" rows="10"></textarea>
            
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            I consent to being contacted by the team
          </label>
          <input className='cursor-pointer' type="submit" value="Submit" />
        </div>
    </form>
    
    </>
  )
}

export default App
