import React, {Component} from "react";
import "./popular-tours.css";
import beach from "../../img/web-photos/beach.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blue_clouds from "../../img/web-photos/blue-clouds.png";


export default function PopularTours() {

    return(
        <div className="popular-tours">
            <div className="illustr">
                <img src={beach} width="350px" height="auto"></img>
            </div>
            <div className="service-info">
                <h3>Более 50 туров по всему миру! Самые лучшие предложения ждут тебя!</h3>
                <ul>
                    <li>
                        <span>
                            <button type="button" class="btn btn-light emoji"><span class="bi bi-emoji-smile-fill"></span></button>
                            <h5>Услуги самых лучших гидов только для тебя</h5> 
                        </span>
                        <p>Travel has helped us to understandsa the meaning of life and it has 
                            helped us become better people. Each time we travel, 
                            we see the world with new eyes. Travel has helped us to 
                            understand the meaning of life
                        </p>
                    </li>
                    <li>
                        <span>
                            <button type="button" class="btn btn-light globe"><span class="bi bi-globe2"></span></button>
                            <h5>Качественное обслуживание мирового класса</h5>
                        </span>
                    </li>
                    <li>
                        <span>
                            <button type="button" class="btn btn-light headphones"><span class="bi bi-headphones"></span></button>
                            <h5>24/7 Круглосуточная поддержка</h5>
                        </span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}