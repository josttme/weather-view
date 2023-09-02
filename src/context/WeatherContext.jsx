import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const WeatherContext = createContext()

export function WeatherProvider({ children }) {
	const [selectedCities, setSelectedCities] = useState([])
	const [weatherCards, setWeatherCards] = useState([])

	// Define funciones para agregar, eliminar ciudades y cards
	const selectCity = (city) => {
		// Lógica para agregar una ciudad a selectedCities
		setSelectedCities([...selectedCities, city])
	}

	const removeCity = (cityId) => {
		// Lógica para eliminar una ciudad de selectedCities
		const updatedCities = selectedCities.filter((city) => city.id !== cityId)
		setSelectedCities(updatedCities)
	}

	const addWeatherCard = (weatherData) => {
		// Lógica para agregar una tarjeta de clima a weatherCards
		setWeatherCards([...weatherCards, weatherData])
	}

	const removeWeatherCard = (cardId) => {
		// Lógica para eliminar una tarjeta de clima de weatherCards
		const updatedCards = weatherCards.filter((card) => card.id !== cardId)
		setWeatherCards(updatedCards)
	}

	const valueContext = {
		selectedCities,
		weatherCards,
		selectCity,
		removeCity,
		addWeatherCard,
		removeWeatherCard
	}

	return (
		<WeatherContext.Provider value={valueContext}>
			{children}
		</WeatherContext.Provider>
	)
}

WeatherProvider.propTypes = {
	children: PropTypes.node.isRequired
}
