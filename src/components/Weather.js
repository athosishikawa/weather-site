import React from 'react'; 
import '../styles/Weather.css'

const Weather = () => {
    return(
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' placeholder='Pesquise em um local'/>

            </div>

            <div className='container'>
                <div className = 'header'>
                    <div className='location'>
                        <p>DALLAS</p>
                    </div>
                    <div className='temperature'>
                        <h1>60 F</h1>
                    </div>

                    <div className='description'>
                        <p>Cloudy</p>
                    </div>
                </div>

                <div className='footer'>
                    <div className='sensation'>
                        65 F
                        <p>Sensação Térmica</p>
                    </div>
                    <div className='humidity'>
                        40%
                        <p>Humidade</p>
                    </div>
                    <div className='wind'>
                        12MPH
                        <p>Vento</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Weather