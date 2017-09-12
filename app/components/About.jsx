var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p className="text-center">This is a weather application built on React. I learned this from the React Udemy Course!</p>
      <p className="text-center">
        Here are some of the tools I've Used:
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This is the Javascript framework used.</li>
        <li><a href="https://openweathermap.org">Open Weather Map</a> - I use Open Weather Map to search for weather data by city name.</li>
      </ul>
    </div>
  );
};

module.exports = About;
