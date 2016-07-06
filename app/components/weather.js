var React = require('react')

var Weather = function(props){
    return <tr>
             <td><div onClick={props.onDateClick}>{props.date}</div></td>
             <td>{props.temperature}</td>
             <td>{props.description}</td>
           </tr>
}

module.exports = Weather;
