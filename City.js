const { Weather } = require('./Weather')


class City {
    /**
     * Describe attributes: name, weather
     */
    constructor(name) {
        this.name = name
        this.weather = new Weather()
    }

    async setWeather() {
        await this.weather.setWeather(this.name)
    }

    async setForecast() {
        await this.weather.setForecast(this.name)

    }
}

module.exports = { City }