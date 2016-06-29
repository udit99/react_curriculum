var Axios = require('axios');

var WeatherHelper = {
  getWeeksWeather: function(location){
      var city = encodeURIComponent(location);
      return Axios.get('http://api.openweathermap.org/data/2.5/forecast/city?q=' + city + '&type=accurate&appid=ac8e13e630554a22e5183873cf019514')

  }
}

module.exports = WeatherHelper;
