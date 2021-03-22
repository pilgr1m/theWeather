import React from 'react'
import Error from "../error/Error"
import Spinner from "../spinner/Spinner"
import { convertTemp, convertWind, formatDate, getSrc } from "../helpers/Helpers"

import style from "./CurrentWeather.module.css"


const CurrentWeather = ({ error, loading, dataWeather, unitName }) => {
    // console.log(dataWeather)

    return (
        <>
            {error && <Error />}

            {loading && <Spinner />}

            {dataWeather.cod === 200
                ? <div className={style.wrapper}>
                    <div className={style.left}>
                        <div className={style.date}> {formatDate(dataWeather.dt, dataWeather, true)} </div>

                        <div className={style.city}> {dataWeather.name}, {dataWeather.sys.country} </div>

                        <div className={style.feelsLike}>Feels like {convertTemp(unitName, dataWeather.main.feels_like)}
                        </div>

                        <div className={style.wph}>
                            <div>
                                Wind: {convertWind(unitName, dataWeather.wind.speed)}
                            </div>
                            <div>Pressure: {dataWeather.main.pressure}hPa </div>
                            <div>Humidity: {dataWeather.main.humidity}% </div>
                        </div>
                        <div className={style.descr}>{dataWeather.weather.map(el => <span key={el.id}>{el.description.toUpperCase()} </span>)}</div>

                    </div>

                    <div className={style.tempDegrees}> {convertTemp(unitName, dataWeather.main.temp)}
                    </div>

                    <img className={style.icon} src={getSrc("icons", dataWeather.weather[0].icon)} alt="iconWeather" />


                </div>
                : null
            }
        </>
    )
}
export default CurrentWeather
