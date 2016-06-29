var React = require('react')

var WeatherCollection = function(props){
  weather_record_tds = props.weatherInfo.map(function(weatherRecord){
    return <tr>
             <td>{weatherRecord['datetime']}</td>
             <td>{(Math.round((weatherRecord['temp'] * 1.8 - 459.67)*100))/100}</td>
             <td>{weatherRecord['description']}</td>
           </tr>
  })
  return (
    <table>
      <tr>
        <th>DateTime</th>
        <th>Temperature</th>
        <th>Description</th>
      </tr>
      {weather_record_tds}
    </table>
  )
}

module.exports = WeatherCollection;
