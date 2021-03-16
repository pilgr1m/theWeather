const initialState = {
    dataWeather: {},
    dataForecast: {},
    unit: "metric",
    city: "",
    error: false,
    loading: false,
}


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DATA_RECEIVED_WEATHER":
            return {
                ...state, dataWeather: action.payload
            }
        case "DATA_RECEIVED_FORECAST":
            return {
                ...state, dataForecast: action.payload
            }
        // case "ADD_CARD_DAY_FORECAST":
        //     const id = action.id
        //     const item = state.menu.find(item => item.id === id)
        //     const newItem = {
        //         title: item.title,
        //         url: item.url,
        //         // etc...
        //     }
        //     return {
        //         ...state,
        //         item: [
        //             ...state.items,
        //             newItem
        //         ]
        //     }
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