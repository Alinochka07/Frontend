import React from "react";
import "./account.css";


export default function Account() {
    return(
        <div className="dropdown login">
            <button type="button" className="accountbtn dropdown-toggle" id="dropdownLoginButton" data-toggle="dropdown" aria-haspopup="true"><span className="bi bi-person-fill"></span></button>
            <div className="dropdown-menu account" aria-labelledby="dropdownLoginButton">
                <a className="dropdown-item" href="#">Мой профиль</a>
                <a className="dropdown-item" href="#">Настройка профиля</a>
                <a className="dropdown-item" href="#">Выход</a>
            </div>
        </div>
    )
}