import React, { useState } from 'react'
import { formatDateForecast, convertTemp, convertWind } from "../../helpers/Helpers"
import Error from "../../error/Error"
import Spinner from "../../spinner/Spinner"

import style from "./Forecast.module.css"
import iconMini from "../../../images/mini-icons/mini-icon.svg"
import cardIcon from "../../../images/card-icon.svg"


const Forecast = ({ dataForecast, unitName, error, loading }) => {
	let days = dataForecast.daily
	let { daily } = dataForecast

	let [isOpenCard, setIsOpenCard] = useState(false)
	let [id, setId] = useState(null)

	function clickDay(id) {
		setIsOpenCard(true)
		setId(id)
	}

	function closeCard() {
		setIsOpenCard(false)
		setId(null)
	}

	function dayList() {
		return days.map((day, index) => {

			return (
				<div onClick={() => clickDay(index)} key={day.dt} className={style.dayWrapper}>
					<div className={style.day}>
						<span className={style.dayDate}> {formatDateForecast(day.dt, dataForecast)}  </span>
						<div>
							<img className={style.iconMini} src={iconMini} alt="iconMini" />
						</div>
						<span>
							{convertTemp(unitName, day.temp.day)}
						</span>
					</div>

				</div>
			)
		})
	}

	function createCardDay(id) {

		return (
			<div className={style.cardWrapper}>
				<h2 className={style.cardTitle}>
					{formatDateForecast(daily[id].dt, dataForecast)}
				</h2>

				<h4 className={style.cardDescr}>
					{daily[id].weather.map((el, index) => {
						return <span key={index}>
							{(`${el.main}. ${el.description}`).toUpperCase()}
						</span>
					})}
				</h4>

				<div className={style.tempDescr}>
					The high will be {convertTemp(unitName, daily[id].temp.max)}, the low will be {convertTemp(unitName, daily[id].temp.min)}.
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

				<img className={style.iconCard} src={cardIcon} alt="cardIcon" />
				<button className={style.close} onClick={() => closeCard()}></button>

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
		<div className={style.wrapperForecast}>
			{ error && <Error />}
			{ loading && <Spinner />}

			{dataForecast.daily
				? <>
					<h2 className={style.title}>8-day Forecast </h2>
					<div className={style.dayList}>
						{dayList()}
					</div>
				</>
				: null
			}

			{ isOpenCard
				? <>
					{createCardDay(id)}
				</>
				: null
			}

		</div>
	)
}

export default Forecast




