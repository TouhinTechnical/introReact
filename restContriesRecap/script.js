const loadApiCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayConutries(data));
}

const displayConutries = countries => {
    // console.log(countries[0]);
    const allCountriesHTML = countries.map(country => getCountriesHTML(country));
    // console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');

}

const getCountriesHTML = ({flags, name, capital, population, region, languages}) => {
    return `
        <div class="country">
            <img src="${flags.png}">
            <h2>${name.common}</h2>
            <h4>${capital}</h4>
            <p>${population}</p>
            <h5>${region}</h5>
            <span>${languages ? languages.spa: "Not Availiable"}</span>
        </div>
    `
}

loadApiCountries();