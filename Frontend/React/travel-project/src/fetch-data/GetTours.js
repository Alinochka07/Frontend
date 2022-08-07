import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "./fetchSlice";




export const GetTours = () => {

    const tour = useSelector(state => state.tour)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTours())
    }, [])


    return(
        <>
            {tour.loading && <div> Загружается...</div>}
            {!tour.loading && tour.error? <div>Ошибка: {tour.error} </div> : null}
            {!tour.loading && tour.tours.length ? (
                <select>
                    {tour.tours.map(tour => (
                        <option key={tour.id}>{tour.name}</option>
                    ))}
                </select>
            ) : null}
        </>
    )
}

export default GetTours;