const { Country } = require('./Country.js');
const { City } = require('./City.js');


var country = new Country('Canada');  
country.addNewCity(new City('Montreal'));  
country.addNewCity(new City('Calgary'));
country.addNewCity(new City('Ottawa'));
country.addNewCity(new City('Calgary'));
country.addNewCity(new City('Winnipeg'));
country.addNewCity(new City('Vancouver'));
country.addNewCity(new City('Hamilton'));
country.addNewCity(new City('Halifax'));
country.addNewCity(new City('Fredericton'));
country.addNewCity(new City('Charlottetown'));
country.addNewCity(new City('Regina'));
country.addNewCity(new City('Iqaluit'));                      


country.cities.forEach(city => {

    city.setWeather().then(() => {console.log(city) }).catch((error) => { console.log(error) });  // при необходимости выводить на экран данные погоды для каждого города установите: console.log(city)  если нет то console.log()
    city.setForecast().then(() => {console.log(city) }).catch((error) => { console.log(error) });  // при необходимости выводить на экран данные погоды для каждого города установите: console.log(city)    если нет то console.log() 

});

setTimeout(sort, 5000);

function sort() {
    console.log("Sorted Cities by temperature\n");
    country.cities.sort((t1, t2) => parseInt(t1.weather.temperature) - parseInt(t2.weather.temperature));   //
    //country.cities.sort((t1, t2) => parseInt(t2.weather.temperature) - parseInt(t1.weather.temperature));  //
    country.cities.forEach(city => {
        console.log(`city: ${city.name}, temperature: ${city.weather.temperature}`);  //  console.log(`city: ${city.name}, temperature: ${city.weather.temperature}, wind: ${city.weather.wind}, date: ${city.weather.date}`); 

    });
}


