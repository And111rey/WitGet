import React from 'react';

import { WeatherList } from "./WeatherList/WeatherList.js"
import "./WeatherNow.css";


const  WeatherNow = ({data, updateTown}) => {

    let newTown = React.createRef()

    let addTown =() => {
        let text = newTown.current.value ;
        updateTown(text);
    }

    return (
        <div className = "mainInThisPart">
            <h1>Weather now </h1>
            <div >
                <input ref={newTown} className="form-control mr-sm-2" placeholder="Город" />  
                <button onClick={ addTown } className="btn btn-primary">Show</button>    
            </div>
            < WeatherList data={data} />
            
        </div>
    );
};

export { WeatherNow }