// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  //1st step: state declare
  const [countries, setCountries] = useState([]);
  //2nd step: useEffect eikne api k fetch korbo
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
      {
        countries.map(country => <Country name={country.name.common} capital={country.capital} population={country.population}></Country>)
      }
      
    </div>
  )
}
// extra data display function parameter props
function Country(props){
  return (
    <div>
      <h2>Country Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
      <p>Population: {props.population}</p>
    </div>
  )
}
export default App;
