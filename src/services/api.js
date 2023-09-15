const API_URL = (cityName) =>
	`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`
const API_BASE = (lat, long) =>
	`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&current_weather=true&timeformat=unixtime&timezone=auto`

function mappedCities(city) {
	return {
		id: city.id,
		name: city.name,
		latitude: city.latitude,
		longitude: city.longitude,
		/* elevation: city.elevation,
			feature_code: city.feature_code, */
		countryCode: city.country_code,
		/* 	admin1_id: city.admin1_id,
			timezone: city.timezone,
			population: city.population,
			country_id: city.country_id, */
		country: city.country,
		admin1: city.admin1
	}
}
async function fetchCity({ searchTerm }) {
	// Validación de `searchTerm`
	if (!searchTerm || searchTerm.trim() === '') {
		return null
	}

	try {
		const res = await fetch(API_URL(searchTerm))

		if (!res.ok) {
			throw new Error(`Error fetching data: ${res.status} ${res.statusText}`)
		}

		const data = await res.json()

		// Manejo de errores específicos de la API (si corresponde)
		if (data.error) {
			throw new Error(`API error: ${data.error}`)
		}
		const cities = data?.results
			? data.results.map((city) => mappedCities(city))
			: []

		return { cities }
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	}
}

async function getWeatherCityByLatLong(latitude, longitude) {
	const res = await fetch(API_BASE(latitude, longitude))
	const data = await res.json()
	return { data }
}

export { fetchCity, getWeatherCityByLatLong }
