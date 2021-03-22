import React from 'react'
import style from "./AppFooter.module.css"

const AppFooter = () => {
    return (
        <footer className={style.appFooter}>
            app by <a href="https://www.linkedin.com/in/vanja-volokha/" className={style.footerLink} target="_blank" rel="noreferrer"> Ivan Volokha</a>  ·  2021  ·  design by <a href="https://www.linkedin.com/in/dasha-volokha/" className={style.footerLink} target="_blank" rel="noreferrer"> Daria Volokha </a>
        </footer>
    )
}
export default AppFooter