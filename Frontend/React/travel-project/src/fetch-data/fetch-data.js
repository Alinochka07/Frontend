// import React, {Component, useState, useEffect} from "react";


export default class FetchTours {
    constructor() {
        this._urlFullById = "http://localhost:3000";
    }

    async FetchTours(url) {
        const result = await fetch(`${url}`);
        

        if(!result.ok) {
            throw new Error(`The link is not proper ${url}, status ${result.status}`)
        }
        const json = await result.json();

        return json;
    }

    getAllTours() {
        return this.FetchTours(`${this._urlFullById}/tours`);
    }

}



// export default function FetchTours() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [tours, setTours] = useState([]);


//     useEffect(() => {
//         fetch("http://localhost:3000/tours")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 setIsLoaded(true);
//                 setTours(result);
//             },
//             (error) => {
//                 setIsLoaded(true);
//                 setError(error);
//             }
//         )
//     }, [])


//     if(error) {
//         return <div>Ошибка: {error.message}</div>
//     } else if (!isLoaded) {
//         return <div>Загружается. Пожалуйста подождите...</div>
//     } else {
//         return(
//             <div>
//                 {tours}
//             </div>
//         )
//     }
// }

