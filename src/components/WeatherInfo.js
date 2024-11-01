import React from "react";

const WeatherInfo =({data, tempUnit}) => {

    return (
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
        </div>
    );

};

export default WeatherInfo;