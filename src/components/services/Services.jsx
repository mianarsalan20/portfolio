import React, {useState} from 'react'
import './services.css'
import Frontend from '../../assets/frontend.svg';
import Graphic from '../../assets/graphic.svg';
import Marketing from '../../assets/marketing.svg';

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const toggleModal = (index) => {
    setToggle(index);
  }
  return (
    <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    <div className="services__container container grid">

        <div className="services__box">
          <div>
            <img src={Frontend} className="services__icon"/>
            <h3 className="services__title">Frontend <br /> Developer </h3>
          </div>

          <span className="services__button"  onClick={() => toggleModal(1)}>View More 
          <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={ toggle === 1 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i> 

              <h3 className="services__modal-title">Fronted Developer</h3>
              <p className="services__modal-description">Service with more than 1 years of experience. Providing quality work to clients and companies.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Design and develop user interfaces for websites using HTML, CSS, and JavaScript.</p> 
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Responsive layouts that work across a range of devices.</p> 
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Translate design mockups into functional code.</p> 
                </li> 

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Debug and troubleshoot issues with frontend code.</p> 
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Create and maintain a portfolio of personal or professional projects.</p> 
                </li> 

              </ul> 
            </div>
          </div>

        </div>

        <div className="services__box">
          <div>
            <img src={Graphic} className="services__icon"/>
            <h3 className="services__title">Graphic <br /> Designer </h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(2)}>View More{"  "}
          <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={ toggle === 2 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i> 

              <h3 className="services__modal-title">Graphic Designer</h3>
              <p className="services__modal-description">Service with more than 1 years of experience. Providing quality work to clients and companies.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">I design the user interface.</p> 
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">I create ux element interactions.</p> 
                </li> 

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Design and mockups of products for companies.</p> 
                </li> 

              </ul> 
            </div>
          </div>

        </div>

        <div className="services__box">
          <div>
            <img src={Marketing} className="services__icon"/>
            <h3 className="services__title">Digital <br /> Marketing </h3>
          </div>

          <span className="services__button"onClick={() => toggleModal(3)}>View More 
          <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={ toggle === 3 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i> 

              <h3 className="services__modal-title">Digital Marketing</h3>
              <p className="services__modal-description">Service with more than 1 years of experience. Providing quality work to clients and companies.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Creating and managing online advertising campaigns</p> 
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Managing social media accounts and creating social media content</p> 
                </li> 

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Conducting email marketing campaigns and analyzing results</p> 
                </li> 

               
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Analyzing and interpreting data from marketing efforts</p> 
                </li> 

               
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i> 
                  <p className="services_modal-info">Creating various types of content for marketing purposes</p> 
                </li> 

               

              </ul> 
            </div>
          </div>


        </div>

      
    </div>
</section>
  )
}

export default Services