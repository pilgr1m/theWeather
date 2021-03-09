const initialState = {
    dataForecast: {},
    error: false,
    loading: false
}

console.log("dataForecast -- ", initialState.dataForecast)

const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DATA_RECEIVED":
            return {
                ...state, dataForecast: action.payload
            }
        case "DATA_ERROR":
            return {
                ...state, error: action.error
            }
        case "DATA_LOADING":
            return {
                ...state, loading: action.loading
            }
        default:
            return state
    }
}
export default forecastReducer
