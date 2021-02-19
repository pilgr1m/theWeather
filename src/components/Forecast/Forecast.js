import React, { useState } from 'react'
import OwmService from "../../services/OwmService"
import { formattedDate } from "../helpers/Helpers"
import style from "./Forecast.module.css"
import DaysList from '../daysList/DaysList'


const Forecast = () => {
    // const _API_KEY = "30e6b4f237af660a7c482fbf7ecb5c62"
    const owmService = new OwmService()

    let [responseObj, setResponseObj] = useState({})
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    function getForecast() {
        setError(false)
        setResponseObj({})
        setLoading(true)

        const API_KEY = process.env.REACT_APP_API_KEY

        owmService.getForecastSevenDays(API_KEY)
            .then(response => {
                console.log(response)
                setResponseObj(response)
                setLoading(false)
            })
            .catch(error => {
                setError(true)
                setLoading(false)
                console.log(error.status)
            })
    }

    return (
        <>
            <h2 className={style.headerForecast}>Forecast Weather 7 days</h2>

            <DaysList
                responseObj={responseObj}
                loading={loading}
                error={error}
            />

            {/* {JSON.stringify(responseObj)} */}

            <div>{formattedDate(1613403644, responseObj)}</div>

            <button onClick={getForecast} className={style.Button} >Get Forecast</button>


        </>
    )
}

export default Forecast