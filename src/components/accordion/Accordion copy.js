import React, { useState } from 'react'
import style from "./AccordionCopy.module.css"
// import "./AccordionCopy.module.css"

export default function App() {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
	};
	return (
		<>

			<div className={isActive ? `${style.active}` : `${style.noActive}`}>
				<h1>Hello react</h1>
				<button onClick={handleToggle}>Toggle class</button>
			</div>

			<div className={isActive ? `${style.active}` : `${style.noActive}`}>
				<h1>Hello react</h1>
				<button onClick={handleToggle}>Toggle class</button>
			</div>

		</>
	)
}
