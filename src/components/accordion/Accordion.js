import React from 'react'
import MyComponent from "./Accordion copy"

import style from "./Accordion.module.css"

const Accordion = () => {

	function clickAccordion(event) {
		event.preventDefault()
		console.log("click acco")

		event.target.classList.toggle("Accordion_active__18ppl")
		event.target.classList.toggle("Accordion_accordion__3qOFM")
		console.log((event.target.classList.contains("active") ? "active class -- True" : "active class -- False"))
		//след.елемент после выбраного
		let panel = event.target.nextElementSibling
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}

	return (
		<section>

			<button className={style.accordion} onClick={clickAccordion}>
				Section 1
			</button>
			<div className={style.panel}>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
			</div>

			<button className={style.accordion} onClick={clickAccordion}>
				Section 2
			</button>
			<div className={style.panel}>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
			</div>

		</section >
	)
}
export default Accordion