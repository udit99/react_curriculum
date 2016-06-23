var React = require('react');


var LocationInput = function(props){
  return (
    <div id='location_input'>
      <button id='submit_location'>Get Weather</button>
      <input type='text' id='location'></input>
    </div>
  )
}

module.exports = LocationInput;
