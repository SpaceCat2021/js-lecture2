const { City } = require('./City.js');

class Country {
    cities = [];

    constructor(name) {
        this.name = name;
    }

    addNewCity(city) {
        if (city instanceof City)
            this.cities.push(city);
    }

    deleteCity(name) {
        let index = this.cities.findIndex(c => c.name == name);
        if (index >= 0)
            this.cities.splice(index, 1);
    }

}

module.exports = { Country }