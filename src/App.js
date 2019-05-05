import React, { Component } from 'react';
import { WeatherNow } from "./components/weather-now/WeatherNow.js"

// import axios from 'axios';

// const name = "london";
// const Api_Key = "00a0da177d20c57bd3a0bac393cea160";
// const format = "units=metric";
// const URL = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${Api_Key}&${format}`;//Сборний УРЛ

// const URL = `http://api.openweathermap.org/data/2.5/weather?q=london&appid=00a0da177d20c57bd3a0bac393cea160&units=metric`;//

class App extends Component {

  // state = {
  //   data: {},
  //   town: ""
  // }
//////..........with asis.....
  // componentWillMount() {
  //   this.getData();
  // };
  // getData() {
  //   axios.get(URL)
  //   .then(response => {
  //     this.setState({data: response.data.main}, () => {
  //       console.log(this.state.data);
  //     })
  //   })
  // }

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
   
    
  
  // setData = (result) => {
  //   this.setState({
  //     data:result.main
  //   })
  //   console.log(this.state.data);
    
  // }



////////////////////////////////
//////////////////////////////
  // componentDidMount() {
   
  //   let URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.town}&appid=00a0da177d20c57bd3a0bac393cea160&units=metric`;//
    
  //   fetch(URL)
  //     .then(res => res.json())
  //     .then(result => this.setData(result))
  //     .catch(error => error)
  // }
  // setData = (result) => {
  //   this.setState({
  //     data:result.main
  //   })
  //   console.log(this.state.data);
    
  // }

  
  
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





// const App = () => {
//   return (
//     <div>
//       < WeatherNow />
//     </div>
//   );
// }
export { App };