import React, { Component, useState } from "react";
import "../App.css";
import MainHeader from "../components/main-header";
import BoxMenu from "../components/middle-box-menu";
import TopDestinations from "../components/top-destinations";
import ServiceBlock from "../components/services-block";
import PopularDestinations from "../components/popular-destinations";
import FooterInstaBlock from "../components/footer-insta";
import Footer from "../components/footer/footer";
import ChooseDestination from "../components/choose-destination/choose-destination";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Tours from "./tours-page/tours";
import Destination from "./tours-page/destination";
import TourList from "./tours-page/tourslist";





class HomePage extends Component {

    render() {
        // console.log(this.props)
        const { tours } = this.props;
        return(
            <div>
                <div className="container">
                    <MainHeader/>
                    {/* <ChooseDestination/> */}
                    {/* <TourList tours={tours}/> */}
                    <Destination tours={tours}/>
                    {/* <Tours tours={tours}/> */}
                    <BoxMenu/>
                    <TopDestinations tours={tours}/>
                    <ServiceBlock/>
                    <PopularDestinations tours={tours}/>
                    <FooterInstaBlock/>
                    <Footer/>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        tours: state.firestore.ordered.tours
        // tours: state.tour.tours // this is used for not Firebase connection
    }
}


export default compose(
    firestoreConnect(['tours']),
    connect((mapStateToProps))
    )(HomePage);


