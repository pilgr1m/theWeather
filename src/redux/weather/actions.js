const dataReceived = (newData) => {
    console.log(newData)
    return {
        type: "DATA_RECEIVED",
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
const setLat = (newLat) => {
    return {
        type: "SET_LAT",
        lat: newLat
    }
}
const setLon = (newLon) => {
    return {
        type: "SET_LON",
        lon: newLon
    }
}

export {
    dataReceived, dataError, dataLoading,
    setCity, setLat, setLon
}