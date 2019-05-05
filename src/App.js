import React, { Component } from 'react';
import { WeatherNow } from "./components/weather-now/WeatherNow.js"

// import axios from 'axios';

const name = "london";
const Api_Key = "00a0da177d20c57bd3a0bac393cea160";
const format = "units=metric";
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${Api_Key}&${format}`;//Сборний УРЛ

// fetch(URL)
//     .then((res) => res.json())
//     .then((body) => console.log(body));

class App extends Component {

  state = {
    data: {}
  }
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



  componentDidMount() {
    // const { data } = this.state;
    fetch(URL)
      .then(res => res.json())
      .then(result => this.setData(result))
      .catch(error => error)
  }
  setData = (result) => {
    this.setState({
      data:result.main
    })
    console.log(this.state.data)
  }
  
  
  render () {
    const {data} = this.state;
    

    return (
      <div className="list_father">
        < WeatherNow data={data} />
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