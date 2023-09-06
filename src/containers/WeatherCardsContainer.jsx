import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { WeatherCard } from '../components/WeatherCard'

export function WeatherCardsContainer() {
	const { citiesStorage } = useContext(WeatherContext)
	console.log(citiesStorage)
	if (citiesStorage === null) return
	return (
		<section className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-4 bg-cyan-800 p-4">
			{citiesStorage.map((city) => (
				<WeatherCard key={city.id} {...city} />
			))}
		</section>
	)
}
