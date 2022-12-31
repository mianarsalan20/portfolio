import React from 'react'
import "./projects.css"

import UE from '../../assets/project1.PNG';
import Chat from '../../assets/project2.PNG';
import Marketing from '../../assets/project3.PNG';

import ReactIcon from "../../assets/react.svg";
import NextIcon from "../../assets/next.svg";
import JavaScriptIcon from "../../assets/javascript.svg";
import SolidityIcon from "../../assets/solidity.svg";
import CSSIcon from "../../assets/css.svg";
import TailwindIcon from "../../assets/tailwind.svg";

const Projects = () => {
  return (
    <section className="projects section" id="portfolio">
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subtitle">Most recent work</span>

    <div className="projects__container container grid">
      <a href="https://www.usmanengineering.co/" target="_blank" rel="noreferrer">

        <div className="projects__box">
          <div>
            <img src={UE} className="projects__icon"/>
            <h3 className="projects__title">UE Website </h3>
            <span className="projects__subtitle">
            A UE website is to provide potential customers with information about the handyman's services and skills, and to convince them to hire the handyman for their repair or maintenance needs.
            </span>
          </div>
          <hr/>
          
          <span className="projects__button">
            <img src={ReactIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={JavaScriptIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={CSSIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={TailwindIcon} className="projects__button-icon"/>
          </span>
          

        </div>

      </a>

      <a href="https://github.com/mianarsalan20/chat-dapp-web3.0-ethereum-nextjs-solidity-tailwindss-sass" target="_blank" rel="noreferrer">

        <div className="projects__box">
          <div>
            <img src={Chat} className="projects__icon"/>
            <h3 className="projects__title">Chat DApp </h3>
            <span className="projects__subtitle">
            A Decentralized chat app allows users to communicate securely and privately using a distributed network, rather than relying on a central server or authority. 
            {/**Chat DApp offer several benefits over traditional centralized chat apps, including increased security and privacy, as well as greater resistance to hacking and other cyber attacks.*/}
            </span>
          </div>

          <hr/>

          <span className="projects__button">
            <img src={NextIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={JavaScriptIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={SolidityIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={CSSIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={TailwindIcon} className="projects__button-icon"/>
          </span>

        </div>

      </a>

      <a href="https://github.com/mianarsalan20/food-supply-chain-by-blockchain" target="_blank" rel="noreferrer">

        <div className="projects__box">
          <div>
            <img src={Marketing} className="projects__icon"/>
            <h3 className="projects__title">Supply Chain DApp </h3>
            <span className="projects__subtitle">
            A decentralized supply chain app allows businesses to manage and track the movement of goods and materials in a supply chain in a decentralized manner, utilizing a distributed network of computers.
            </span>
          </div>

          <hr/>

          <span className="projects__button">
            <img src={NextIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={JavaScriptIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={SolidityIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={CSSIcon} className="projects__button-icon"/>
          </span>

          <span className="projects__button">
            <img src={TailwindIcon} className="projects__button-icon"/>
          </span>

        </div>

      </a>

      
    </div>
</section>
  )
}

export default Projects