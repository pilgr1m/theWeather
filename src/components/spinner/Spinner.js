import React from 'react'
import style from "./Spinner.module.css"

const Spinner = () => {

    return (
        <div className={style.spinnerWrapper}>
            <div className={style.blockspin}>
                <div className={style.spinner}></div>
            </div>


        </div>
    )
}
export default Spinner