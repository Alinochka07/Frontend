import React, { Component } from "react";
import "./main-header.css";
import au_main_photo from "../../img/web-photos/au-main-photo.png";


export default function MainHeader() {
    return(
            <div className="myheader">
                <h1 id="h1">Самое время для</h1>
                <h1 id="h1_1">путешествий!</h1>
                <button type="button" className="main_header_btn">Давай глянем что мы приготовили для тебя!</button>
            </div>
    )
}
