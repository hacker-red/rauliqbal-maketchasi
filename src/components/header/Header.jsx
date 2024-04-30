import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Rauliqbal.png'
import { IoMenu } from "react-icons/io5";


const Header = () => {
  return (
    <>


      <div className='container'>
        <header className='header'>
          <Link to='/'><img className='logo' src={logo} alt="" /></Link>
          <nav className='navbar'>
            <Link to="/main" className='linc'>About</Link>
            <Link to="/possions" className='linc'>Passions</Link>
            <Link to="/portfolio" className='linc'>Portfolio</Link>
            <button className='header_btn'>Contact Me</button>
          </nav>
          <IoMenu className='menu_icon'/>
        </header>
      </div>


    </>
  )
}

export default Header     