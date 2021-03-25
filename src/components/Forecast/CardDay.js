import React from 'react'
import { convertTemp, convertWind, formatDate, getSrc } from "../helpers/Helpers"

import style from "./ForecastContainer.module.css"


const CardDay = ({ id, unitName, dataForecast,
    isOpenCard, closeCard }) => {
    let { daily } = dataForecast

    function createCardDay(id) {
        return (
            <div className={style.cardWrapper}>
                <h2 className={style.cardTitle}>
                    {formatDate(daily[id].dt, dataForecast)}
                </h2>

                <h4 className={style.cardDescr}>
                    {daily[id].weather.map((el, index) => {
                        return <span key={index}>
                            {(`${el.main}. ${el.description}`).toUpperCase()}
                        </span>
                    })}
                </h4>

                <div className={style.tempDescr}>
                    The high will be {convertTemp(unitName, daily[id].temp.max)}, the low will be {convertTemp(unitName, daily[id].temp.min)}
                </div>

                <div className={style.cardWph}>
                    <div> Wind: {convertWind(unitName, daily[id].wind_speed)}
                    </div>
                    <div> Pressure: {daily[id].pressure}hPa </div>
                    <div> Humidity: {daily[id].humidity}% </div>
                </div>

                <div className={style.tempForTime}>
                    {createDivTempTime("MORNING", daily[id].temp.morn, daily[id].feels_like.morn)}
                    {createDivTempTime("AFTERNOON", daily[id].temp.day, daily[id].feels_like.day)}
                    {createDivTempTime("EVENING", daily[id].temp.eve, daily[id].feels_like.eve)}
                </div>

                <img
                    className={style.iconCard}
                    src={getSrc("card-icons", daily[id].weather[0].icon)}
                    alt="cardIcon" />

                <button
                    className={style.close}
                    onClick={() => closeCard()} />

            </div>
        )
    }

    function createDivTempTime(time, tempValue, feelsLike) {
        return (
            <div className={style.time}>
                <div className={style.medi}> {time} </div>
                <div className={style.semi}> {convertTemp(unitName, tempValue)} </div>
                <span> feels like </span>
                <div className={style.semi}> {convertTemp(unitName, feelsLike)} </div>
            </div>
        )
    }


    return (
        <>
            { isOpenCard
                ? <>
                    {createCardDay(id)}
                </>
                : null
            }
        </>
    )
}
export default CardDay