import React from 'react'
import CurrentWeather from "./components/currentWeather"
import Forecast from "./components/forecast/Forecast"
import './App.css'
import AppHeader from './components/appHeader/AppHeader'
import AppFooter from './components/appFooter/AppFooter'
import { Switch, Route } from "react-router-dom"
import Accordion from "./components/accordion/Accordion"

const App = () => {
	return (
		<div className="app">
			<AppHeader />

			<Switch>
				<Route exact path="/current-weather" >
					<CurrentWeather />
				</Route>
				<Route exact path="/8-days-forecast"
					component={Forecast}>
				</Route>
				<Route exact path="/accordion">
					<Accordion />
				</Route>
			</Switch>

			<Accordion />

			<AppFooter />
		</div>
	)
}

export default App
