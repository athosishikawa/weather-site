import {React, useEffect} from 'react';
import lupa from '../assets/lupa.png';

const SearchBar = ({location, setLocation, inputRef, fetchWeatherData, setLastSearchedLocation, error}) => {
    const locationSearch = async (event) => {
        if (event.key === 'Enter') {
            if(location){

                const success = await fetchWeatherData(location);
                
                if(success){
                    setLastSearchedLocation(location) ;
                    console.log("TESTE LOCATE",location);
                }
                else {
                    console.log("Erro encontrado, lastSearchedLocation não será atualizado");
                }
                    
                setLocation('');
            }
       
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