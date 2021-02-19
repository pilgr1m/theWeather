const dataLoaded = (newData) => {
    return {
        type: "DATA_LOADED",
        payload: newData
    }
}
const dataError = () => {
    return {
        type: "DATA_ERROR",
    }
}
const dataRequest = () => {
    return {
        type: "DATA_REQUEST",

    }
}
const setUnit = (unit) => {
    return {
        type: "SET_UNIT",
    }
}
const setCity = (city) => {
    return {
        type: "SET_CITY",
    }
}

export {
    dataLoaded, dataError, dataRequest,
    setUnit, setCity
}