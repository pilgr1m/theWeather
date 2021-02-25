const initialState = {
    data: {},
    unit: "metric",
    city: "",
    error: false,
    loading: false,
    lat: 50.4333,
    lon: 30.5167,
}

// data.coord.lon
// data.coord.lat


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "DATA_RECEIVED":
            return {
                ...state, data: action.payload
            }
        case "DATA_ERROR":
            return {
                ...state, error: action.error
            }
        case "DATA_LOADING":
            return {
                ...state, loading: action.loading
            }
        case "SET_UNIT":
            return {
                ...state, unit: action.unit
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

export default reducer