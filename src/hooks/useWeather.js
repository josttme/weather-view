import { useState } from 'react'

export function useWeather() {
	const [selectedCities, setSelectedCities] = useState([])

	// Define funciones para agregar, eliminar ciudades y cards
	const selectCity = (city) => {
		// Lógica para agregar una ciudad a selectedCities
		setSelectedCities([...selectedCities, city])
	}
	return { selectedCities, selectCity }
}
