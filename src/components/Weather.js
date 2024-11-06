import React, { useState, useEffect, useRef} from 'react'; 
import '../styles/Weather.css'
import Toggle from '../components/Toggle';
import SearchBar from '../components/SearchBar';
import WeatherInfo from '../components/WeatherInfo';
import WeatherAnimation from '../components/WeatherAnimation';
import WeatherFooter from '../components/WeatherFooter';
import Error from '../components/Error';
import {motion, AnimatePresence} from 'framer-motion';


import axios from 'axios'

const APIKEY = 'COLOQUE SUA CHAVE API AQUI'

const Weather = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState(''); 
    const [unit, setUnit] = useState('metric');
    const [tempUnit, setTempUnit] = useState('°C');
    const [lastSearchedLocation, setLastSearchedLocation] = useState('');
    const [velocityUnit, setVelocityUnit] = useState('km/h');
    const [language, setLanguage] = useState('pt_br');
    const [backgroundColor, setBackgroundColor] = useState(''); 
    const [isSelected, setIsSelected] = useState(false);
    const [error, setError] = useState();

    const inputRef = useRef(null);


    const fetchWeatherData = async (loc) => {

        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=${unit}&lang=${language}&appid=${APIKEY}`;
        console.log("FIZ UMA REQUISIÇÃO com", loc)
        try {
            const response = await axios.get(url);
            setData(response.data);
            setError(null); 
            return true;
        } catch (error) {
            console.error("Erro ao buscar dados de clima:", error);
            setError(error); 
            return false;
        }
    };

    useEffect(() => {
        if (lastSearchedLocation) {
            fetchWeatherData(lastSearchedLocation);
        } else {
            fetchWeatherData('Londrina');
        }
    }, [unit]); 

    
    const handleTempUnitChange = (isCelsius) => {

        setTempUnit(isCelsius ? '°C' : '°F');
        setUnit(isCelsius ? 'metric' : 'imperial');
        setVelocityUnit(isCelsius ? 'km/h' : 'mph');
        setLanguage(isCelsius ? 'pt_br' : 'en');

        console.log(isCelsius)
        
    };

    return (
        <div className='weather' style={{ backgroundImage: backgroundColor }}>
            <Toggle onChange={handleTempUnitChange} />

            
            <SearchBar
                location={location}
                setLocation={setLocation}
                inputRef={inputRef}
                fetchWeatherData={fetchWeatherData}
                setLastSearchedLocation={setLastSearchedLocation}
                error={error}
               
 
            />

            <AnimatePresence>
                {error && (
                    <Error error={error} setError={setError} />
                )}
            </AnimatePresence>

            <motion.div  
                layout='position'
                className='container'
            >
                <WeatherInfo data={data} tempUnit={tempUnit} />

                <WeatherAnimation 
                    weatherId={data.weather?.[0]?.id} 
                    data={data}
                    unit={unit}
                    setBackgroundColor={setBackgroundColor}
                />
                <WeatherFooter
                    data={data}
                    tempUnit={tempUnit}
                    velocityUnit={velocityUnit}
                    isSelected={isSelected}
                    setIsSelected={setIsSelected}
                />
     

            </motion.div >
        </div>
        
    );
};

export default Weather;