import React from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import AppFooter from './components/AppFooter/AppFooter'
import WeatherContainer from "./components/WeatherContainer/WeatherContainer"

import "./App.css"


const App = () => {
	return (
		<div className="mainWrapper">
			<AppHeader />

			<WeatherContainer />

			<AppFooter />
		</div>
	)
}

export default App
