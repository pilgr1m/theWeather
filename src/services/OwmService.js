export default class OwmService {
    constructor() {
        this._baseUrl = "https://api.openweathermap.org"
    }
    //main func fetch
    async getResources(url) {
        const response = await fetch(`${this._baseUrl}${url}`)
        console.log(`${this._baseUrl}${url}`)
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`)
        }
        return await response.json()
    }

    //get weather
    getCurrentWeather(unit, city, apikey) {
        return this.getResources(`/data/2.5/weather?&units=${unit}&q=${city}&appid=${apikey}`)
    }

    //forecast 8-days
    getForecast8Days(unit, lat, lon, apikey) {
        return this.getResources(`/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=current,minutely,hourly&appid=${apikey}`)
    }

}

