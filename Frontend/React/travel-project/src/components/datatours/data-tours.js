import React, { Component, useState, useEffect } from "react";
import db from "../../config/firebase.config";
import FetchTourDestinations from "../tour-destinations";
import FetchTours from "../fetch-data/fetch-data";



export default class DataTours extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            tours: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/tours")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    tours: json,
                    DataisLoaded: true
                });
            })
    }

    getTours = new FetchTours();

    toursSelectedData = (data) => {
        this.setState({
            tours: data
        })
    }
    


    render() {
        const { DataisLoaded, tours } = this.state;
        const {selectTours, label, id, modal} = this.props;

        if (!DataisLoaded) return <div>
            <h5> Загружается. Пожалуйста, подождите... </h5> </div> ;
   
        const mySelection = <div>
            {tours.map((tour) => (<ol key={tour.id}><li>Label: {tour.label} Value: {tour.value}</li></ol>))}
        </div>

        return (
         
            <div>
                <FetchTourDestinations
                    
                />
            </div>
    );
}
}

// tours.map((tour) => ( 
//     <ol key = { tour.id } >
//         <li>Label: { tour.label }, Visa: { tour.visa }, Selected: {selection}</li> 
//     </ol>
//     ))