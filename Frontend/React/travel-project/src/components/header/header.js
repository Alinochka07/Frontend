import React, {useState} from "react";
import "./header.css";
import SearchFunction from "../search";
import logo from "../../img/logo/au_travel_fullLogo.png";
import HomePage from "../../pages/homePage";
import { Link } from "react-router-dom";
import SideNav from "../right-side-nav/right-side-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = (props) => {

    const [width, setWidth] = useState('0%');

    const openSidenav = () => {
        setWidth('20%');
    }

    const closeSidenav = () => {
        setWidth('0%');
    }

        return (
            <div className="" id="myHeader">
                <div className="row">
                    <span>
                        <nav className="topnav">
                            <Link to = '/'> 
                                <div className="left-side-logo">
                                    <img src = {logo} alt='au_travel_logo' id="main-logo" />
                                </div>
                            </Link>
                           
                            <div className="header_menu_tabs">
                                    <span>Направления</span>
                                    <span>Предложения</span>
                                    <span>Туры</span>
                                    <span>Полезные советы</span>
                            </div>
                            <div className="right-side-menu">
                                <span>
                                    <SearchFunction/>
                                </span>
                                <span>
                                    <button onClick={openSidenav} type="button" data-toggle="sidenav"
                                        className="accountbtn" id="sidenavbar" aria-haspopup="true">
                                            <FontAwesomeIcon icon={faBars} />
                                    </button>
                                    <SideNav 
                                    closeSidenav={closeSidenav}
                                    width={width}
                                    setWidth={setWidth}/>
                                    
                                </span>
                                
                
                            </div>
                        </nav>
                    </span>
                </div>
            </div>
        )
    } 


export default Header;  