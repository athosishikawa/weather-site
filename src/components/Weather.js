import React from 'react'; 
import '../styles/Weather.css'

const Weather = () => {
    return(
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' placeholder='Pesquise em um local'/>
                
            </div>
        </div>
    )
}

export default Weather