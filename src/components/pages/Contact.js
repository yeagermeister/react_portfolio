import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
      // Create state variables for the fields in the form
      // We are also setting their initial values to an empty string
      const [email, setEmail] = useState('');
      const [userName, setUserName] = useState('');
      const [message, setMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and messsage
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'userName') {
          setUserName(inputValue);
        } else {
          setMessage(inputValue);
        }
      };
    
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !userName) {
          setErrorMessage('Email or username is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the message is empty. If so, we set an error message regarding the message.
        }
        if (!message) {
          setErrorMessage(
            `The meesage field cannot be emtpy.`
          );
          return;
        }
        alert(`Hello ${userName}`);
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setMessage('');
        setEmail('');
      };
    
      return (
        <div class='container'>
          <form className="form">
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />

            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />

            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="textarea"
              placeholder="message"
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      );
    }

