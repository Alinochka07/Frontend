import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import MainHeader from "../main-header";
import ChooseDestinationOption from "../choose-destination";
import BoxMenu from "../middle-box-menu";
import TopDestinations from "../top-destinations";
import PopularTours from "../popular-tours-block";


export default class App extends Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        return(
            <div>
                <div className="header">
                    <Header/>
                </div>
                <div className="container">
                    <MainHeader/>
                    <ChooseDestinationOption/>
                    <BoxMenu/>
                    <TopDestinations/>
                    <PopularTours/>
                </div>
                
            </div>
            
        )
    }
}
