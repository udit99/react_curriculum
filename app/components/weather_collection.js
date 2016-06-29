var React = require('react')
var Weather = require('./weather')

var WeatherCollection = function(props){
  weather_record_tds = props.weatherInfo.map(function(weatherRecord){
    return <Weather
            date={weatherRecord['dt_txt']}
            temperature={(Math.round((weatherRecord['main']['temp'] * 1.8 - 459.67)*100))/100}
            description={weatherRecord['weather'][0]['description']} />
  })
  return (
    <table>
      <tbody>
        <tr>
          <th>DateTime</th>
          <th>Temperature</th>
          <th>Description</th>
        </tr>
        {weather_record_tds}
      </tbody>
    </table>
  )
}

module.exports = WeatherCollection;
