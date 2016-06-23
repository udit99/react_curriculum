var React = require('react');


var LocationInput = function(props){
  return (
    <div id='location_input'>
      <form id='location_form'>
        <button id='submit_location'>Get Weather</button>
        <input type='text' id='location'></input>
      </form>
    </div>
  )
}

module.exports = LocationInput;
