import React, { Component, useNavigate } from "react";
import "../App.css";
import { connect } from "react-redux";
import { createTour } from "../store/actions/tourActions";
import UploadImages from "./imageUpload";
import Select from "react-select";
// import { DateRangePicker, DateRange, registerLocale } from 'react-date-range';
import locale from 'date-fns/locale/ru';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { ru } from "date-fns/locale";
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";
import { Navigate } from "react-router-dom";


// registerLocale('ru', ru);



class AdminCreateTour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destination: '',
            title: '',
            price: '',
            visa: '',
            dates: '',
            onbase: '',
            onbase2: '',
            details: '',
            image: '',
            image2: '',
            image3: ''
        }
        
    }
   
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createTour(this.state)
        setTimeout(() => {
            window.location.reload(false)
        }, 2000)
    }

    render() {
        
        return(
            <div className="container admin-create-tour">
                <form onSubmit={this.handleSubmit} className="">
                    <h3 className="grey-text text-darken-3">Добавить новый тур</h3>
                    
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="destination">Направление (страна, город):</label>
                        <input className="form-control" type="text" id="destination" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="title">Название тура:</label>
                        <input className="form-control" type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="price">Стоимость за одного взрослого (в долларах):</label>
                        <input className="form-control" type="number" id="price" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="visa">Информация о визе:</label>
                        <input className="form-control" id="visa" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="dates">Даты:</label>
                        <input className="form-control" type="text"
                        onChange={this.handleChange}
                        id="dates"/>
                    </div>
                    
                    <div className="input-field mb-3">
                        <label>Проживание на базе:</label><br></br>
                        <input className="" id="onbase" type="radio" name="onbase" value="На базе завтрака" onChange={this.handleChange}></input><span>&nbsp;</span>
                        <label className="admin-label" htmlFor="onbase">На базе завтрака</label>
                        <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                        <input className="" id="onbase2" type="radio" name="onbase" value="Все включено" onChange={this.handleChange}></input><span>&nbsp;</span>
                        <label className="admin-label" htmlFor="onbase2">Все включено</label>
                    </div>
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="details">Дополнительная информация:</label>
                        <textarea className="form-control" id="details" onChange={this.handleChange}></textarea>
                    </div>
                    
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="image">Загрузить фото</label>
                        <input className="form-control" id="image" type="text" placeholder="Вставьте ссылку на фото"
                            onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="image2">Загрузить еще (опционально)</label>
                        <input className="form-control" id="image2" type="text" placeholder="Вставьте ссылку на фото"
                            onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field mb-3">
                        <label className="admin-label" htmlFor="image3">Загрузить еще (опционально)</label>
                        <input className="form-control" id="image3" type="text" placeholder="Вставьте ссылку на фото"
                            onChange={this.handleChange}></input>
                    </div>
                    <button className="btn btn-success" type="submit">Сохранить</button>
                    
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTour: (tour) => dispatch(createTour(tour))
    }
}
export default connect(null, mapDispatchToProps)(AdminCreateTour);