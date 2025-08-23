import React from "react";
import "./ContactUs.css";
import { FaMapMarkerAlt, FaCodepen } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          Get in Touch
        </h2>

        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <h5>Address</h5>
            <p>Kadi, Gujarat, India</p>
          </div>
          <div className="info-box">
            <MdCall className="icon" />
            <h5>Phone</h5>
            <p>+91 97128 27603</p>
          </div>
          <div className="info-box">
            <SiMinutemailer className="icon" />
            <h5>Email</h5>
            <p>amankureshi78692@gmail.com</p>
          </div>
          <div className="info-box">
            <FaCodepen className="icon" />
            <h5>CodePen</h5>
            <p>
              <a
                href="https://codepen.io/amankureshi"
                target="_blank"
                rel="noopener noreferrer"
              >
                amankureshi
              </a>
            </p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="form-container">
            <h4>Send a Message</h4>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Subject" required />
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://i1.wp.com/ashwinishenoy.com/wp-content/uploads/2021/09/pexels-daria-shevtsova-930004-scaled-1.jpg?w=1920&ssl=1"
              alt="Contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
