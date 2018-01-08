import React, { Component } from 'react';
import axios from 'axios';
import ForecastItem from './ForecastItem';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '', url: '', forecast: '', showHeading: false};

    this.handleOption = this.handleOption.bind(this);
  }

  handleOption(e) {

    if(e.target.value !== '') {
      const city = e.target.value;
      const url = `https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u="c"`;

      this.setState({ city: city, url: url, showHeading: true}, () => {
        axios.get(this.state.url)
          .then((response) => {

            const weatherResponse = JSON.parse(response.request.responseText);
            const forecastDetails = weatherResponse.query.results.channel.item.forecast;
            this.setState({ forecast: forecastDetails });

          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <h3>by Angela Wu</h3>
        <select onChange={this.handleOption}>
          <option value="">Select a city</option>
          <option value="Vancouver, BC">Vancouver</option>
          <option value="Kelowna, BC">Kelowna</option>
          <option value="Toronto, ON">Toronto</option>
          <option value="Quebec, QC">Quebec</option>
          <option value="Halifax, NS">Halifax</option>
          <option value="Tokyo, JP">Tokyo</option>
          <option value="Taipei, TW">Taipei</option>
        </select>

        {this.state.showHeading && (
          <div id="weather-forecast">
            <h2 id="forecast-heading">Weather Forecast <span id="city-heading">{this.state.city}</span></h2>
            {Object.values(this.state.forecast).map((item) => {
              return(
                <ForecastItem
                  key={item.date}
                  day={item.day}
                  date={item.date}
                  high={item.high}
                  low={item.low}
                  text={item.text}
                  code={item.code}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
