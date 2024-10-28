import React, { useState, useEffect } from 'react'; 
import '../styles/Weather.css'
import Toggle from '../components/Toggle';
import axios from 'axios'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const APIKEY = '99fbd3069d524dddcd584bc06d4e3345'
const Weather = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState(''); 
    const [unit, setUnit] = useState('metric');
    const [tempUnit, setTempUnit] = useState('°C');
    const [lastSearchedLocation, setLastSearchedLocation] = useState('');
    const [velocityUnit, setVelocityUnit] = useState('km/h');
    const [language, setLanguage] = useState('pt_br')

    const fetchWeatherData = (loc) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=${unit}&lang=${language}&appid=${APIKEY}`;
        
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
        });
    };

    useEffect(() => {
        if (lastSearchedLocation) {
            fetchWeatherData(lastSearchedLocation);
        } else {
            fetchWeatherData('Londrina'); 
        }
    }, [lastSearchedLocation, unit]); 


    const locationSearch = (event) => {
        if (event.key === 'Enter') {
            fetchWeatherData(location);
            setLastSearchedLocation(location);
            setLocation('');
        }
    };

    const handleTempUnitChange = (isCelsius) => {
        setTempUnit(isCelsius ? '°C' : '°F');
        setUnit(isCelsius ? 'metric' : 'imperial');
        setVelocityUnit(isCelsius ? 'km/h' : 'mph');
        setLanguage(isCelsius ? 'pt_br' : 'en');

        console.log(isCelsius)
        
    };

    return (
        <div className='weather'>
            <Toggle onChange={handleTempUnitChange} />

            <div className='search-bar'>
                <input 
                    value={location} 
                    onChange={event => setLocation(event.target.value)} 
                    onKeyDown={locationSearch} 
                    type='text' 
                    placeholder='Pesquise em um local'
                />
            </div>

            <div className='container'>
                <div className='header'>
                    <div className='location'>
                        <p>{data.name}</p>
                    </div>
                    <div className='temperature'>
                        {data.main ? <h1>{data.main.temp.toFixed()}{tempUnit}</h1> : null}
                    </div>
                    <div className='description'>
                       {data.weather ? <p>{data.weather[0].description}</p> : null}
                    </div>
                </div>
                <DotLottieReact
                    src="https://lottie.host/5dde1824-d9e0-45bf-90ca-45e272a75392/OyH2LOTmKa.lottie"
                    loop
                    autoplay
                />
     
                {data.name &&
                    <div className='footer'>
                        <div className='sensation'>
                            {data.main ? data.main.feels_like.toFixed() : null} {tempUnit}
                            <p>Sensação Térmica</p>
                        </div>
                        <div className='humidity'>
                            {data.main ? data.main.humidity : null}%
                            <p>Humidade</p>
                        </div>
                        <div className='wind'>
                            {data.wind ? data.wind.speed.toFixed() : null} {velocityUnit}
                            <p>Vento</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Weather;