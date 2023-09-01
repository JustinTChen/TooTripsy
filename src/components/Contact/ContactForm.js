import React, { useState } from 'react';


import { Row, Col } from "react-bootstrap";

import emailjs from 'emailjs-com';

import { SERVICE_ID, TEMPLATE_ID, EMAIL_PK } from '../../constants';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, EMAIL_PK)
      .then((result) => {
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });

    console.log({
      name,
      email,
      message,
    });

    // Reset the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <Col style={{ width: "15%", height: "100%" }} />
    <Col style={{ width: "70%", height: "100%" }} >
      <div className='form-box'>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='NAME'
              name="from_name"
              required
            />
          </div>
          <br></br>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='EMAIL'
              name="from_email"
              required
            />
          </div>
          <br></br>
          <div>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='MESSAGE'
              name="message"
              required
            />
          </div>
          <br></br>
          <button className="form-button" type="submit"><strong>Send Message </strong></button>
        </form>
      </div>
    </Col>
    <Col style={{ width: "15%", height: "100%" }} />
    </>
  );
};
