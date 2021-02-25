import React from 'react'
import Error from "../error/Error"
import Spinner from '../spinner/Spinner'
import style from "./CurrentWeatherDetails.module.css"

const CurrentWeatherDetails = ({ error, loading, data }) => {
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

    function formattedDate(value) {
        // debugger
        const timezone = data.timezone
        const date = new Date(((value - timezone) * 1000));

        const minutes = date.getMinutes();
        const hours = date.getHours();
        const day = date.getDate();
        const month = date.getMonth();
        // const year = date.getFullYear();
        return `${hours}:${minutes <= 9 ? `0${minutes}` : minutes}${hours >= 11 ? "pm" : "am"}, ${nameMonth(month)} ${day}`;
    }

    function dateSun(value) {
        const date = new Date(value * 1000);

        const minutes = date.getMinutes();
        const hours = date.getHours();
        const day = date.getDate();
        const month = date.getMonth();
        return `${hours}:${minutes}${hours >= 11 ? "pm" : "am"}, ${nameMonth(month)} ${day}`;
    }



    return (
        <div className={style.Wrapper}>
            {error && <Error />}

            {loading && <Spinner />}

            {data.cod === 200
                ? <div>
                    <div className={style.List}>
                        <div>City/Місто : {data.name}</div>

                        <div>Country/Країна : {data.sys.country} </div>

                        <div>Date/Дата : {formattedDate(data.dt)} / {data.dt} </div>

                        <div>Temperature/Температура : {Math.round(data.main.temp)} <sup>&deg;C</sup> </div>

                        <div>Temperature Feels like/Відчувається як : {Math.round(data.main.feels_like)} <sup>&deg;C</sup> </div>

                        <div>Icon/Іконка : <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} /></div>
                        <div>Description/Опис : {data.weather.map(el => <span key={el.id}>{el.description} </span>)}</div>

                        <div>Wind/Вітер : speed {data.wind.speed} direction {data.wind.deg}</div>

                        <div>Pressure/Тиск : {data.main.pressure} </div>

                        <div>Humidity/Вологість : {data.main.humidity} </div>

                        <div>Visibility/Видимість : {data.visibility} </div>

                        <div>Cloud/Хмари : {data.clouds.all} </div>

                        <hr />
                        <div>Sunrise/Схід : {dateSun(data.sys.sunrise)} {data.sys.sunrise} </div>
                        <div>Sunset/Захід : {dateSun(data.sys.sunset)} {data.sys.sunset}</div>
                        <hr />
                        <div>Lon : {data.coord.lon} </div>
                        <div>Lat : {data.coord.lat}</div>

                    </div>

                </div>
                : null
            }
        </div>
    )
}
export default CurrentWeatherDetails
