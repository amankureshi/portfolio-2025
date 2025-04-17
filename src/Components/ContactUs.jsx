import React from "react";
import "./ContactUs.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2
          className="contact-heading text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Contact Us
        </h2>
        <div className="row text-center mb-4"></div>
        <div className="row text-center mb-4">
          <div className="col-md-3">
            <FaMapMarkerAlt className="icon" />
            <p>Kadi-Gujart,India</p>
          </div>
          <div className="col-md-3">
            <MdCall className="icon" />
            <p>+91 97128 27603</p>
          </div>
          <div className="col-md-3">
            <SiMinutemailer className="icon" />
            <p>amankureshi78692@gmail.com</p>
          </div>
          <div className="col-md-3">
            <FaCodepen className="icon" />
            <p>
              <a className="text-decoration-none text-dark">amankureshi</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h4 className="mb-3">Contact me</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            {/* <img
              src="https://i1.wp.com/ashwinishenoy.com/wp-content/uploads/2021/09/pexels-daria-shevtsova-930004-scaled-1.jpg?w=1920&ssl=1"
              alt="Contact-Image"
              className="shadow-sm Contact-Image"
            /> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.166461162304!2d72.26817767531735!3d23.141313379090676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c1f00137dc557%3A0xd84787db1be2b5cd!2sAman%20Kureshi!5e1!3m2!1sen!2sin!4v1744910514656!5m2!1sen!2sin"
              width="600"
              height="565"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
