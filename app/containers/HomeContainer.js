var React = require('react');
var LocationComponent = require('../components/location_input')

var HomeContainer = React.createClass({
  getInitialState: function(){
    return {
      testValue: 2
    }
  },
  componentDidMount: function(){
    this.setState({
      testValue: 1
    })

  },
  render: function(){
    debugger;
    return (
      <div id='home'>
        <h1>Hello Worldzzzzzzzz</h1>
        <LocationComponent foo={this.state.testValue}/>
      </div>
    )
  }
});

module.exports = HomeContainer;
