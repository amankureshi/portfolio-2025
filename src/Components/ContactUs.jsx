import React from "react";
import "./ContactUs.css";
import {
  FaMapMarkerAlt,
  FaCodepen,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FiArrowUpRight, FiSend } from "react-icons/fi";

const ContactUs = ({ darkMode }) => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      text: "Kadi, Gujarat, India",
    },
    {
      icon: <MdCall />,
      title: "Phone",
      text: "+91 97128 27603",
      href: "tel:+919712827603",
    },
    {
      icon: <SiMinutemailer />,
      title: "Email",
      text: "amankureshi78692@gmail.com",
      href: "mailto:amankureshi78692@gmail.com",
    },
    {
      icon: <FaCodepen />,
      title: "CodePen",
      text: "amankureshi",
      href: "https://codepen.io/amankureshi",
    },
  ];

  return (
    <section
      id="contact"
      className={`contact-section ${darkMode ? "contact-section-dark" : "contact-section-light"
        } py-5`}
    >
      {/* Decorative Background */}
      <div className="contact-orb contact-orb-one"></div>
      <div className="contact-orb contact-orb-two"></div>
      <div className="contact-grid"></div>

      <div className="container position-relative">

        {/* Header */}
        <div
          className="text-center mx-auto mb-5"
          style={{ maxWidth: "700px" }}
          data-aos="fade-up"
        >
          <div className="contact-eyebrow">
            <span></span>
            CONTACT ME
            <span></span>
          </div>

          <h2 className="contact-title mb-3">
            Let's <span>Work Together</span>
          </h2>

          <p
            className={`contact-subtitle mb-0 ${darkMode ? "text-secondary" : "text-muted"
              }`}
          >
            Have a project, idea or frontend opportunity in mind?
            I'd love to hear from you and turn your idea into something great.
          </p>
        </div>

        {/* Contact Info */}
        <div className="row g-3 g-lg-4 mb-5">
          {contactItems.map((item, index) => {
            const content = (
              <>
                <div className="contact-icon">
                  {item.icon}
                </div>

                <div className="contact-info-content">
                  <small>{item.title}</small>

                  <p className="mb-0">
                    {item.text}
                  </p>
                </div>

                {item.href && (
                  <FiArrowUpRight className="contact-arrow" />
                )}
              </>
            );

            return (
              <div
                className="col-12 col-sm-6 col-xl-3"
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`contact-info-card ${darkMode ? "contact-card-dark" : ""
                      }`}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    className={`contact-info-card ${darkMode ? "contact-card-dark" : ""
                      }`}
                  >
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Contact Area */}
        <div
          className="row g-4 align-items-stretch"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Form */}
          <div className="col-12 col-lg-7">
            <div
              className={`contact-form-card h-100 ${darkMode ? "contact-form-dark" : ""
                } p-4 p-md-5`}
            >
              <div className="mb-4">
                <span className="form-label-small">
                  HAVE A PROJECT?
                </span>

                <h3 className="mt-2 mb-2">
                  Send me a message
                </h3>

                <p className="text-secondary mb-0">
                  Tell me a little about your project and I'll get back
                  to you as soon as possible.
                </p>
              </div>

              <form>
                <div className="row g-3">

                  {/* Name */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      className={`form-control contact-input ${darkMode ? "contact-input-dark" : ""
                        }`}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      className={`form-control contact-input ${darkMode ? "contact-input-dark" : ""
                        }`}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      className={`form-control contact-input ${darkMode ? "contact-input-dark" : ""
                        }`}
                      placeholder="What would you like to discuss?"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows="5"
                      className={`form-control contact-input ${darkMode ? "contact-input-dark" : ""
                        }`}
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="col-12 pt-2">
                    <button
                      type="submit"
                      className="contact-submit-btn border-0"
                    >
                      <span>Send Message</span>
                      <FiSend />
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

          {/* Image / CTA */}
          <div className="col-12 col-lg-5">
            <div className="contact-visual h-100">

              <img
                src="https://i1.wp.com/ashwinishenoy.com/wp-content/uploads/2021/09/pexels-daria-shevtsova-930004-scaled-1.jpg?w=1920&ssl=1"
                alt="Workspace"
                loading="lazy"
                decoding="async"
              />

              <div className="contact-visual-overlay"></div>

              <div className="contact-visual-content">
                <span className="visual-number">01</span>

                <h3>
                  Let's build something
                  <span> amazing.</span>
                </h3>

                <p>
                  Clean interfaces, responsive layouts and modern
                  frontend experiences.
                </p>

                <div className="d-flex gap-2 mt-4">
                  <a
                    href="https://github.com/amankureshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aman-kureshi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://codepen.io/amankureshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social"
                    aria-label="CodePen"
                  >
                    <FaCodepen />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer line */}
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="350"
        >
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
