import React, { Component } from "react";
import "./header.css";
import SearchFunction from "../search";
import logo from "../../img/logo/au_travel_fullLogo.png";
import ru_flag from "../../img/flags/ru.png";
import kgs_flag from "../../img/flags/kgz.png";
import us_flag from "../../img/flags/us.png";
import Account from "../account/account";


export default function Header() {


        return (
            <div className="" id="myHeader">
                <div className="row">
                    <span>
                        <nav className="topnav">
                            <div className="left-side-logo">
                                <img alt="au_travel_logo" id="main-logo" src={logo}></img>
                            </div>
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
                                    <div className="dropdown">
                                    <button type="button" className="languagebtn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="bi bi-globe"></span></button>
                                        <div className="dropdown-menu lng" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#"><img alt="kgs_flag" src={kgs_flag} width="20px" height="auto"/>  Кыргызча</a>
                                            <a className="dropdown-item" href="#"><img alt="ru_flag" src={ru_flag} width="20px" height="auto"/>  Русский</a>
                                            <a className="dropdown-item" href="#"><img alt="us_flag" src={us_flag} width="20px" height="auto"/>  English</a>
                                        </div>
                                    </div>
                                    
                                </span>
                                <span>  
                                    <Account/>
                                </span>
                            </div>
                        </nav>
                    </span>
                </div>
            </div>
        )
    }


    