
import "./NavBarStyles.css"
import { menuItems } from "./MenuItems"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function NavBar(){
    const [clicked, setClicked] = useState(false)

    function handleClicked (){
        setClicked(!clicked)
    }
    return(
        <nav className="navbar-items">
            <h1 className="nav-logo">Travel CA</h1>
            {/* <div className="menu-icons" onClick={handleClicked}><i className={clicked ? "fas fa-times" : "fas fa-bars"} ></i></div> */}
            <ul className="nav-menu">
                {
                    menuItems.map((menuItem, index) => (
                        <li key={index}>
                        <i className={menuItem.icon}></i><Link className={menuItem.Cname}to={menuItem.url}>{menuItem.title}</Link>
                    </li>  
                    ))
                }
                <button>Sign up</button>
                
            </ul>
        </nav>
    )
}
