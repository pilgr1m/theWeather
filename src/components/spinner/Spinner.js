import React from 'react'
import style from "./Spinner.module.css"

const Spinner = () => {

    return (
        <div className={style.spinnerWrapper}>
            <div className={style.blockspin}>
                {/* <span className={style.loading}>Loading...</span> */}
                <div className={style.spinner}></div>
            </div>


        </div>
    )
}
export default Spinner