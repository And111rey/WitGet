import React from "react";
import "./WeatherList.css";


const WeatherList = ({data}) => {

 const {temp, temp_max, temp_min} = data

 

    return(
        <div className = "list">
          
<table class="table table-hover">
    
    <tr className="table-success">
      <th scope="row">Current TEMP:</th>
      <td>{temp}</td>
    </tr>
    <tr className="table-info">
      <th>MAX TEMP:</th>
      <td>{temp_max}</td> 
    </tr>
    <tr className="table-info">
      <th>MIN TEMP:</th>
      <td>{temp_min}</td>  
    </tr>
    <tr className="table-info">
      <th>DESCRIPTION:</th>
      <td>Cloudy</td> 
    </tr>
</table> 
        </div>
    );
}

export { WeatherList }