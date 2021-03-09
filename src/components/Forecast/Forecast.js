import React from 'react'
import Spinner from "../spinner/Spinner"
import Error from "../error/Error"
import { formattedDate } from "../helpers/Helpers"

import style from "./Forecast.module.css"
import iconMini from "../../images/mini-icon.svg"

const Forecast = ({ loading, error, data, unit }) => {
	let days = data.daily


	function dayList() {

		return days.map(day => {
			return (
				<div key={day.dt} className={style.day}>

					<span> {formattedDate(day.dt, data)}  </span>
					<div>
						<img className={style.iconMini} src={iconMini} alt="iconMini" />
					</div>
					<span>
						{Math.round(day.temp.day)}&deg;{unit === "metric" ? "C " : "F "}
					</span>
				</div>
			)
		})
	}

	return (
		<div className={style.wrapperForecast}>
			{error && <Error />}
			{loading && <Spinner />}

			<div className={style.dayList}>
				{data.daily ? dayList() : null}
			</div>

		</div>
	)
}
export default Forecast




