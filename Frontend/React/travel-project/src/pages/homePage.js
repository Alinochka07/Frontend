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
import { connect } from "react-redux";
import Tours from "./tours-page/tours";
import Destination from "./tours-page/destination";


class HomePage extends Component {

    render() {
        // console.log(this.props)
        const { tours } = this.props;
        return(
            <div>
                <div className="container">
                    <MainHeader/>
                    {/* <ChooseDestination/> */}
                    <Destination tours={tours}/>
                    <Tours tours={tours}/>
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

const mapStateToProps = (state) => {
    return {
        tours: state.tour.tours
    }
}

export default connect(mapStateToProps)(HomePage);
