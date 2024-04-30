import "./Passions.css"

import passionsCardImg1 from "../../assets/images/undraw_Wireframing_re_q6k6 1.png"
import passionsCardImg2 from "../../assets/images/undraw_Detailed_analysis_re_tk6j 1.png"
import passionsCardImg3 from "../../assets/images/undraw_Design_process_re_0dhf 1.png"

const Passions = () => {
  return (
    <div className="section1">
      <h2 className="section1_title">Additional <span className="section1_span">passions</span></h2>
      <div className="section1_cards">
        <div className="section1_card">
          <img className="section1_card_img" src={passionsCardImg1} alt="" />
          <div className="section1_card_texts">
            <h2 className="section1_card_title">Front-End<span className="section1_card_span"> Developer</span> </h2>
            <p className="section1_card_text">(Sass, Bootstrap, Tailwind)</p>
          </div>
        </div>
        <div className="section1_card">
          <img className="section1_card_img" src={passionsCardImg2} alt="" />
          <div className="section1_card_texts">
            <h2 className="section1_card_title">Back-End<span className="section1_card_span"> Developer</span></h2>
            <p className="section1_card_text">(NodeJS, Laravel, Codeigniter)</p>
          </div>
        </div>
        <div className="section1_card">
          <img className="section1_card_img" src={passionsCardImg3} alt="" />
          <div className="section1_card_texts">
            <h2 className="section1_card_title">UI/UX<span className="section1_card_span"> Designer</span></h2>
            <p className="section1_card_text">(Figma, Zeplin, Adobe XD)</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Passions
