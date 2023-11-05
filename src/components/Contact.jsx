// import useState
import { useState } from 'react'
// import instruction and emailInvalid from UI informants
import { Instruction, EmailInvalid } from './UI/Informants'
// import button from UI button
import Button from './UI/Button'

// function to render Contact component
export default function Contact() {
  // set up useState for nameValue, emailValue, messageValue, valid, and insDisplay
  const [ nameValue, setNameValue ] = useState('');
  const [ emailValue, setEmailValue ] = useState('');
  const [ messageValue, setMesssageValue ] = useState('');
  // refers to validity of email
  const [ valid, setValid ] = useState(true);
  // refers to if the instruction display is needed
  const [ insDisplay, setInstructionDisplay ] = useState(false);

  // function to check if insDisplay is true and render Instruction component if so
  const checkInsDisplay = () => {
    if (insDisplay === true ) {
      return <Instruction />
    }
  }
  // function to check if valid is false and if so, render the EmailInvalid component
  const checkEmailDisplay = () => {
    if (valid === false) {
      return <EmailInvalid />
    }
  }
  // function to check email input against regular expression for proper email formatting
  const validateEmail = (str) => {
    // setEmailValue to input
    setEmailValue(str);
    if (/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(str) === true) {
      // set valid true if passes
      setValid(true);
    } else {
      // set valid false if fails
      setValid(false);
    }
  }
  // function to check if any value in input is missing
  const checkInput = () => {
    if ( !nameValue || !emailValue || !messageValue) {
      // setInstructionDisplay to true if any is missing
      setInstructionDisplay(true);
    } else {
      // set instruction display to false if everything is present
      setInstructionDisplay(false);
    }
  }

  return (
    <div>
      <h3 className='text-3xl font-semibold mb-12'>Contact Me</h3>
      <form>
        <div className="space-y-12 grid grid-cols-12">
          <div className="col-span-full lg:col-span-7">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 leading-7">
              Your Name
              <div className="mt-2">
                <input
                  // set value to nameValue
                  value={nameValue}
                  // on change event, setNameValue to the e.target.value
                  onChange={(e) => setNameValue(e.target.value)}
                  // check input when input box loses focus
                  onBlur={() => checkInput()}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded bg-gray-200 text-gray-900 border-0 p-1.5 ring-1 ring-inset ring-[#11f0b5] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#11f0b5] sm:text-sm sm:leading-7"
                  />
              </div>
            </label>
          </div>
          <div className="col-span-full lg:col-span-7">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 leading-7">
              Email Address
              <div className="mt-2">
                <input
                // set value to email value
                  value={emailValue}
                  // on change event, run validateEmail functioin to validate email and set as emailValue
                  onChange={(e) => validateEmail(e.target.value)}
                  // check input when input box loses focus
                  onBlur={() => checkInput()}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded bg-gray-200 text-gray-900 border-0 p-1.5 ring-1 ring-inset ring-[#11f0b5] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#11f0b5] sm:text-sm sm:leading-7"
                  />
              </div>
            </label>
          </div>
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-300 leading-7">
              Message
              <div className="mt-2">
                <textarea
                  // set value to messageValue
                  value={messageValue}
                  // on change event, set messageValue to e.target.value
                  onChange={(e) => setMesssageValue(e.target.value)}
                  // check input when input box loses focus
                  onBlur={() => checkInput()}
                  id="message"
                  name="message"
                  rows={3}
                  type="text"
                  className="block w-full rounded bg-gray-200 text-gray-900 border-0 p-1.5 ring-1 ring-inset ring-[#11f0b5] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#11f0b5] sm:text-sm sm:leading-7"
                  
                  />
              </div>
            </label>
          </div>
        </div>
        <div>
          {/* run checkInsDisplay to render any instruction here */}
          {checkInsDisplay()}
          {/* run checkEmailDisplay to render any email invalidity messages here */}
          {checkEmailDisplay()}
          {/* render Button component for submit button */}
          <Button type='submit' title='Submit'/>
        </div>
      </form>
    </div>
  )
}