import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b53ii1t",
        "template_rce8s2l",
        form.current,
        "G9rBfWgDGS9CRjn7A4DkT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div className="contactContainer">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDescription">
          Please fill out the form below to contact me
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="message"
            name="message"
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
