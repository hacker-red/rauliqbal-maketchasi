import "./Portfolio.css"

import portfolioCardImg1 from "../../assets/images/Sendpay.png"
import portfolioCardImg2 from "../../assets/images/E-commerce.png"
import portfolioCardImg3 from "../../assets/images/B Learning.png"

const Portfolio = () => {
  return (
    <div className="section2">
      <h2 className="section2_title">My<span className="section2_span"> Portfolio</span></h2>
      <div className="section2_cards">
        <div className="section2_card">
          <img src={portfolioCardImg1} alt="" className="section2_card_img" />
        </div>
        <div className="section2_card">
          <img src={portfolioCardImg2} alt="" className="section2_card_img" />
        </div>
        <div className="section2_card">
          <img src={portfolioCardImg3} alt="" className="section2_card_img" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
