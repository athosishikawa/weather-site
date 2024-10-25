import React, { useState } from 'react'; 
import '../styles/Weather.css'
import axios from 'axios'

const APIKEY = 'COLOQUE SUA CHAVE API AQUI'

const Weather = () => {

    const[data,setData] = useState({})
    const[location, setLocation] = useState('') 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKEY}`


    const locationSearch = (event) => {

        if(event.key == 'Enter'){
            axios.get(url).then((response) => {
                setData((response.data))
                console.log(response.data)
            })
            setLocation('')
        }

    }
    
    return(
        
        <div className='weather'>
            
            <div className='toggle-Container'>
                <div className='toggle-box'>

                </div>

            </div>

            <div className='search-bar'>
                <input 
                value = {location} 
                onChange = {event => setLocation(event.target.value)} 
                onKeyDown={locationSearch} 
                type='text' 
                placeholder='Pesquise em um local'/>

            </div>

            <div className='container'>
                <div className = 'header'>
                    <div className='location'>
                        <p>{data.name}</p>
                    </div>
                    <div className='temperature'>
                        {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
                    </div>

                    <div className='description'>
                       {data.weather? <p>{data.weather[0].description}</p> : null}
                    </div>
                </div>

            {data.name != undefined &&

                <div className='footer'>
                <div className='sensation'>
                    {data.main ? data.main.feels_like.toFixed() : null}
                    <p>Sensação Térmica</p>
                </div>
                <div className='humidity'>
                    {data.main ? data.main.humidity : null}
                    <p>Humidade</p>
                </div>
                <div className='wind'>
                    {data.wind ? data.wind.speed.toFixed() : null}
                    <p>Vento</p>
                </div>

                </div>
            }

            </div>
        </div>
    )
}

export default Weather