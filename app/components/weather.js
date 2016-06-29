var React = require('react')

var Weather = function(props){
    return <tr>
             <td>{props.date}</td>
             <td>{props.temperature}</td>
             <td>{props.description}</td>
           </tr>
}

module.exports = Weather;
