import React from 'react';
import './App.css';
import { Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container"  >

        <div className="contact-header" data-aos="fade-left" data-aos-duration="1000">
          <h2>Get in Touch</h2>
        </div>

        <form 
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
          data-aos="fade-left" data-aos-duration="1000"
        >

          <input type="hidden" name="access_key" value="c67b90d9-af3b-4c2a-ac4a-09c665a1f4f2" />
          <input type="hidden" name="to_email" value="cookmate.lk@gmail.com" />

          <div className="form-group-grid" >

            <div className="input-field">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
            </div>

            <div className="input-field">
              <label htmlFor="workEmail">Work Email</label>
              <input type="email" id="workEmail" name="email" placeholder="you@company.com" required />
            </div>

          </div>

          <div className="input-field full-width">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
          </div>

          <div className="input-field full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Enter your message here..." required></textarea>
          </div>

          <div className="form-footer">
            <button type="submit" className="btn submit-btn">Send Message</button>
          </div>
        </form>
        
      </div>

    </section>
  );
};

export default Contact;
