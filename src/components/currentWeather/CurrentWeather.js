import React, { useEffect } from 'react'
import CurrentWeatherDetails from "../currentWeatherDetails/CurrentWeatherDetails"
import { connect } from "react-redux"
import WithOwmService from "../hoc/WithOwmService"
import {
    dataReceived, dataError, dataLoading,
    setUnit, setCity, setLat, setLon
} from "../../redux/actions"

import style from "./CurrentWeather.module.css"


const CurrentWeather = (props) => {

    let { OwmService, unit, city, error, loading, lat, lon } = props
    let { dataReceived, dataError, dataLoading, setUnit, setCity, setLat, setLon } = props

    console.log(city)
    console.log(error)
    console.log(loading)

    useEffect(() => {
        // getWeather()
        // setUnit(unit)
    }, [])

    function getWeather(event) {
        event.preventDefault()
        if (city.length === 0) {
            dataReceived({})
            return dataError(true)

        }

        dataError(false)
        dataLoading(true)

        //кодер для правильных запросов (изменяет "неправильные" символы)
        const uriEncodedCity = encodeURIComponent(city)
        //для безопасности своего АПИключа, когда выложишь на гитхаб
        const API_KEY = process.env.REACT_APP_API_KEY

        OwmService.getCurrentWeather(unit, uriEncodedCity, API_KEY)
            .then((response) => {
                if (response.cod !== 200) {
                    throw new Error()
                }
                console.log(response)
                dataReceived(response)
                dataLoading(false)
                dataError(false)
            })
            .catch(error => {
                console.log(error)
                dataLoading(false)
                dataError(true)
            })

        //занулить input "город"    
        setCity("")
    }

    function createInput(unitName, title) {
        return (
            <label>
                <input
                    className={style.Radio}
                    type="radio"
                    name="units"
                    checked={unit === unitName}
                    value={unitName}
                    onChange={(e) => setUnit(e.target.value)} />
                {title}
            </label>
        )
    }

    return (
        <section>
            <h2>Current Weather Conditions</h2>

            <form onSubmit={getWeather} className={style.weatherForm}>
                <input
                    className={style.TextInput}
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />

                {createInput("imperial", "Fahrenheit")}
                {createInput("metric", "Celcius")}

                <button className={style.Button} type="submit">Find Weather</button>

            </form>

            <CurrentWeatherDetails
                data={props.data}
                loading={loading}
                error={error}
            />
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        city: state.city,
        unit: state.unit,
        error: state.error,
        loading: state.loading,
        lat: state.lat,
        lon: state.lon
    }
}

const mapDispatchToProps = {
    dataReceived, dataError, dataLoading,
    setUnit, setCity, setLat, setLon
}

export default WithOwmService()(connect(mapStateToProps, mapDispatchToProps)(CurrentWeather))