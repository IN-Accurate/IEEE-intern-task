import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import './Form.css'; // Import the stylesheet
import {useState,useRef,useEffect} from 'react';
const Form = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const firstNameField = useRef(null);
  const lastNameField = useRef(null);
  const phoneField = useRef(null);
  const emailField = useRef(null);
  const messageField = useRef(null);
  const servicesField = useRef(null);
  
  const  handleChange=(event) =>{
    setIsChecked(event.target.checked);
  }

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
    
    const phoneNumberPattern = /^\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const phoneNumber = phoneField.current.value.trim();
    const email = emailField.current.value.trim();

    if (!phoneNumberPattern.test(phoneNumber)) {
      alert('Please enter a valid phone number');
    } else if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
    } 
    else if(isChecked==='False'){


    }
    
    else if(isChecked==='True') {
      console.log(isChecked);
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
          .post('https://mint-forms.ieee-mint.org/api/form/addresponse?formId=task', formData, {formId: 'task',
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
    }
  
  };
  return (
    <form className="form" onSubmit={sendForm}>
       <div className="form-header">Let's level up your brand,together</div>
       <div className="secondary-hero-text">You can reach us anytime via
    <a href="https://mail.google.com/" target="_blank" rel="noreferrer" className="mail-link">
    hi@untitledui.com
    </a></div>
      {!isMobile && (
        <>
        <label htmlFor="name" >Name </label>
         <input type="text" id="name" name="name" placeholder='Your name' ref={firstNameField}/>
          
       <label htmlFor="email">Email</label>
       <input type="email" id="email" name="email" placeholder='you@company.com' ref={emailField}/>
        
       <label htmlFor="phone">Phone Number</label>
       <input type="tel" id="phone" name="phone" placeholder='+1 (555) 000-0000' ref={phoneField}/>
        
          <label htmlFor="message">How can we help?</label>
          <textarea type="msg-text"  id="message" name="message" className='msg-txt-container'
           placeholder='Tell us a little about the project...'ref={messageField} />
           
           
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
            <input type="checkbox" id="strategy-consulting" name="services" value="Strategy & consulting"style={{marginLeft:'150px'}} />
            <label htmlFor="strategy-consulting">Strategy & consulting</label>
          </div>
           
          <div style={{ display: 'flex' }}>
            <input type="checkbox" id="user-research" name="services" value="User research" />
            <label htmlFor="user-research">User research</label>
            <input type="checkbox" id="other" name="services" value="Other" style={{marginLeft:'122px'}}/>
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
          <textarea type="msg-text" id="mobile-message" name="mobile-message" ref={messageField}/>
          
          <label htmlFor="services" style={{marginTop:'10px'}}>Services</label>
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
          <div style={{ display: 'flex',marginTop:'20px',marginBottom:'20px'}}>
            <input type="checkbox" id="privacy-policy" name="privacy-policy" value="privacy-policy" style={{marginLeft:'117px'}}
            
        checked={isChecked}
        onChange={handleChange}/>
            <label htmlFor="other">You agree to our friendly <a href="https://mail.google.com/" target="_blank" rel="noreferrer" className="mail-link">
            privacy policy
    </a>
            </label>
            </div>
      <button type="submit" style={{width:'80%',marginTop:'100px'}} onClick={sendForm}>Send  message</button>
           
        </>
      )}
      
    </form>
  );
};

export default Form;
