import React from 'react'

import style from "./DayCard.module.css"
import cardIcon from "../../images/card-icon.svg"

const DayCard = () => {

	return (
		<div className={style.cardWrapper}>
			<h2 className={style.cardTitle}>
				MON, 2 Mar
			</h2>
			<h4 className={style.cardDescr}>
				OVERCAST CLOUDS,LIHGT BREEZE.
			</h4>

			<div className={style.tempDescr}>
				The high will be 3*C, the low will be 0*C.
			</div>

			<div className={style.cardWph}>
				<div> Wind: 3.0m/s W </div>
				<div> Pressure: 1030hPa </div>
				<div> Humidity: 93% </div>
			</div>

			<div className={style.tempForTime}>
				<div className={style.time}>
					<div className={style.medi}> MORNING </div>
					<div className={style.semi}> 2*C </div>
					<span> feels like </span>
					<div className={style.semi}> 0*C </div>
				</div>
				<div className={style.time}>
					<div className={style.medi}> AFTERNOON </div>
					<div className={style.semi}> 0*C </div>
					<span> feels like </span>
					<div className={style.semi}> -1*C </div>
				</div>
				<div className={style.time}>
					<div className={style.medi}> EVENING </div>
					<div className={style.semi}> -1*C </div>
					<span> feels like </span>
					<div className={style.semi}> -3*C </div>
				</div>


			</div>

			<img className={style.iconCard} src={cardIcon} alt="cardIcon" />

		</div>

	)
}
export default DayCard