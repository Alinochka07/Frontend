import React, {Component} from "react";
import "./popular-destinations.css";
import batumi from "../../img/web-photos/batumi.jpeg";
import istanbul from "../../img/web-photos/istanbul.jpeg";
import abu_dabi from "../../img/web-photos/abu-dabi.jpeg";
import FetchTours from "../../fetch-data/fetch-data";
import { id } from "date-fns/locale";



export default class PopularDestinations extends Component {
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
            <div className="popular-destinations">
                <h3>Популярные направления</h3>
                <div className="popular-blocks">
                    <div className="pop-block-1">
                        <div id="triangle-left"></div>
                        <img alt="batumi-georgia" src={batumi} width="290px" height="350px"></img>
                        <div id="first-block">
                            <h6>Батуми, Грузия</h6>
                            <span className="reviews">

                                <span >$ 
                                    {tours.filter(tour => tour.id === 2).map(filteredTour => (
                                        <span key={id}>{filteredTour.destination[0].price}</span>
                                    ))}
                                </span>
                                <button type="button" className="btn btn-link">
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                </button>
                                50 отзывов
                                <button className="btn btn-outline reviews-check-out">+</button>
                            </span>
                        </div>
                    </div>
                    <div className="pop-block-2">
                        <img alt="istanbul-turkey-turkiye" src={istanbul} width="290px" height="350px"></img>
                        <div id="second-block">
                            <h6>Стамбул+Анталия, Турция</h6>
                            <span className="reviews">
                                <span>$ 
                                    {tours.filter(tour => tour.id === 1).map(filteredTour => (
                                        <span>{filteredTour.destination[1].price}</span>
                                    ))}
                                </span>
                                <button type="button" className="btn btn-link">
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                </button>
                                41 отзывов
                                <button className="btn btn-outline reviews-check-out">+</button>
                            </span>
                        </div>
                        <button className="btn btn-outline all-popular-destinations">Все популярные направления!</button>
                    </div>
                    <div className="pop-block-3">
                    <div id="triangle-right"></div>
                        <img alt="abu-dabi-uae-united-arab-emirates" src={abu_dabi} width="290px" height="350px"></img>
                        <div id="third-block">
                            <h6>Абу-Даби, ОАЭ</h6>
                            <span className="reviews">
                                <span>$ 
                                    {tours.filter(tour => tour.id === 3).map(filteredTour => (
                                        <span>{filteredTour.destination[0].price}</span>
                                    ))}
                                </span>
                                <button type="button" className="btn btn-link">
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                    <span className="bi bi-star-fill"></span>
                                </button>
                                28 отзывов
                                <button className="btn btn-outline reviews-check-out">+</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
    
}