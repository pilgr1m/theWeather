import React from 'react'
import Spinner from "../spinner/Spinner"
import Error from "../error/Error"
import { formattedDate } from "../helpers/Helpers"
import style from "./DaysList.module.css"

const DaysList = ({ loading, error, responseObj }) => {
    let days = responseObj.daily

    function dayList() {
        console.log(responseObj)
        return days.map(day => {
            return (
                <li key={day.dt} className={style.listItem}>
                    <span className={style.date}> {formattedDate(day.dt)} </span>

                    <div className={style.weatherDescr}>
                        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} className={style.icon} />
                        <span className={style.minMaxTemp}> {day.temp.min} / {day.temp.max}  </span>
                        <span className={style.descr}> {day.weather[0].description} </span>
                    </div>
                </li>
            )
        })
    }

    return (
        <>
            {error && <Error />}
            {loading && <Spinner />}

            <div>
                <h3 > 8-day forecast </h3>
                {responseObj.daily
                    ? dayList()
                    : null
                }
            </div>
        </>
    )
}
export default DaysList




