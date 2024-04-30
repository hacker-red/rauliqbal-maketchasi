import './Main.css';
import main_img from '../../assets/images/heroImg 1.png';




const Main = () => {
  return (
    <>


      <div className="container">
        <main className="main">
          <div>
            <h2 className='hi_text'>Hi ! <br />
              <span className='span_Raul_text'>I’m Muhamad Raul.
                a Front-End Developer</span>
            </h2>
            <p className='front_end_text'>Front-End devel oper based in Bekasi, Indonesian
              I’am coding with a clean and beautiful problem
              solving in mind.
            </p>
          </div>
          <div>
            <img className='main_img' src={main_img} alt="" />
          </div>
        </main>
      </div>


    </>
  )
}

export default Main 