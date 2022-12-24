import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import './Form.css'; // Import the stylesheet
import {useState,useRef,useEffect} from 'react';
const Form = () => {
  const [isMobile, setIsMobile] = useState(false);
  const firstNameField = useRef(null);
  const lastNameField = useRef(null);
  const phoneField = useRef(null);
  const emailField = useRef(null);
  const messageField = useRef(null);
  const servicesField = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sendForm = (event) => {  
     event.preventDefault();
    let name;
    let description;

    if (isMobile) {
      name = `${firstNameField.current.value} ${lastNameField.current.value}`;
      description = messageField.current.value;
    } else {
      name = firstNameField.current.value;
      description = messageField.current.value;
    }

    const checkedServices = [...servicesField.current.querySelectorAll('input:checked')].map(
      (input) => input.value
    );
    const formData = {
      name: name,
      phone: phoneField.current.value,
      email: emailField.current.value,
      description: description,
      services: checkedServices,
    };

    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      phone: Yup.string()
        .max(10, 'Phone number must be no more than 10 characters')
        .required('Phone number is required'),
      description: Yup.string().required('Description is required'),
    }).nullable();
    

    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Form data is valid, send the request
        axios
          .post('https://mint-forms.ieee-mint.org/api/form/addresponse?formld-task', formData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          .then((response) => {
            if (response.status === 200) {
              console.log(formData);
              console.log("Successfully sent data");
            }
          })
          .catch((error) => {
            console.log(formData);
            console.error(error);
          });
      })
      .catch((errors) => {
        console.log(formData);
        console.error(errors);
      });
  };
  return (
    <form className="form" onSubmit={sendForm}>
       
      {!isMobile && (
        <>
        <label htmlFor="name">Name </label>
         <input type="text" id="name" name="name"  ref={firstNameField}/>
          
       <label htmlFor="email">Email</label>
       <input type="email" id="email" name="email" ref={emailField}/>
        
       <label htmlFor="phone">Phone Number</label>
       <input type="tel" id="phone" name="phone" ref={phoneField}/>
        
          <label htmlFor="message">How can we help?</label>
          <input type="msg-text"  id="message" name="message" ref={messageField}/>
           
           
          <label htmlFor="services">Services</label>
          <div className='checkbox-container'  ref={servicesField}>
           
          <div style={{ display: 'flex',flexDirection: 'row',gap: 2 }}>
            <input type="checkbox" id="website-design" name="services" value="Website design" />
            <label htmlFor="website-design" >Website design</label>
            <input type="checkbox" id="content-creation" name="services" value="Content creation"  style={{marginLeft:'100px'}} ref={servicesField}/>
            <label htmlFor="content-creation">Content creation</label>
          </div>
           
          <div style={{ display: 'flex' }}>
            <input type="checkbox" id="ux-design" name="services" value="UX design" />
            <label htmlFor="ux-design">UX design</label>
            <input type="checkbox" id="strategy-consulting" name="services" value="Strategy & consulting"style={{marginLeft:'140px'}} />
            <label htmlFor="strategy-consulting">Strategy & consulting</label>
          </div>
           
          <div style={{ display: 'flex' }}>
            <input type="checkbox" id="user-research" name="services" value="User research" />
            <label htmlFor="user-research">User research</label>
            <input type="checkbox" id="other" name="services" value="Other" style={{marginLeft:'117px'}}/>
            <label htmlFor="other">Other</label>
          </div>
          </div>
           
      <button type="submit" style={{width:'80%'}} onClick={sendForm}>Send  message</button>
        </>
      )}
      {
isMobile && (
        <>
        <label htmlFor="first-name">First Name </label>
        <input type="text" id="first-name" name="first-name" ref={firstNameField} />
         
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="last-name" ref={lastNameField} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" ref={emailField} />
       
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone"  ref={phoneField}/>
       
          <label htmlFor="mobile-message">Message:</label>
          <input type="msg-text" id="mobile-message" name="mobile-message" ref={messageField}/>
      <button type="submit" style={{width:'80%'}} onClick={sendForm}>Send  message</button>
           
        </>
      )}
      
    </form>
  );
};

export default Form;