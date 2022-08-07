import React from "react";
import "../../App.css";
import Destination from "./destination";
import TourDetails from "./tour-details";


const Tours = ({tours}) => {
    console.log(tours)
    
    return (
        <div className="tours-page container">
            <h3>Туры по направлению</h3>
                {tours && tours.map(tour => {
                    return (
                        <div>
                            <TourDetails tour={tour} key={tour.id}/>
                            {/* <Destination tour={tour} tours={tours}/> */}
                        </div>

                    )
                })}
        </div>
    )
}

export default Tours;