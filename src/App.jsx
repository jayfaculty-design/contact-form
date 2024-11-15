import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <div>
      <h1>Contact Us</h1>
     </div>
     <div className="form-content">
      <label htmlFor="">
        First Name *
        <input type="text" />
        
      </label>
      <label htmlFor="">
        Last Name *
        <input type="text" />
        
      </label>
      <label htmlFor="">
        Email Address *
        <input type="email" />
        
      </label>
      <label htmlFor="">
        Query Type *
      </label>
      <label htmlFor="">
        <input type="radio" />
        General Enquiry
      </label>
      <label htmlFor="">
        <input type="radio" />
        Support Request
      </label>
      <label htmlFor="">
        Message *
        <textarea name="" id="" cols="30" rows="10"></textarea>
        
      </label>
      <label htmlFor="">
        <input type="checkbox" name="" id="" />
        I consent to being contacted by the team
      </label>
     </div>
    </>
  )
}

export default App
