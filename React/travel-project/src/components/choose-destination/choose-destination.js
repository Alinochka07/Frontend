import React, {Component} from "react";
import DateChoose from "./date-picker";
import "./choose-destination.css";
import FetchTours from "../fetch-data/fetch-data";
import FetchTourDestinations from "../tour-destinations";




export default class ChooseDestinationOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            tours: []
        }

        this.onClickButton = this.onClickButton.bind(this);
    }


    onClickButton() {
        this.setState({
            hidden: !this.state.hidden
        })
    }


    render() {

        return(
            <div className="destination_option">
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Направление</th>
                            <th scope="col">Предполагаемые даты</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <div className="input-group mb-3">
                                    <FetchTourDestinations/>
                                </div>
                                
                            </th>
                            <th id="table-calendar">
                                <button className="btn btn-light dates" onClick={this.onClickButton}>Выбрать даты</button>
                                <div id="calendar-window">
                                    <div hidden={ !this.state.hidden ? true : false }>
                                        <DateChoose />
                                        <p id="close-calendar" onClick={this.onClickButton}>x</p>
                                    </div>
                                </div>
                            </th>
                            
                            <th>
                                <div className="input-group mb-3">
                                    <button className="btn btn-outline tours-search">Нажми для просмотра</button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}

}

