import { combineReducers } from "redux"
import weatherReducer from "./weather/reducer"
import forecastReducer from "./forecast/reducer"

export default combineReducers({
    weather: weatherReducer,
    forecast: forecastReducer
})