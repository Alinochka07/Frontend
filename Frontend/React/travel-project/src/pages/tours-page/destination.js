import React from "react";
import "../../components/choose-destination/choose-destination.css";
import { useNavigate } from "react-router-dom";
import TourDetails from "./tour-details";
import Select from "react-select";
import Tours from "./tours";


const Destination = ({tours, tour}) => {

    const navigate = useNavigate();

    
    const Selection = () => {
        const mySelection = `${(e) => e.target.value}`

        return (
        <div>
            <select className="form-select">
            <option>Выбери направление</option>
            {tours && tours.map((tour) => 
                <option value={mySelection} tour={tour} key={tour.id}>{tour.title}</option>
            )}
            </select>
        </div>

        )
    }
    

    const onSelect = () => {
        navigate(`/tours/${tour.id}`)
    } 

    return (
        <div className="choose-destination">
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
                                    <div className="static">
                                    {/* <select className="form-select">
                                        <option>Выбери направление</option>
                                        {tours && tours.map((tour) => 
                                            <option value={(e) => e.target.value} tour={tour} key={tour.id}>{tour.title}</option>
                                        )}
                                    </select> */}
                                    <Selection/>
                                    </div>
                                    
                                </th>
                                <th id="table-calendar">
                                    {/* <button className="btn btn-light dates" onClick={this.onClickButton}>Выбрать даты</button> */}
                                    <div id="calendar-window">
                                        <div 
                                        // hidden={ !this.state.hidden ? true : false }
                                        >
                                            {/* <DateChoose /> */}
                                            {/* <p id="close-calendar" onClick={this.onClickButton}>x</p> */}
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="input-group mb-3">
                                        <button className="searchfortour" onClick={onSelect}>Нажми для просмотра</button>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                </table>
            </div>
    )
}

export default Destination;