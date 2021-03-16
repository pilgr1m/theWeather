import React from 'react'
import './App.css'
import AppHeader from './components/appHeader/AppHeader'
import AppFooter from './components/appFooter/AppFooter'
import { Switch, Route } from "react-router-dom"
import AppWrapper from './components/appWrapper/AppWrapper'


const App = () => {
	return (
		<div className="wrapperApp">
			<AppHeader />

			<AppWrapper />

			<AppFooter />
		</div>
	)
}

export default App
