import React, {Component} from "react";
import FetchTours from "../fetch-data/fetch-data";

export default class FetchTourDestinations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: []
        }
    }

    getTours = new FetchTours();

    toursData = (tours) => {
        this.setState({
            tours: tours
        })
    }

    componentDidMount() {
        this.getTours.getAllTours()
        .then(singleData => {
            this.toursData(singleData)
        })
    }


    render() {
        const {tours} = this.state;

        return(
            <select className="custom-select">
                {tours.map((tour) => (
                    <option value={tour.id}>{tour.label}</option>
              ))}
            </select>
        )
    }
}

