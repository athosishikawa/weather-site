import {React, useEffect, useState} from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import weatherAnimations from '../assets/animations.json';

const WeatherAnimation = ({weatherId, data, unit, setBackgroundColor}) => {


    const animationLink = getWeatherAnimation(weatherId); 

    
    useEffect(() => {
        if (data.weather) {
            const currentTemp = unit === 'metric' ? data.main.temp : (data.main.temp - 32) * (5 / 9);
            setBackgroundColor(determineBackgroundColor(currentTemp));
        }
    }, [data.weather, data.main]);
    

    return (
        <div className='lottie-container'>
            <DotLottieReact
                src={animationLink}
                loop
                autoplay
            />
        </div>
    );
};


const getWeatherAnimation = (weatherId) => {
    const animationLink = 
            weatherId >= 200 && weatherId < 300 || weatherId === 800 ? weatherAnimations[0].link :
            weatherId >= 300 && weatherId < 600 ? weatherAnimations[1].link :
            weatherId >= 600 && weatherId < 800 ? weatherAnimations[3].link :
            weatherAnimations[2].link;
    return animationLink;
};

const determineBackgroundColor = (temp) => {
    if (temp < 15) {
        return 'linear-gradient(to bottom, rgba(0, 0, 139, 0.7), rgba(0, 0, 255, 0.4))'; // Azul escuro para frio
    } else if (temp >= 15 && temp < 25) {
        return 'linear-gradient(to bottom, rgba(70, 130, 230, 0.8), rgba(135, 206, 250, 0.5))'; // Azul médio para temperatura amena
    } else if (temp >= 25 && temp < 32) {
        return 'linear-gradient(to bottom, rgba(6, 93, 255, 0.7), rgba(22, 220, 255, 0.1))'; // Azul claro para quente
    } else {
        return 'linear-gradient(to bottom, rgba(255, 165, 0, 0.8), rgba(255, 140, 0, 0.5))'; // Laranja para muito quente
    }
};

export default WeatherAnimation