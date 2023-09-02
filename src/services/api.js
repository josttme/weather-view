/* const API_URL = (cityName) =>
	`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json` */
const API_URL_2 = '/src/services/api.json'

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
	/* 	if (searchTerm === ' ' || searchTerm === undefined) return null
	console.log(searchTerm)
	try {
		const res = await fetch(`${API_URL(searchTerm)}`)
		if (!res.ok) {
			throw new Error(`Error fetching data: ${res.status} ${res.statusText}`)
		}
		const data = await res.json()
		const cities = data?.results?.map((city) => mappedCities(city))
		return { cities }
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	} */
	try {
		const res = await fetch(API_URL_2)
		if (!res.ok) {
			throw new Error('No se pudo cargar el archivo JSON')
		}

		const data = await res.json()
		const cities = data?.results?.map((city) => mappedCities(city))
		return { cities }
	} catch (error) {
		console.error('Error fetching and mapping data:', error)
	}
}

export { fetchCity }
