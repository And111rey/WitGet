import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));



// const url1 = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=00a0da177d20c57bd3a0bac393cea160&units=metric';//проверенный УРЛ


// const name = "London";
// const Api_Key = "00a0da177d20c57bd3a0bac393cea160";
// const format = "units=metric";
// const URL = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${Api_Key}&${format}`;//Сборний УРЛ


// fetch(URL)
//     .then((res) => res.json())
//     .then((body) => console.log(body.name))
