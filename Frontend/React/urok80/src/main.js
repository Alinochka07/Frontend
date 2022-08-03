import React from "react";
import PriceList from "./price-list";



export default function Main() {


    return(
        <main>
				<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
					<PriceList price={10}/>
					<PriceList price={20}/>
					<PriceList price={30}/>
				</div>
			</main>
    )
}