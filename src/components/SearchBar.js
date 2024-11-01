import {React, useEffect} from 'react';
import lupa from '../assets/lupa.png';

const SearchBar = ({location, setLocation, inputRef, fetchWeatherData, setLastSearchedLocation}) => {
    const locationSearch = (event) => {
        if (event.key === 'Enter') {
            fetchWeatherData(location);
            setLastSearchedLocation(location);
            setLocation('');
        }
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    


    return (
        <div className='search-bar'>
            <input
                ref={inputRef}
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyDown={locationSearch}
                type='text'
                placeholder='Pesquise em um local'
            />
            <img src={lupa} alt="Busca" />
        </div>
    );
};

export default SearchBar;