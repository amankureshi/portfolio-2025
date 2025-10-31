import React from "react";
import "./ContactUs.css";
import { FaMapMarkerAlt, FaCodepen } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const ContactUs = ({ darkMode }) => {
  return (
    <section
      className={`contact-section ${darkMode ? "contact-section-dark" : ""}`}
      id="contact"
    >
      <div className="container">
        <h2
          className={`section-title text-center ${
            darkMode ? "text-light" : ""
          }`}
          data-aos="fade-up"
        >
          Get in Touch
        </h2>

        <div className="contact-info">
          {[
            {
              icon: <FaMapMarkerAlt className="icon" />,
              title: "Address",
              text: "Kadi, Gujarat, India",
            },
            {
              icon: <MdCall className="icon" />,
              title: "Phone",
              text: "+91 97128 27603",
            },
            {
              icon: <SiMinutemailer className="icon" />,
              title: "Email",
              text: "amankureshi78692@gmail.com",
            },
            {
              icon: <FaCodepen className="icon" />,
              title: "CodePen",
              text: (
                <a
                  href="https://codepen.io/amankureshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  amankureshi
                </a>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`info-box ${darkMode ? "info-box-dark" : ""}`}
            >
              {item.icon}
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="contact-form-wrapper">
          <div
            className={`form-container ${
              darkMode ? "form-container-dark" : ""
            }`}
          >
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
