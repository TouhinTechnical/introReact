import React from 'react';
import './Country.css';
import { useEffect, useState } from 'react';
const LoadCountries = () => {
    //1st step: state declare
    const [countries, setCountries] = useState([]);
    //2nd step: useEffect eikane api k fetch korbo
    useEffect( () => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    }, []);
    return(
      <div>
        <h1>Visiting Every country of the world</h1>
        <h3>Available Countries: {countries.length}</h3>
        {/* kono data k dyanamic vabe load korar jonno / (.map() function use korbo)*/}
        <div className='mainCountry'>
            {
            countries.map(country => <Country 
            country = {country}
            key = {country.cca3}>
                
            </Country>)
            }
        </div>
        
      </div>
    )
}
// extra data display function parameter props
function Country(props){
    // console.log(props.country);
    const {name,capital,population,flags} = props.country
    return (
      <div className='countryDetails'>
        <img src={flags.png} alt="" />
        <h2>Country Name: {name.common}</h2>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
      </div>
    )
}
export default LoadCountries;

/* import React from 'react';

const Country = () => {
    return (
        <div>
            
        </div>
    );
};

export default Country; */
