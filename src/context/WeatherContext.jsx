import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useWeather } from '../hooks/useWeather'

export const WeatherContext = createContext()

export function WeatherProvider({ children }) {
	const { weatherData, getCityByLatLong } = useWeather()
	const [weatherCards, setWeatherCards] = useState({})

	const selectCity = (city) => {
		getCityByLatLong(city)
	}
	useEffect(() => {
		setWeatherCards(weatherData)
	}, [weatherData])

	useEffect(() => {
		console.log(weatherCards)
	}, [weatherCards])

	/* 	const removeCity = (cityId) => {
		// Lógica para eliminar una ciudad de selectedCities
		const updatedCities = selectedCities.filter((city) => city.id !== cityId)
		setSelectedCities(updatedCities)
	}
 */
	/* 	const addWeatherCard = (weatherData) => {
		// Lógica para agregar una tarjeta de clima a weatherCards
		setWeatherCards([...weatherCards, weatherData])
	} */

	/* const removeWeatherCard = (cardId) => {
		// Lógica para eliminar una tarjeta de clima de weatherCards
		const updatedCards = weatherCards.filter((card) => card.id !== cardId)
		setWeatherCards(updatedCards)
	}
 */
	const valueContext = {
		/* 	selectedCities, */
		/* 		weatherCards, */
		selectCity
		/* 		removeCity,
		addWeatherCard,
		removeWeatherCard */
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
