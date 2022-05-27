const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector(`#image`)
const icon = document.querySelector(`#icon`);

const updateUI = (data) => {
    // console.log(data)
    
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructring
    const {cityDets, weather} = data
    // console.log(weather)
    
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    //update day/night icon and image 

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);


    // let imgSrc = null;
    //     if(weather.IsDayTime){
    //         imgSrc = `img/day.svg`
    //     }else {
    //         imgSrc = `img/night.svg`
    //     }
    //     time.setAttribute(`src`, imgSrc)

    
    //ternary operator    
    let imgSrc = weather.IsDayTime ? `img/day.svg` : `img/night.svg`;
    time.setAttribute(`src`, imgSrc)
    //remove d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    

    return { cityDets, weather };
}



cityForm.addEventListener('submit', e => {
    //prevent default
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => updateUI(err))

        //update local storage

        localStorage.setItem('location', city)
})

    if(localStorage.getItem('location')){
        updateCity(localStorage.getItem('location'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    }