import UE from "../../assets/project1.PNG";
import Chat from "../../assets/project2.PNG";
import Marketing from "../../assets/project3.PNG";

import ReactIcon from "../../assets/react.svg";
import NextIcon from "../../assets/next.svg";
import JavaScriptIcon from "../../assets/javascript.svg";
import SolidityIcon from "../../assets/solidity.svg";
import CSSIcon from "../../assets/css.svg";
import TailwindIcon from "../../assets/tailwind.svg";

export const ProjectsData = [
  {
    id: 1,
    title: "UE Website",
    desc: "A UE website is to provide potential customers with information about the handyman's services and skills, and to convince them to hire the handyman for their repair or maintenance needs.",
    image: UE,
    tags: [ReactIcon, JavaScriptIcon, CSSIcon, TailwindIcon],
    source: "https://www.usmanengineering.co/",
  },
  {
    id: 2,
    title: "Chat DApp",
    desc: "A Decentralized chat app allows users to communicate securely and privately using a distributed network, rather than relying on a central server or authority.",
    image: Chat,
    tags: [NextIcon, JavaScriptIcon, SolidityIcon, CSSIcon, TailwindIcon],
    source:
      "https://github.com/mianarsalan20/chat-dapp-web3.0-ethereum-nextjs-solidity-tailwindss-sass",
  },
  {
    id: 3,
    title: "Supply Chain DApp",
    desc: " A decentralized supply chain app allows businesses to manage and track the movement of goods and materials in a supply chain in a decentralized manner, utilizing a distributed network of computers.",
    image: Marketing,
    tags: [NextIcon, JavaScriptIcon, SolidityIcon, CSSIcon, TailwindIcon],
    source: "https://github.com/mianarsalan20/food-supply-chain-by-blockchain",
  },
];
