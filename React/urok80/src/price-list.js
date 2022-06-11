import React, { useContext } from "react";
import Context from "./Context";


export default function PriceList(props) {
    const value = useContext(Context);
    const {price} = props;

    return(
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Free</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">${price} <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={() => value.counter(price)}>Buy</button>
                </div>
            </div>
        </div>
    )
}