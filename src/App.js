import React, { Component } from 'react';
import { WeatherNow } from "./components/weather-now/WeatherNow.js"

class App extends Component {


  state = {
    data: {},
    town: "london"
  }

  updateTown = (newTown) => {
    this.getData()
    this.setState ({
      town:newTown 
    })
  }



  getData = () => {
    let URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.town}&appid=00a0da177d20c57bd3a0bac393cea160&units=metric`;//
    
    fetch(URL)
      .then(res => res.json())
      .then(result => this.setState({data:result.main}))
      .catch(error => error)
  }
   
  
  render () {
    const {data} = this.state;
    

    return (
      <div className="list_father">
        < WeatherNow  data={data} updateTown={this.updateTown} />
        <h2>{this. state.town}</h2>
      </div>
    );
  }
}

export { App };