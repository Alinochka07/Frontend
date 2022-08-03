import { auth } from "../config/firebase.config";
import React, { Component, useState } from "react";
import "../components/app/app.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "../components/header/header";
import MainHeader from "../components/main-header";
import ChooseDestinationOption from "../components/choose-destination";
import BoxMenu from "../components/middle-box-menu";
import TopDestinations from "../components/top-destinations";
import ServiceBlock from "../components/services-block";
import PopularDestinations from "../components/popular-destinations";
import FooterInstaBlock from "../components/footer-insta";
import Footer from "../components/footer/footer";



// export default function HomePage() {
//     return (
//         <div>
//             <h1>Welcome!</h1>
//             <p><button onClick={() => auth.signOut()}>Sign out</button></p>
//         </div>
//     )
// }


export default class HomePage extends Component {

    render() {


        return(
            <div>
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
