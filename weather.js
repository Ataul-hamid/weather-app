const searchWeather = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);


    const apiKey = "appid=7dbd58ff9e6c14b6e88afc4427d1b4a9"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
}


const display = data => {

    console.log(data);

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    const div = document.createElement('div');
    div.classList.add('col');


    div.innerHTML = `
                             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt=""><br>
                             ${data.sys.country}
                            ${data.name}<br>
                            ${data.main.temp.toPrecision(2) - 273} &#176C<br>
                            ${data.weather[0].main}<br>
                            ${data.weather[0].description}<br>
                            wind-speed: ${data.wind.speed}
                          
                            
 
    `;
    searchResult.appendChild(div);


}