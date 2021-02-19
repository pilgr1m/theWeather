import React from 'react'
import style from "./AppFooter.module.css"

const AppFooter = () => {

    return (
        <footer className={style.appFooter}>
            App created by <a href="#" className={style.footerLink}> Ivan Volokha</a> -2021- design by <a href="#" className={style.footerLink}> Daria Volokha </a>
        </footer>
    )
}
export default AppFooter