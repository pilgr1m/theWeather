import React, { useState } from 'react'
import Error from "../error/Error"
import Spinner from "../spinner/Spinner"
import CardDay from "./CardDay"
import ListDay from "./ListDay"

import style from "./ForecastContainer.module.css"


const ForecastContainer = ({ dataForecast, unitName }) => {
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

	return (
		<div className={style.wrapperForecast}>

			<ListDay id={id} dataForecast={dataForecast} unitName={unitName} clickDay={clickDay} />

			<CardDay id={id} dataForecast={dataForecast} unitName={unitName} isOpenCard={isOpenCard} closeCard={closeCard} />

		</div>
	)
}
export default ForecastContainer




