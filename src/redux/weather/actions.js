const dataReceivedWeather = (newData) => {
    return {
        type: "DATA_RECEIVED_WEATHER",
        payload: newData
    }
}
const dataError = (newError) => {
    return {
        type: "DATA_ERROR",
        error: newError
    }
}
const dataLoading = (newLoading) => {
    return {
        type: "DATA_LOADING",
        loading: newLoading

    }
}
const setCity = (newCity) => {
    return {
        type: "SET_CITY",
        city: newCity
    }
}

const dataReceivedForecast = (newData) => {
    return {
        type: "DATA_RECEIVED_FORECAST",
        payload: newData
    }

}
// const addCardDayForecast = (newId) => {
//     return {
//         type: "ADD_CARD_DAY_FORECAST",
//         id: newId
//     }
// }

export {
    dataReceivedWeather, dataError, dataLoading,
    setCity, dataReceivedForecast,
    //  addCardDayForecast
}