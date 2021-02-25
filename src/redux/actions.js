const dataReceived = (newData) => {
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
const setUnit = (newUnit) => {
    return {
        type: "SET_UNIT",
        unit: newUnit
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
    setUnit, setCity, setLat, setLon
}