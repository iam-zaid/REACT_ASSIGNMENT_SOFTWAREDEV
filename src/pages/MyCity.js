import React from "react";
import img from '../images/mumbai.jpg';
import mild from '../images/mild.png';
import cold from '../images/cold.png';
import sunny from '../images/sunny.png'
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?lat=19.0760&lon=72.8777&appid=2dd4f7656d66a8ff5ac6d70242d6690e"

// key for api: 0f9af012fee5473450bc5d53775326f0
const MyCity =()=>{
    const [temperature,setTemperature] = useState("");
    const [typeofweather,setTypeofweather] =useState("");
    const [isFaranheit,setisFaranheit] =useState(false);
    const [tempinfaranheit,settempinfaranheit] =useState("");
    //callling API t o get temperature data 
    const getTemperatureFromAPI = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        const parsedTemperature = parseFloat(data.main.temp- 273.15).toFixed(2);    // storing the value that can be used later
        setTemperature(parsedTemperature);
        settempinfaranheit(((parsedTemperature * 1.8) + 32 ).toFixed(2))
        if(parsedTemperature<10.00){
            setTypeofweather(cold);
        }else if(parsedTemperature >10.00 && parsedTemperature < 20.00){
            setTypeofweather(mild);
        }else{
            setTypeofweather(sunny);
        }
      }

    useEffect(()=> {
        getTemperatureFromAPI();
    },[]);

    //simplifying code by using only one method
    const convertTemperature=()=>{
        setisFaranheit(!isFaranheit);

    }
    return(
        <div className="container-lg">
            <div>
                <h1>MY HOMETOWN IS MUMBAI CITY</h1>
            </div>
            <img src={img} alt="Mumbai"/>
            <div className="mt-4 imgformat">
                <h3>The current temperature of Mumbai is {isFaranheit?`${tempinfaranheit}°F`:`${temperature}°C`}</h3>
                <img className="img" src={typeofweather} alt="weather type" height={40} width={50}/>
                <button class="btn btn-info" onClick={convertTemperature}>
                    {!isFaranheit?'Change to °F':'Change to °C'}
                </button>
            
            </div>
            <a style={{marginTop:"20px"}} class="btn btn-primary disabled" role="button" aria-disabled="false" href="my-city">
                My City
            </a>
            <a style ={{marginLeft:'20px',marginTop:"20px"}} class="btn btn-primary" role="button" aria-disabled="false" href="/">
                About Me
            </a>
            <p></p>
        </div>
    );
}
export default MyCity;