import { Menu, type MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { urlPaths } from '../routing/urlPaths'
import './Navbar.css'

const Navbar = () => {
    const {HOME_PATH} = urlPaths
    const navigate = useNavigate()
    const menuItem :MenuProps[`items`]=[
        {label:'Home', key:'home'}
    ]
    const redirectFunction = (e:string) =>{
        if(e === 'home'){
            navigate(HOME_PATH)
        }
    }
  return (
    <div className="navbar-main-container">
        <Menu  onClick={(e) => redirectFunction(e.key)} mode="horizontal" items={menuItem} />
    </div>
  )
}

export default Navbar