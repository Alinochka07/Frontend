import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import MainHeader from "../main-header";
import ChooseDestinationOption from "../choose-destination";
import BoxMenu from "../middle-box-menu";
import TopDestinations from "../top-destinations";
import ServiceBlock from "../services-block";
import PopularDestinations from "../popular-destinations";
import FooterInstaBlock from "../footer-insta";
import Footer from "../footer/footer";



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tours: []
        }

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
                    <ServiceBlock/>
                    <PopularDestinations/>
                    <FooterInstaBlock/>
                    <Footer/>
                </div>
                
            </div>
            
        )
    }
}
