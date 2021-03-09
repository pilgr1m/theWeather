import React, { useState } from 'react'
import Weather from "./Weather"
import { connect } from "react-redux"
import WithOwmService from "../hoc/WithOwmService"
import {
    dataReceived, dataError, dataLoading,
    setCity, setLat, setLon
} from "../../redux/weather/actions"

import style from "./WeatherContainer.module.css"
import search from "../../images/search.svg"

const WeatherContainer = (props) => {
    let { OwmService, unit, city, error, loading } = props
    let { dataReceived, dataError, dataLoading, setCity, setLat, setLon } = props

    const [unitName, setUnitName] = useState(unit)
    // console.log(city)
    // console.log(error)
    // console.log(loading)
    console.log("redux -", unit)
    console.log("local state -", unitName)

    function getWeather(event) {
        event.preventDefault()
        if (city.length === 0) {
            dataReceived({})
            return dataError(true)
        }
        dataError(false)
        dataLoading(true)

        fetchWeather()

        //занулить input "город"   
        setCity("")
    }

    function fetchWeather() {
        //кодер для правильных запросов (изменяет "неправильные" символы)
        const uriEncodedCity = encodeURIComponent(city)
        //для безопасности своего АПИключа, когда выложишь на гитхаб
        const API_KEY = process.env.REACT_APP_API_KEY

        OwmService.getCurrentWeather(unit, uriEncodedCity, API_KEY)
            .then((response) => {
                if (response.cod !== 200) {
                    throw new Error()
                }

                dataReceived(response)
                setLat(response.coord.lat)
                setLon(response.coord.lon)
                dataLoading(false)
                dataError(false)
            })
            .catch(error => {
                console.log(error)
                dataLoading(false)
                dataError(true)
            })
    }

    function createInput(name, title) {
        return (
            <div className={style.divRadio}>
                <input className={style.radio}
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
        <div className={style.weather}>
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

                <button type="submit">Search</button>

                <div className={style.wrapperRadio}>
                    {createInput("metric", "°C")}
                    {createInput("imperial", "°F")}
                </div>

            </form>

            <Weather data={props.data} unitName={unitName} loading={loading} error={error} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.weather.dataWeather,
        city: state.weather.city,
        unit: state.weather.unit,
        error: state.weather.error,
        loading: state.weather.loading,
        lat: state.weather.lat,
        lon: state.weather.lon
    }
}

const mapDispatchToProps = {
    dataReceived, dataError, dataLoading,
    setCity, setLat, setLon
}

export default WithOwmService()(connect(mapStateToProps, mapDispatchToProps)(WeatherContainer))
