import React from "react";
import "./contact.css";
import Phone from "../../assets/phone.svg";
import Email from "../../assets/email.svg";
import Homee from "../../assets/home.svg";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__box">
          <div>
            <img src={Phone} className="contact__icon" alt="Phone-No" />
            <h3 className="contact__title"> +92 303 5540078 </h3>
          </div>
        </div>

        <div className="contact__box">
          <div>
            <img src={Email} className="contact__icon" alt="Email" />
            <h3 className="contact__title">mianarsalan20@gmail.com</h3>
          </div>
        </div>

        <div className="contact__box">
          <div>
            <img src={Homee} className="contact__icon" alt="Address" />
            <h3 className="contact__title">Islamabad, Pakistan </h3>
          </div>
        </div>
      </div>

      <span className="footer">© All Copyright Reserved {year}</span>
    </section>
  );
};

export default Contact;
