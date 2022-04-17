import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './css/NavbarComponent.css'
import { AiOutlineClose } from 'react-icons/ai';
import {SidebarData} from './SideBarData'


function NavbarComponent() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    
    return (
        <>
        <nav>
            <Link to="#" className="menu" onClick={showSidebar}>=</Link>
            {/* <div className="logo">SOUL</div> */}
            <div className="book">BOOK NOW</div>
        </nav>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link t0='#' className='menu-bars'>
                            <AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
        
    )
}

export default NavbarComponent
