import React, {useContext} from "react";
import Context from "./Context";


export default function Header() {

    const value = useContext(Context)

    return(
        <header>
            <div className="pricing-header p-3 pb-md-3 mx-auto text-center">
                <h1 className="display-4 fw-normal">Корзина</h1>
                <p className="fs-5 text-muted">Куплено на сумму ${value.totalPrice}</p>
            </div>
		</header>
    )
}