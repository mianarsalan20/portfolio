import React from 'react'
import './services.css'
import Info from './Info'

const Services = () => {
  return (
    <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    <div className="services__container container grid">  

    <Info/>

      
    </div>
</section>
  )
}

export default Services