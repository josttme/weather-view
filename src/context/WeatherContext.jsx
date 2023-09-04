import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const WeatherContext = createContext()

export function WeatherProvider({ children }) {
	const [citiesStorage, setCityStorage] = useLocalStorage('ListWeather')
	const [selectedCities, setSelectedCities] = useState(citiesStorage)

	const selectCity = (city) => {
		setSelectedCities([...selectedCities, city])
	}

	useEffect(() => {
		setCityStorage(selectedCities)
	}, [selectedCities])

	useEffect(() => {
		console.log(citiesStorage)
	}, [])

	const valueContext = {
		selectCity,
		citiesStorage
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
