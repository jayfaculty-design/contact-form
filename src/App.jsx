import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [query, setQuery] = useState('');
  const [emailAddress, setEmailAddress] = useState("")
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [checkError, setCheckError] = useState('');
  const [queryError, setQueryError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false)
  

  function validateFirstName() {
    if (firstName.trim() === '') {
      setFirstNameError('This field is required');
    } else {
      setFirstNameError('');
    }
  }


  function validateCheckBox(){
    if(!isChecked){
      setCheckError('To submit a form, please consent to being contacted')
    }
  }
  function validateLastName() {
    if (lastName.trim() === '') {
      setLastNameError('This field is required');
    } else {
      setLastNameError('');
    }
  }
  function validateEmail() {
    if (emailAddress.trim() === '') {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }
  function validateMessage() {
    if (message.trim() === '') {
      setMessageError('This field is required');
    } else {
      setMessageError('');
    }
  }

  function handleRadio(event){
    setQuery(event.target.value)
    if(event.target.checked){
      setQueryError('')
    }
  }
  function handleMessage(event){
    setMessage(event.target.value)
    if(event.target.value.trim() === ''){
      setMessageError('This field is required')
    }
    else {
      setMessageError("")
    }
  }

  function handleEmail(event){
    setEmailAddress(event.target.value)
    if(event.target.value.trim() === ''){
      setEmailError('This field is required')
    }
    else {
      setEmailError("")
    }
  }
  function handleFirstName(event){
    setFirstName(event.target.value)
    if(event.target.value.trim() === ''){
      setFirstNameError('This field is required')
    }
    else {
      setFirstNameError("")
    }
   
  }
  const handleLastName = (event) => {
    setLastName(event.target.value);
    if(event.target.value.trim() === ''){
      setLastNameError('This field is required')
    }
    else {
      setLastNameError("")
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    let hasError = false;

    if(lastName.trim() === ''){
      setLastNameError('This field is required')
      hasError = true;
    }
    
    if(firstName.trim() === ''){
      setFirstNameError('This field is required')
      hasError = true;
    }
    if(emailAddress.trim() === ''){
      setEmailError('Please enter a valid email address')
      hasError = true;
    }
    if(message.trim() === ''){
      setMessageError('This field is required')
      hasError = true;
    }
    if(!isChecked){
      setCheckError('To submit a form, please consent to being contacted')
      hasError = true;
    }
    else {
      setCheckError('')
    }

    // if there is no error, the form will be submitted
    if(!hasError){
      setIsModalOpen(true)
    }
    if(!query){
      setQueryError('Please select a query type')
      hasError = true;
    }
    else {
      setQueryError('')
    }
  }
  function handleCheckBoxChange(event){
    setIsChecked(event.target.checked);
    if(event.target.checked){
      setCheckError("");
    }
  }

  return (
    <>
    {isModalOpen && (
       <div id='overlay'>
        <div className={`pop-up`}>
          <div className='flex gap-2 check'>
            <img src="./images/icon-success-check.svg" alt="" />
            <p>Message Sent!</p>
        </div>
  
        <p className='relative ml-[20px]'>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      </div>
    )}

     
    

     <div className={`pop-up`}>
      <div className='flex gap-2 check'>
      <img src="./images/icon-success-check.svg" alt="" />
      <p>Message Sent!</p>
      </div>
      
      <p className='relative ml-[20px]'>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
   <div className="main-container md:w-[100%] md:pl-[100px] md:pr-[100px] mt-[10px] h-[100%] flex justify-center items-center">
   <form onSubmit={handleSubmit} className='container'>
        <div>
          <h1 className='text-[30px]'>Contact Us</h1>
        </div>
        <div className="form-content flex w-[100%] flex-col gap-10 relative mt-[30px]">
          <div className='flex gap-[30px] w-[100%] content'>
          <label className='flex-1' htmlFor="">
            First Name *
            <input 
              className={`block sm:inline-block all-input`}
              type="text" 
              name='firstname'
              onChange={handleFirstName}
              onBlur={validateFirstName}
              value={firstName}
            />
            {firstNameError && <p style={{ color: "red" }}>{firstNameError}</p>}
          </label>
          <label className='flex-1' htmlFor="">
            Last Name *
            <input className={`block sm:inline-block all-input`}
              type="text" 
              name='lastname'
              onChange={handleLastName}
              onBlur={validateLastName}
              value={lastName}
              
              />
              {lastNameError && <p style={{ color: "red" }}>{lastNameError}</p>}
            
          </label>
          </div>
          
          
          <label htmlFor="">
            Email Address *
            <input 
              value={emailAddress} 
              className={`block all-input`} 
              type="email" 
              onChange={handleEmail}
              onBlur={validateEmail}
              name='email'
            />
           {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            
          </label>
          <label className='relative top-[15px]' htmlFor="">
            Query Type *
          </label>
          <div className='flex flex-col gap-[30px] sm:flex-row relative'>
          <label className={`query-label sm:w-[50%] ${query === 'general' ? 'selected' : ""}`} htmlFor="">
            <input 
              name='query' 
              value='general' 
              checked={query === 'general'} 
              type="radio"
              onChange={handleRadio}
            />
            General Enquiry
          </label>
          <label className={`query-label sm:w-[50%] ${query === 'support' ? 'selected' : ''}`} htmlFor="">
            <input 
              name='query'
              value='support' 
              type="radio" 
              checked={query === 'support'} 
              onChange={handleRadio}
            />
            Support Request
          </label>
          </div>
          {queryError && <p style={{ color: "red" }}>{queryError}</p>}
          
          <label htmlFor="">
            Message *
            <textarea onBlur={validateMessage} value={message} className='block all-input' onChange={handleMessage} cols="30" rows="10"></textarea>
            {messageError && <p style={{ color: "red" }}>{messageError}</p>}
          </label>
          <label className='flex  gap-[10px] relative ' htmlFor="">
            <input onChange={handleCheckBoxChange} onBlur={validateCheckBox} type="checkbox" name="" id="" />
            I consent to being contacted by the team *
          </label>
          {checkError && <p style={{ color: "red" }}>{checkError}</p>}
          <input className='cursor-pointer relative' type="submit" value="Submit" />
        </div>
    </form>

   </div>
        
    </>
  )
}



export default App
