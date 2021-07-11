const axios = require('axios')

const weatherUrl = 'https://goweather.herokuapp.com/weather/'


class Weather {
    /**
     * Describe attributes: temperature, wind, date, forecast
     */
    constructor() {
        this.temperature = ''
        this.wind = ''
        this.date = Date.now()
//      this.forecast = []       
    }

     async setWeather(cityName) {
        await axios.get(weatherUrl + cityName).then((response) => {
            //console.log(response)
            this.temperature = response.data.temperature
                //console.log(response.data.temperature)
            this.wind = response.data.wind
                //console.log(response.data.wind)
        }).catch((error) => { return error.message })
    }

    async setForecast(cityName){
        await axios.get(weatherUrl + cityName).then((response) => {
            this.forecast = response.data.forecast          
// для других консолей (this.forecast = response.data.forecast), в консоли VS code информация не отображалась, поэтому переделала на отображение по дням 
//           this.forecast1 = response.data.forecast [0]
//           this.forecast2 = response.data.forecast [1]
//           this.forecast3 = response.data.forecast [2]

        }).catch((error) => {return error.message})
    }   


}

module.exports = { Weather }


