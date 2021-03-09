import React from 'react'
import Forecast from "./Forecast"
import { connect } from "react-redux"
import WithOwmService from "../hoc/WithOwmService"
import { dataReceived, dataLoading, dataError } from "../../redux/forecast/actions"
import { formattedDate } from "../helpers/Helpers"

import style from "./ForecastContainer.module.css"


const ForecastContainer = (props) => {
	let { OwmService, data, unit, error, loading, lat, lon } = props
	let { dataReceived, dataError, dataLoading } = props

	function getForecast() {
		if (!lat && !lon) {
			return dataError(true)
		}
		dataError(false)
		dataLoading(true)

		const API_KEY = process.env.REACT_APP_API_KEY

		fetchForecast(unit, lat, lon, API_KEY)
	}


	function fetchForecast(unit, lat, lon, API_KEY) {
		OwmService.getForecast8Days(unit, lat, lon, API_KEY)
			.then(response => {
				dataReceived(response)
				dataLoading(false)
			})
			.catch(error => {
				dataError(true)
				dataLoading(false)
				console.log(error.status)
			})
	}

	return (
		<div className={style.forecastContainer}>


			<div className={style.titleForecast}>
				8-day Forecast
			</div>
			<button className={style.button} onClick={getForecast}>
				Get Forecast
			</button>

			<Forecast
				data={data}
				loading={loading}
				error={error}
				unit={unit}
			/>

		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		data: state.forecast.dataForecast,
		error: state.forecast.error,
		loading: state.forecast.loading,
		//
		unit: state.weather.unit,
		lat: state.weather.lat,
		lon: state.weather.lon
	}
}

const mapDispatchToProps = {
	dataReceived, dataError, dataLoading
}

export default WithOwmService()(connect(mapStateToProps, mapDispatchToProps)(ForecastContainer))