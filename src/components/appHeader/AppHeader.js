import React from 'react'
import style from "./AppHeader.module.css"
import logo from "../../images/theWeather.svg"

const AppHeader = () => {

	return (
		<header className={style.appHeader}>
			<img src={logo} alt="the Weathe. logo" />

		</header>

	)
}
export default AppHeader