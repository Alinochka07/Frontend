import React, {Component} from "react";
import DateChoose from "./date-picker";
import "./choose-destination.css";
import FetchTours from "../fetch-data/fetch-data";
import FetchTourDestinations from "../tour-destinations";
import ToursModal from "../modal/tours-modal";
import Modal from 'react-bootstrap/Modal';
import DataTours from "../datatours/data-tours";
import Select from "react-select";
import axios from 'axios';




export default class ChooseDestinationOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            tours: [],
            openModal : false,
            data: [],
            modal: [],
            selection: "",
            selectTours : [],
            id: '',
            label: ''
        }

        this.onClickButton = this.onClickButton.bind(this);
    }


    onClickModalButton = e =>{
        e.preventDefault()
        this.setState({
            openModal : true,
        })
    }
    onClickButton() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    filterTour(tours, filter) {
        if(filter.id === this.selected_value) {
            return tours.filter(tour => tour.id)
        } else {
            return tours
        }
    }

    onUpdateFilter(value) {
        this.setState({
            filter: value
        })
    }

    // FetchData

    // getTours = new FetchTours();

    // toursData = (data) => {
    //     this.setState({
    //         modal: data
    //     })
    // }


    // handleChange(e) {
    //     console.log(e.target.value);
    //     this.setState({
    //         selection: e.target.value
    //     })
    // }

    // componentDidMount() {
    //     this.getTours.getAllTours()
    //     .then(singleData => {
    //         this.toursData(singleData)
    //     })
    // }


    // Fetch data

    async getTours(){
        const res = await axios.get('au-travel.firebaseapp.com/tours')
        const data = res.data
    
        const tours = data.map(data => ({
            "value" : data.id,
            "label" : data.label,
            
        }))
    
        this.setState({selectTours: tours})
    
      }
    
    handleChange(value) {
        console.log(value)
        this.setState({
            id: value.value, 
            label: value.label
            
        })
    }

    // componentDidMount() {
    //     this.getTours()
    // }

                

    render() {
        const {selectTours} = this.props;
        console.log(this.state.selectTours)
        // const {selection, data, modal} = this.state;

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
                                    {/* <select 
                                        value={this.state.modal} 
                                        onChange={this.handleChange} 
                                        className="custom-select">
                                        {modal.map((tour) => (
                                            <option key={tour.id} 
                                            value={tour.id}
                                            >{tour.label}</option>))}
                                    </select> */}
                                    <Select options={this.state.selectTours} 
                                            value={this.state.value}
                                            onChange={this.handleChange.bind(this)} 
                                            selection={selectTours}
                                    />
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
                                    <ToursModal/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>
                                        {this.state.modal.filter(tour => {
                                            return <p key={tour.id}>
                                                {tour.label}
                                            </p>
                                        })}
                                        {this.state.label} <br></br>
                                        
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Modal className="modal-window" open={this.state.openModal} onClose={this.onCloseModal}></Modal>
            </div>
        )
}

}

