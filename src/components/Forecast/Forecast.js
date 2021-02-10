import React, { useState } from 'react'


const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        const API_KEY = "30e6b4f237af660a7c482fbf7ecb5c62"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&appid=${API_KEY}`)
            .then(response => {
                console.log("1th then:", response)
                return response.json()
            })
            .then(response => {
                console.log("2th then:", response)
                setResponseObj(response)
            })
    }


    return (
        <>
            {/* JSX-code will go here */}
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </>
    )
}

export default Forecast