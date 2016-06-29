var React = require('react')

var WeatherCollection = function(props){
  weather_record_tds = props.weatherInfo.map(function(weatherRecord){
    debugger;
    return <tr>
             <td>{weatherRecord['dt_txt']}</td>
             <td>{(Math.round((weatherRecord['main']['temp'] * 1.8 - 459.67)*100))/100}</td>
             <td>{weatherRecord['weather'][0]['description']}</td>
           </tr>
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
