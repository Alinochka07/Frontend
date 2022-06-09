import React, {Component, useState} from "react";
import DateChoose from "./date-picker";
import "./choose-destination.css";


const options = [
    {
        label: "Выбрать",
        value: "select"
    },
    {
        label: "Turkey",
        value: "turkey"
    },
    {
        label: "UAE",
        value: "uae"
    },
    {
        label: "Georgia",
        value: "georgia"
    },
    {
        label: "Thailand",
        value: "thailand"
    },

]

const prices = [
    {
        label: "от 50$ - 300$ с человека",
        value: "50-300"
    },
    {
        label: "от 300$ - 400$ с человека",
        value: "300-400"
    },
    {
        label: "от 400$ - 600$ с человека",
        value: "400-600"
    },
    {
        label: "от 600$ - 900$ с человека",
        value: "600-900"
    },
    {
        label: "от 900$ - и выше с человека",
        value: "900-above"
    },
]


export default class ChooseDestinationOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option1: "Направления",
            hidden: false,
            option3: "Ценовой диапазон"
        }

        this.onClickButton = this.onClickButton.bind(this);
    }

    handleChange(e) {
        this.setState({
            option1: e.target.value,
            option3: e.target.value
        });
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
                            <th scope="col">Ценовой диапазон</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <div className="input-group mb-3">
                                    <div className="select-container">
                                        <select className="custom-select" id="inputGroupSelect02" 
                                            value={this.state.option1} 
                                            onChange={this.handleChange}>
                                            {options.map((option) => (
                                                <option value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
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
                                    <div className="select-container">
                                            <select className="custom-select" id="inputGroupSelect02" 
                                                value={this.state.option3} 
                                                onChange={this.handleChange}>
                                                {prices.map((price) => (
                                                    <option value={price.value}>{price.label}</option>
                                                ))}
                                            </select>
                                    </div>
                                    <div className="input-group-append">
                                        <label className="input-group-text" htmlFor="">Нажми для просмотра</label>
                                    </div>
                                    
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

