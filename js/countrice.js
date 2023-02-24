const loadCountrics = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((x) => x.json())
    .then((y) => displayCountrics(y));
};

const displayCountrics = (countrics) => {
  const containerCountrics = document.getElementById("all-countrics");
  // console.log(countrics);
  // for(const country of countrics){
  //     console.log(country);
  // }

  countrics.forEach((country) => {
    console.log(country.name.common);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("cauntry");
    countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
        <button onclick="displayCountricsDetails('${
          country.cca2
        }')">Details</button>
        `;

    containerCountrics.appendChild(countryDiv);
  });
};

const displayCountricsDetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  //   console.log(url);
  fetch(url)
    .then(x => x.json())
    .then(data => showCountryDetail(data[0]));
};


const showCountryDetail = country =>{
    console.log(country)
    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <img src="${country.flags.png}">
    `
}

loadCountrics();
