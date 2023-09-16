import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

export function useRemoveCard() {
	const { citiesStorage, setCityStorage } = useContext(WeatherContext)

	const removeCard = (idCard) => {
		// Filtra los elementos en citiesStorage para eliminar el que tenga el ID deseado
		const updatedCities = citiesStorage.filter((city) => city.id !== idCard)

		// Actualiza Local Storage con los datos actualizados
		setCityStorage(updatedCities)
	}

	return { removeCard }
}
