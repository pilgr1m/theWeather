import React from 'react'
import Error from "../../error/Error"
import Spinner from "../../spinner/Spinner"
import { formatDateWeather, convertTemp, convertWind } from "../../helpers/Helpers"

import style from "./Weather.module.css"
import icon from "../../../images/icons/icon.png"

const Weather = ({ error, loading, dataWeather, unitName }) => {
    //иконка - https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png

    return (
        <div>
            {error && <Error />}

            {loading && <Spinner />}

            {dataWeather.cod === 200
                ? <div className={style.wrapper}>
                    <div className={style.left}>
                        <div className={style.date}> {formatDateWeather(dataWeather.dt, dataWeather)} </div>

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

                    <div className={style.right}>
                        <div className={style.tempDegrees}> {convertTemp(unitName, dataWeather.main.temp)}
                        </div>

                        <img className={style.icon} src={icon} alt="iconWeather" />
                    </div>

                </div>
                : null
            }
        </div>
    )
}
export default Weather
