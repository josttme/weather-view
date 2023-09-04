import { useState } from 'react'
import { getWeatherCityByLatLong } from '../services/api'

export function useWeather() {
	const [weatherData, setWeatherData] = useState(null)
	const getCityByLatLong = async ({ latitude, longitude }) => {
		if (latitude === undefined || longitude === undefined) return null
		try {
			const { data, city, country } = await getWeatherCityByLatLong({
				latitude,
				longitude
			})
			const currentWeather = parseCurrentWeather(data, city, country)
			setWeatherData(currentWeather)
		} catch (error) {
			console.error('Error al obtener datos climáticos:', error)
			// Puedes manejar el error de manera adecuada, como mostrar un mensaje al usuario.
		}
	}
	return { getCityByLatLong, weatherData }
}

function parseCurrentWeather(
	{ current_weather: currentWeather, daily, hourly, timezone },
	city,
	country
) {
	const {
		temperature: currentTemp,
		windspeed: windSpeed,
		weathercode: iconCode,
		time: currentTime
	} = currentWeather
	const {
		temperature_2m_max: [maxTemp],
		temperature_2m_min: [minTemp],
		precipitation_sum: [precip],
		sunrise: [sunrise],
		sunset: [sunset]
	} = daily
	const { time, relativehumidity_2m: relativehumidity2m } = hourly
	const humidity = getCurrentTimeHumidity(currentTime, time, relativehumidity2m)
	return {
		city,
		country,
		currentTime,
		currentTemp: Math.round(currentTemp),
		maxTemp: Math.round(maxTemp),
		minTemp: Math.round(minTemp),
		windSpeed: Math.round(windSpeed),
		precip: Math.round(precip * 100) / 100,
		humidity,
		iconCode,
		timezone,
		sunrise,
		sunset
	}
}
function getCurrentTimeHumidity(currentTime, hourlyTime, humidity) {
	const positionTime = hourlyTime.findIndex((time) => time === currentTime)
	return humidity[positionTime]
}
