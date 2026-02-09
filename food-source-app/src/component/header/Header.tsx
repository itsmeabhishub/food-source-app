import Navbar from '../../Navbar/Navbar'
import './Header.css'
const Header = () => {
    
  return (
    <div className="header-main-container">
        <div className="left-side-header-menu">
            <span className='header-title'>Food Source</span>
        </div>
        <div className="right-side-header-menu">
    <Navbar />
        </div>
    </div>
  )
}

export default Header