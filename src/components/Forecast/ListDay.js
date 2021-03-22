import React from 'react'
import { convertTemp, formatDate, getSrc } from "../helpers/Helpers"

import style from "./ForecastContainer.module.css"


const ListDay = ({ clickDay, unitName, dataForecast }) => {
	let days = dataForecast.daily

	function dayList() {
		return days.map((day, index) => {
			return (
				<div onClick={() => clickDay(index)} key={day.dt} className={style.dayWrapper}>
					<div className={style.day}>
						<span className={style.dayDate}> {formatDate(day.dt, dataForecast)}  </span>
						<div>
							<img className={style.iconMini} src={getSrc("mini-icons", day.weather[0].icon)} alt="iconMini" />
						</div>
						<span>
							{convertTemp(unitName, day.temp.day)}
						</span>
					</div>
				</div>
			)
		})
	}

	return (
		<>
			{dataForecast.daily
				? <>
					<h2 className={style.title}>8-day Forecast </h2>
					<div className={style.dayList}>
						{dayList()}
					</div>
				</>
				: null
			}
		</>
	)
}
export default ListDay