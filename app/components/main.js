var React = require('react');


var Main = React.createClass({
    render: function(props){
      (
        <div className='main-container'>
          {this.props.children}
        </div>
      )
    }
  }
);
module.exports = Main;
