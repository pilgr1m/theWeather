import React from 'react'
import Error from "../error/Error"
import Spinner from "../spinner/Spinner"

import style from "./Weather.module.css"
import icon from "../../images/icon2.png"

const Weather = ({ error, loading, data, unitName }) => {
    //иконка - https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png


    function nameMonth(month) {
        switch (month) {
            case 0: return "Jan"
            case 1: return "Feb"
            case 2: return "Mar"
            case 3: return "Apr"
            case 4: return "May"
            case 5: return "Jun"
            case 6: return "Jul"
            case 7: return "Aug"
            case 8: return "Sep"
            case 9: return "Oct"
            case 10: return "Nov"
            case 11: return "Dec"
            default: return "Month"
        }
    }

    function nameDayofWeek(day) {
        switch (day) {
            case 0: return "SUN"
            case 1: return "MON"
            case 2: return "TUE"
            case 3: return "WED"
            case 4: return "THU"
            case 5: return "FRI"
            case 6: return "SAT"
            default: return "Day"
        }
    }

    function formattedDate(value) {
        const timezone = (data.timezone - 7200)
        const date = new Date((value + timezone) * 1000);
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const dayMonth = date.getDate();
        const dayWeek = date.getDay();
        const month = date.getMonth();
        // const year = date.getFullYear();
        return `${nameDayofWeek(dayWeek)} • ${hours}:${minutes <= 9 ? `0${minutes}` : minutes}${hours >= 11 ? "pm" : "am"}, ${nameMonth(month)} ${dayMonth}`;
    }

    function dateSun(value) {
        const timezone = (data.timezone - 7200)
        const date = new Date((value + timezone) * 1000);

        const minutes = date.getMinutes();
        const hours = date.getHours();
        const day = date.getDate();
        const month = date.getMonth();
        if (hours <= 9) {
            return `0${hours}`
        }
        // if (minutes <= 9) {
        //     return `0${minutes}`
        // }
        return `${hours}:${minutes}${hours >= 11 ? "pm" : "am"}, ${nameMonth(month)} ${day}`;
    }



    return (
        <div>
            {error && <Error />}

            {loading && <Spinner />}

            {data.cod === 200
                ? <div className={style.wrapper}>
                    <div className={style.date}> {formattedDate(data.dt)} </div>

                    <div className={style.city}> {data.name}, {data.sys.country} </div>


                    {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} /> */}

                    <div className={style.tempDegrees}> {(unitName === "metric")
                        ? `${Math.round(data.main.temp)}°C`
                        : `${Math.round(((data.main.temp) * 1.8) + 32)}°F`}
                    </div>

                    <div className={style.others}>
                        <div className={style.feelsLike}>Feels like {(unitName === "metric")
                            ? `${Math.round(data.main.feels_like)}°C`
                            : `${Math.round(((data.main.feels_like) * 1.8) + 32)}°F`}
                        </div>

                        <div className={style.wph}>
                            <div>
                                Wind: {(unitName === "metric")
                                    ? `${data.wind.speed}m/s `
                                    : `${(data.wind.speed * 2.237).toFixed(1)}mph `}
                                {data.wind.deg}&deg;
                        </div>
                            <div>Pressure: {data.main.pressure}hPa </div>
                            <div>Humidity: {data.main.humidity}% </div>
                        </div>
                        <div className={style.descr}>{data.weather.map(el => <span key={el.id}>{el.description.toUpperCase()} </span>)}</div>
                    </div>
                    <img className={style.icon} src={icon} alt="iconWeather" />

                </div>
                : null
            }
        </div>
    )
}
export default Weather
