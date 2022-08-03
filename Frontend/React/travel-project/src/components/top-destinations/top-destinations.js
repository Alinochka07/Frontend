import React, {Component} from "react";
import "./top-destinations.css";
import istanbul from "../../img/web-photos/istanbul-blue-mosque.jpeg";
import egypt from "../../img/web-photos/Egypt.jpeg";
import dubai from "../../img/web-photos/Dubai.jpeg";


export default class TopDestinations extends Component {



    render() {
        return(
            <div className="top-destinations">
                <div className="top-box nth" id="nth">
                    <h3>Топовые <span>Направления</span></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. 
                        Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s...</p>
                    <button id="learnMore">Изучи больше!</button>
                </div>
                <div id="ist" className="top-box">
                   <h5>Стамбул</h5>
                </div>
                <div id="dub" className="top-box top-picture">
                    <h5>Дубаи</h5>
                </div>
                <div id="egpt" className="top-box">
                   <h5>Каир</h5>
                </div>
            </div>
        )
    }
}