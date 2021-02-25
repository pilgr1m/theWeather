import React from 'react'
import ForecastList from "../forecastList/ForecastList"
import { connect } from "react-redux"
import WithOwmService from "../hoc/WithOwmService"
import {
    dataReceived, dataError, dataLoading,
    setUnit, setCity, setLat, setLon
} from "../../redux/actions"
import { formattedDate } from "../helpers/Helpers"

import style from "./Forecast.module.css"


const Forecast = (props) => {


    let { OwmService, data, unit, city, error, loading, lat, lon } = props
    let { dataReceived, dataError, dataLoading, setUnit, setCity, setLat, setLon } = props

    console.log(lat)
    console.log(lon)


    function getForecast() {
        dataError(false)
        dataLoading(true)

        const API_KEY = process.env.REACT_APP_API_KEY

        OwmService.getForecast8Days(lat, lon, API_KEY)
            .then(response => {
                console.log(response)
                dataReceived(response)
                dataLoading(false)
            })
            .catch(error => {
                dataError(true)
                dataLoading(false)
                console.log(error.status)
            })
    }

    return (
        <section>
            <h2 className={style.headerForecast}> 8-day Forecast</h2>

            <ForecastList
                data={data}
                loading={loading}
                error={error}
            />


            <div>{formattedDate(1613403644, data)}</div>

            <button onClick={getForecast} className={style.Button} >Get Forecast</button>


        </section>
    )
}



const mapStateToProps = (state) => {
    return {
        data: state.data,
        error: state.error,
        loading: state.loading,
        lat: state.lat,
        lon: state.lon
    }
}

const mapDispatchToProps = {
    dataReceived, dataError, dataLoading,
    setLat, setLon
}

export default WithOwmService()(connect(mapStateToProps, mapDispatchToProps)(Forecast))