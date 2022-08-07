import React from "react";


const TourDetails = (props) => {
  // const id = props.match.params.id

  const {tour} = props;


  return(
    <div className="container section tour-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"><strong>ID: {tour.id}</strong>    Наименование тура - {tour.title}  </span>
                <span className="card-title"></span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
              
                <p>Дата: 15 сентября 2022 года </p>
                <p>Стоимость на одного взрослого: {tour.price}</p>
              
                
            </div>
        </div>
    </div>
  )
}

export default TourDetails;