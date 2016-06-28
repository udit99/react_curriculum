var WeatherHelper = {
  getWeeksWeather: function(location){
    return [
      {
        datetime: '2016-06-29 12:00:00',
        temp: 297.711,
        description: 'scattered clouds'
      },
      {
        datetime: '2016-06-29 12:00:00',
        temp: 288.711,
        description: 'clear skies'
      },
      {
        datetime: '2016-06-29 12:00:00',
        temp: 291.711,
        description: 'slightly overcast'
      },
      {
        datetime: '2016-06-29 12:00:00',
        temp: 295.711,
        description: 'thunder clouds'
      }
    ]
  }
}

module.exports = WeatherHelper;
