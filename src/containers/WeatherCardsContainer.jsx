import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { WeatherCard } from '../components/WeatherCard'

export function WeatherCardsContainer() {
	const { citiesStorage } = useContext(WeatherContext)
	if (citiesStorage === null) return
	return (
		<>
			{citiesStorage.map((city) => (
				<WeatherCard key={city.id} {...city} />
			))}
		</>
	)
}
