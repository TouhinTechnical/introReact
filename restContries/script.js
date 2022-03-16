const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayConuntries(data));
}

const displayConuntries = countries => {
    // console.log(countries[0]);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}
// Step 2: 
const getCountryHTML = ({name, flags}) =>{
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `
}
// Original
/* const getCountryHTML = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
} */

// Step 1:
/* const getCountryHTML = country =>{
    // step 1: destructuring diye data load
    // object nam golo k akta veriable modde rakte pari
    const {name, flags} = country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `
} */





loadCountries();