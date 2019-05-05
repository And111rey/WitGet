import React from 'react';
import { Button } from "./button/button.js";
import { Search } from "./searchField/search.js";
import { WeatherList } from "./WeatherList/WeatherList.js"
import "./WeatherNow.css";


const  WeatherNow = ({data}) => {
    return (
        <div className = "mainInThisPart">
            <h1>Weather now </h1>
            <div >
                < Search />
                < Button />     
            </div>
            < WeatherList data={data} />
            
        </div>
    );
};

export { WeatherNow }