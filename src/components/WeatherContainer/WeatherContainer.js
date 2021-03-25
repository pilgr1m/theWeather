import React, { useState } from 'react'
import { connect } from "react-redux"
import WithOwmService from "../hoc/WithOwmService"
import {
    dataReceivedWeather, dataError, dataLoading,
    setCity, dataReceivedForecast
} from "../../redux/weather/actions"

import CurrentWeather from "../CurrentWeather/CurrentWeather"
import ForecastContainer from "../Forecast/ForecastContainer"

import style from "./WeatherContainer.module.css"
import search from "../../images/search.svg"


const WeatherContainer = (props) => {
    let { OwmService, dataReceivedWeather, dataError,
        dataLoading, setCity, dataReceivedForecast,
        dataWeather, dataForecast, city, unit, error, loading } = props

    const [unitName, setUnitName] = useState(unit)

    function getWeather(event) {
        event.preventDefault()
        if (city.length === 0) {
            dataReceivedWeather({})
            return dataError(true)
        }
        dataError(false)
        dataLoading(true)

        fetchWeather()
        setCity("")
    }

    function fetchWeather() {
        //changer for "wrong" symbols
        const uriEncodedCity = encodeURIComponent(city)
        //for save your APIkey
        const API_KEY = process.env.REACT_APP_API_KEY

        OwmService.getCurrentWeather(unit, uriEncodedCity, API_KEY)
            .then((response) => {
                if (response.cod !== 200) {
                    throw new Error()
                }
                dataReceivedWeather(response)
                getForecast(response.coord.lat, response.coord.lon)
                dataLoading(false)
                dataError(false)
            })
            .catch(error => {
                console.log(error)
                dataLoading(false)
                dataError(true)
            })
    }

    function fetchForecast(unit, lat, lon) {
        const API_KEY = process.env.REACT_APP_API_KEY
        OwmService.getForecast8Days(unit, lat, lon, API_KEY)
            .then(response => {
                dataReceivedForecast(response)
                dataLoading(false)
            })
            .catch(error => {
                dataError(true)
                dataLoading(false)
                console.log(error.status)
            })
    }

    function getForecast(lat, lon) {
        if (!lat && !lon) {
            dataReceivedForecast({})
            return dataError(true)
        }
        dataError(false)
        dataLoading(true)

        fetchForecast(unit, lat, lon)
    }

    function createInput(name, title) {
        return (
            <div className={style.divRadio}>
                <input
                    className={style.radio}
                    type="radio"
                    name="units"
                    checked={unitName === name}
                    value={name}
                    id={name}
                    onChange={(e) => setUnitName(e.target.value)} />
                <label className={style.label} htmlFor={name}> <span> {title} </span> </label>
            </div>
        )
    }

    return (
        <>
            <form className={style.weatherForm} onSubmit={getWeather}>
                <div className={style.inputWrapper}>
                    <input
                        type="text"
                        placeholder="Search City"
                        maxLength="50"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                    <img src={search} alt="search" />
                </div>

                <button className={style.buttonSubmit} type="submit">Search</button>

                <div className={style.wrapperRadio}>
                    {createInput("metric", "°C")}
                    {createInput("imperial", "°F")}
                </div>
            </form>

            <CurrentWeather
                dataWeather={dataWeather}
                unitName={unitName}
                loading={loading}
                error={error} />
            <ForecastContainer
                dataForecast={dataForecast}
                unitName={unitName} />

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.weather,
        dataWeather: state.weather.dataWeather,
        dataForecast: state.weather.dataForecast,
        city: state.weather.city,
        unit: state.weather.unit,
        error: state.weather.error,
        loading: state.weather.loading,
    }
}

const mapDispatchToProps = {
    dataReceivedWeather, dataError, dataLoading,
    setCity, dataReceivedForecast
}

export default WithOwmService()(connect(mapStateToProps, mapDispatchToProps)(WeatherContainer))
