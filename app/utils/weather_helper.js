var Axios = require('axios');

var WeatherHelper = {
  getWeeksWeather: function(location){
      return Axios.get('http://api.openweathermap.org/data/2.5/forecast/city?q=San+Francisco&type=accurate&appid=ac8e13e630554a22e5183873cf019514')

    // return [
    //   {
    //     datetime: '2016-06-29 09:00:00',
    //     temp: 297.711,
    //     description: 'scattered clouds'
    //   },
    //   {
    //     datetime: '2016-06-29 10:00:00',
    //     temp: 288.711,
    //     description: 'clear skies'
    //   },
    //   {
    //     datetime: '2016-06-29 11:00:00',
    //     temp: 291.711,
    //     description: 'slightly overcast'
    //   },
    //   {
    //     datetime: '2016-06-29 12:00:00',
    //     temp: 295.711,
    //     description: 'thunder clouds'
    //   }
    // ]
  }
}

module.exports = WeatherHelper;
