const initialState = {
    dataWeather: {},
    unit: "metric",
    city: "",
    error: false,
    loading: false,
    lat: null,
    lon: null,
}

console.log("dataWeather -- ", initialState.dataWeather)

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DATA_RECEIVED":
            return {
                ...state, dataWeather: action.payload
            }
        case "DATA_ERROR":
            return {
                ...state, error: action.error
            }
        case "DATA_LOADING":
            return {
                ...state, loading: action.loading
            }
        case "SET_CITY":
            return {
                ...state, city: action.city
            }
        case "SET_LAT":
            return {
                ...state, lat: action.lat
            }
        case "SET_LON":
            return {
                ...state, lon: action.lon
            }
        default:
            return state
    }
}

export default weatherReducer