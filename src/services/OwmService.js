export default class OwmService {
    // const _API_KEY = "30e6b4f237af660a7c482fbf7ecb5c62"
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

    //get current weather
    getCurrentWeather(unit, city, apikey) {
        return this.getResources(`/data/2.5/weather?&units=${unit}&q=${city}&appid=${apikey}`)
    }

    //forecast 8-days
    getForecast8Days(lat, lon, apikey) {
        return this.getResources(`/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apikey}`)
        // return this.getResources(`/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${apikey}`)
    }

}

