import React from 'react'
import CurrentWeather from "./components/currentWeather"
import Forecast from "./components/forecast/Forecast"
import './App.css'
import AppHeader from './components/appHeader/AppHeader'
import AppFooter from './components/appFooter/AppFooter'
import { Switch, Route } from "react-router-dom"

const App = () => {
	return (
		<div className="app">
			<AppHeader />

			{/* <Switch>
				<Route path="/current"
					component={CurrentWeather}
					exact />

				<Route path="/forecast"
					component={Forecast}
					exact />

			</Switch> */}

			<CurrentWeather />
			{/* <Forecast /> */}

			<AppFooter />
		</div>
	)
}

export default App
