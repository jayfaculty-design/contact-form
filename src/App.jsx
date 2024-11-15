import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [query, setQuery] = useState('general');
  const [emailAddress, setEmailAddress] = useState("")
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName] = useState('');

  function handleRadio(event){
    setQuery(event.target.value)
  }
  function handleEmail(event){
    setEmailAddress(event.target.value)
   
  }
  function handleFirstName(event){
    setFirstName(event.target.value)
   
  }
  const handleLastName = (event) => {
    setLastName(event.target.value);
   
  }

  return (
    <>
   
    <form className='container'>
        <div>
          <h1 className='text-[30px]'>Contact Us</h1>
        </div>
        <div className="form-content flex flex-col gap-10 relative mt-[30px]">
          <label htmlFor="">
            First Name *
            <input 
              className={`block all-input`}
              type="text" 
              name='firstname'
              onChange={handleFirstName}
              value={firstName}
            />
            
          </label>
          <label htmlFor="">
            Last Name *
            <input className={`block all-input`}
              type="text" 
              name='lastname'
              onChange={handleLastName}
              value={lastName}
              
              />
            
          </label>
          <label htmlFor="">
            Email Address *
            <input 
              value={emailAddress} 
              className={`block all-input`} 
              type="email" 
              onChange={handleEmail}
              name='email'
            />
            
          </label>
          <label className='relative top-[15px]' htmlFor="">
            Query Type *
          </label>
          <label className={`query-label ${query === 'general' ? 'selected' : ""}`} htmlFor="">
            <input 
              name='query' 
              value='general' 
              checked={query === 'general'} 
              type="radio"
              onChange={handleRadio}
            />
            General Enquiry
          </label>
          <label className={`query-label ${query === 'support' ? 'selected' : ''}`} htmlFor="">
            <input 
              name='query'
              value='support' 
              type="radio" 
              checked={query === 'support'} 
              onChange={handleRadio}
            />
            Support Request
          </label>
          <label htmlFor="">
            Message *
            <textarea className='block all-input' name="" id="" cols="30" rows="10"></textarea>
            
          </label>
          <label className='flex  gap-[10px]' htmlFor="">
            <input type="checkbox" name="" id="" />
            I consent to being contacted by the team *
          </label>
          <input className='cursor-pointer' type="submit" value="Submit" />
        </div>
    </form>
    
    </>
  )
}

export default App
