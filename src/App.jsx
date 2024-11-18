import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkError, setCheckError] = useState("");
  const [queryError, setQueryError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function validateFirstName() {
    if (firstName.trim() === "") {
      setFirstNameError("This field is required");
    } else {
      setFirstNameError("");
    }
  }

  function validateCheckBox() {
    if (!isChecked) {
      setCheckError("To submit a form, please consent to being contacted");
    }
  }
  function validateLastName() {
    if (lastName.trim() === "") {
      setLastNameError("This field is required");
    } else {
      setLastNameError("");
    }
  }
  function validateEmail() {
    if (emailAddress.trim() === "") {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }
  function validateMessage() {
    if (message.trim() === "") {
      setMessageError("This field is required");
    } else {
      setMessageError("");
    }
  }

  function handleRadio(event) {
    setQuery(event.target.value);
    if (event.target.checked) {
      setQueryError("");
    }
  }
  function handleMessage(event) {
    setMessage(event.target.value);
    if (event.target.value.trim() === "") {
      setMessageError("This field is required");
    } else {
      setMessageError("");
    }
  }

  function handleEmail(event) {
    setEmailAddress(event.target.value);
    if (event.target.value.trim() === "") {
      setEmailError("This field is required");
    } else {
      setEmailError("");
    }
  }
  function handleFirstName(event) {
    setFirstName(event.target.value);
    if (event.target.value.trim() === "") {
      setFirstNameError("This field is required");
    } else {
      setFirstNameError("");
    }
  }
  const handleLastName = (event) => {
    setLastName(event.target.value);
    if (event.target.value.trim() === "") {
      setLastNameError("This field is required");
    } else {
      setLastNameError("");
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    let hasError = false;

    if (lastName.trim() === "") {
      setLastNameError("This field is required");
      hasError = true;
    }

    if (firstName.trim() === "") {
      setFirstNameError("This field is required");
      hasError = true;
    }
    if (emailAddress.trim() === "") {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }
    if (message.trim() === "") {
      setMessageError("This field is required");
      hasError = true;
    }
    if (!isChecked) {
      setCheckError("To submit a form, please consent to being contacted");
      hasError = true;
    } else {
      setCheckError("");
    }

    // if there is no error, the form will be submitted
    if (!hasError) {
      setIsModalOpen(true);
    }
    if (!query) {
      setQueryError("Please select a query type");
      hasError = true;
    } else {
      setQueryError("");
    }
  }
  function handleCheckBoxChange(event) {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setCheckError("");
    }
  }

  return (
    <>
      <div
        class={`pop-up ${
          isModalOpen ? "show-modal" : ""
        } fixed top-0 left-0 right-0 hidden items-center justify-center z-50 pl-[30px] pr-[30px]`}
      >
        <div class="bg-darker900-grey p-6 rounded-lg shadow-lg text-center flex flex-col gap-3">
          <div className="flex gap-5">
            <img src="./images/icon-success-check.svg" alt="" />
            <p class="text-lg text-neutral-white font-medium">Message Sent!</p>
          </div>

          <p className="text-light-green text-left">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div>
      </div>

      <div className="main-container absolute left-1/2 top-[0px] transform -translate-x-1/2 w-full max-w-[800px] h-auto p-8 bg-white rounded-lg flex justify-center items-center">
        <form onSubmit={handleSubmit} className="container">
          <div>
            <h1 className="text-[24px] font-bold text-left mb-4">Contact Us</h1>
          </div>
          <div className="form-content flex flex-col gap-6">
            <div className="flex gap-4">
              <label className="flex-1" htmlFor="">
                First Name *
                <input
                  className="block w-full p-2 border border-gray-300 rounded"
                  type="text"
                  name="firstname"
                  onChange={handleFirstName}
                  onBlur={validateFirstName}
                  value={firstName}
                />
                {firstNameError && (
                  <p className="text-deep-red">{firstNameError}</p>
                )}
              </label>
              <label className="flex-1" htmlFor="">
                Last Name *
                <input
                  className="block w-full p-2 border border-gray-300 rounded"
                  type="text"
                  name="lastname"
                  onChange={handleLastName}
                  onBlur={validateLastName}
                  value={lastName}
                />
                {lastNameError && (
                  <p className="text-deep-red">{lastNameError}</p>
                )}
              </label>
            </div>
            <label htmlFor="">
              Email Address *
              <input
                value={emailAddress}
                className="block w-full p-2 border border-gray-300 rounded"
                type="email"
                onChange={handleEmail}
                onBlur={validateEmail}
                name="email"
              />
              {emailError && <p className="text-deep-red">{emailError}</p>}
            </label>
            <label htmlFor="">Query Type *</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label
                className={`query-label sm:w-[50%] ${
                  query === "general" ? "selected" : ""
                }`}
                htmlFor=""
              >
                <input
                  name="query"
                  value="general"
                  checked={query === "general"}
                  type="radio"
                  onChange={handleRadio}
                />
                General Enquiry
              </label>
              <label
                className={`query-label sm:w-[50%] ${
                  query === "support" ? "selected" : ""
                }`}
                htmlFor=""
              >
                <input
                  name="query"
                  value="support"
                  type="radio"
                  checked={query === "support"}
                  onChange={handleRadio}
                />
                Support Request
              </label>
            </div>
            {queryError && <p className="text-deep-red">{queryError}</p>}
            <label htmlFor="">
              Message *
              <textarea
                onBlur={validateMessage}
                value={message}
                className="block w-full p-2 border border-gray-300 rounded"
                onChange={handleMessage}
                cols="30"
                rows="4"
              ></textarea>
              {messageError && <p className="text-deep-red">{messageError}</p>}
            </label>
            <label className="flex items-center gap-2">
              <input
                onChange={handleCheckBoxChange}
                onBlur={validateCheckBox}
                type="checkbox"
              />
              I consent to being contacted by the team *
            </label>
            {checkError && <p className="text-deep-red">{checkError}</p>}
            <input
              className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
