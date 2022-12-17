const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd633a8340cmsh2ebbef989852085p1a9e55jsn933afed8d3ff',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			//wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
			sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (event) => {
	event.preventDefault();
	getWeather(city.value);
	cityName.innerHTML = city.value;
})

getWeather("Delhi");


const Weather = (city) => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)

			document.getElementById("cloud" + city).innerHTML = response.cloud_pct
			document.getElementById("temp" + city).innerHTML = response.temp
			document.getElementById("feels" + city) .innerHTML = response.feels_like
			document.getElementById('humidity' + city).innerHTML = response.humidity

			document.getElementById('min' + city).innerHTML = response.min_temp
			document.getElementById('max' + city).innerHTML = response.max_temp
			document.getElementById('wind' + city).innerHTML = response.wind_speed

			//wind_degrees.innerHTML = response.wind_degrees
			document.getElementById('sunrise' + city).innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
			document.getElementById('sunset' + city).innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
		})
		.catch(err => console.error(err));
}

const places = ["Beijing", "Seattle", "Dubai", "Bangalore"];
for(const place of places) {
	Weather(place)
}






