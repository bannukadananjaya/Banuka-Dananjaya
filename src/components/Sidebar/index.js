
import { Link } from 'react-router-dom'
import './index.scss'
import logoS from '../../assets/imgs/logoS.png'
// import logosubtitle from '../../assets/logosub.png'

const Sidebar = () => 
 <div className='nav-bar'>
    <Link className='logo' to ='/'>
        <img src ={logoS} alt="logo" />
        <label className='logo-name'>Banuka Dsigns</label>
        
    </Link>
 </div> 

export default Sidebar