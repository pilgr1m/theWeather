import React, { useEffect } from 'react'
import ItemDetails from "../itemDetails/ItemDetails"
import { connect } from "react-redux"
import WithOwmService from "../hoc/WithOwmService"
import {
    dataLoaded, dataError, dataRequest,
    setUnit, setCity
} from "../../redux/actions"

import style from "./CurrentWeather.module.css"


const CurrentWeather = (props) => {

    let { unit, city, error, loading, OwmService } = props
    let { dataLoaded, dataError, dataRequest, setUnit, setCity } = props

    useEffect(() => {
        dataRequest()
        getWeather()
    }, [])

    const getWeather = () => {
        console.log("props:: ", props)
        console.log("owmService:: ", OwmService)
        const uriEncodedCity = encodeURIComponent(city = "Kyiv")
        const API_KEY = process.env.REACT_APP_API_KEY

        // owmService.getCurrentWeather(unit, uriEncodedCity, API_KEY)
        OwmService.getCurrentWeather("metric", uriEncodedCity, API_KEY)
            .then((response) => {
                console.log(response)
                return dataLoaded(response)
            })
            .catch(error => {
                console.log(error)
                dataError()
            })
    }

    const setValue = (value) => {
        return value
    }

    // function getWeather(event) {
    //     const owmService = props
    //     event.preventDefault();
    //     if (city.length === 0) {
    //         return setError(true);
    //     }

    //     setError(false)
    //     setLoading(true)

    //     const uriEncodedCity = encodeURIComponent(city)
    //     const API_KEY = process.env.REACT_APP_API_KEY

    //     owmService.getCurrentWeather(unit, uriEncodedCity, API_KEY)
    //         .then(response => {
    //             if (response.cod !== 200) {
    //                 throw new Error()
    //             }
    //             console.log(response)
    //             // setResponseObj(response)
    //             setLoading(false)
    //         })
    //         .catch(error => {
    //             setError(true)
    //             setLoading(false)
    //             console.log(error.status)
    //         })
    // }

    function createInput(value, title) {
        return (
            <label>
                <input
                    className={style.Radio}
                    type="radio"
                    name="units"
                    checked={unit === value}
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                {title}
            </label>
        )
    }

    function foo(params) {
        return null
    }

    return (
        <>
            <h2>Find Current Weather Conditions</h2>
            <ItemDetails
                data={props.data}
                loading={loading}
                error={error}
            />

            <form onSubmit={foo}>
                <input
                    className={style.TextInput}
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setValue(e.target.value)} />


                {createInput("imperial", "Fahrenheit")}
                {createInput("metric", "Celcius")}

                <button className={style.Button} type="submit">Find Weather</button>

            </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        city: state.city,
        unit: state.unit,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    dataLoaded, dataError, dataRequest,
    setUnit, setCity
}

export default WithOwmService()(connect(mapStateToProps, mapDispatchToProps)(CurrentWeather))