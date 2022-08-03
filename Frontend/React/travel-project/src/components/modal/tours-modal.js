import React, { Component, useState, useEffect } from "react";
import "./tours-modal.css";
import Modal from 'react-bootstrap/Modal';
import FetchTours from "../fetch-data/fetch-data";
import FetchTourDestinations from "../tour-destinations";
import DataTours from "../datatours/data-tours";



export default function ToursModal(props) {

    
    const [show, setShow] = useState(false);
    const [tours, setTours] = useState([]);
    const [hasError, setHasError] = useState(false);

    const handleclose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <button onClick={handleShow} data-toggle="modal"
                id="modal-window" aria-haspopup="true" className="btn btn-outline tours-search">Нажми для просмотра
            </button>

            {/* <Modal className="modal-window" show={show} onHide={handleclose}>
                <Modal.Header closeButton>
                    <div>
                        <h5>Туры по направлению</h5>
                    </div>
                </Modal.Header>
                <div className="body-modal">
                    <Modal.Body>
                        <div>
                            <div>
                                
                            </div>
                            
                        </div>
                    </Modal.Body>
                </div>
                <Modal.Footer>
                    
                    <button id="close-modal" 
                    
                    onClick={function(e){handleclose()}}>
                        Закрыть
                        
                    </button>
                </Modal.Footer>
            </Modal> */}
        </div>
)
}



