import "./Contact.css"

import bgImg from "../../assets/images/Vector (1).png"

import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="section3">
      <h2 className="section3_title">Contact<span className="section3_span"> Me</span></h2>
      <div className="section3_icons">
        <div className="section3_icons_texts">
          <div className="section3_icon_div">
            <img src={bgImg} alt="" />
            <a href="https://github.com/hacker-red"><FaGithub className="section3_icon" /></a>
          </div>
          <p className="section3_icons_text">Github</p>
        </div>
        <div className="section3_icons_texts">
          <div className="section3_icon_div">
            <img src={bgImg} alt="" />
            <a href="https://instagram.com"><FaInstagram className="section3_icon" /></a>
          </div>
          <p className="section3_icons_text">Instagram</p>
        </div>
        <div className="section3_icons_texts">
          <div className="section3_icon_div">
            <img src={bgImg} alt="" />
            <a href="mailto:sheraliyev@gmail.com"><MdOutlineEmail className="section3_icon" /></a>
          </div>
          <p className="section3_icons_text">Email</p>
        </div>
        <div className="section3_icons_texts">
          <div className="section3_icon_div">
            <img src={bgImg} alt="" />
            <a href="tel:+998 93 345-03-87"><BsTelephone className="section3_icon" /></a>
          </div>
          <p className="section3_icons_text">Telp</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
