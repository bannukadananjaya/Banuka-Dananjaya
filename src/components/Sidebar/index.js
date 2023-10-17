
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
//import logoS from '../../assets/imgs/logoS.png'
import logo from '../../assets/imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => 
 <div className='nav-bar'>
    <Link className='logo' to ='/'>
        {/* <img src ={logoS} alt="logo" /> */}
        <img src={logo} alt="logo"/>
        {/* <label className='logo-name'>Banuka Designs</label> */}
        
    </Link>
    <nav>
        <NavLink exact="true" activeClassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        
    </nav>
 </div> 

export default Sidebar