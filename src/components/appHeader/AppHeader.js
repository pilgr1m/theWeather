import React from 'react'
import style from "./AppHeader.module.css"
import { Link } from "react-router-dom"

const AppHeader = () => {

	return (
		<header className={style.appHeader}>
			<h1> WEZER -Weather app</h1>
			<p>(//toggle: англ-укр и светлая-темная темa) <br /></p>
			<nav className={style.menu}>
				<ul>
					<li>
						<Link to="/current-weather" className={style.linkMenu}>
							Current weather </Link>
					</li>
					<li>
						<Link to="/8-days-forecast" className={style.linkMenu}>
							8-day forecast </Link>
					</li>
					<li>
						<Link to="/accordion " className={style.linkMenu}>
							Accordion  </Link>
					</li>
				</ul>
			</nav>

		</header>

	)
}
export default AppHeader