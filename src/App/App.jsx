import { Search } from '../containers/Search'
import { WeatherCardsContainer } from '../containers/WeatherCardsContainer'
import { WeatherProvider } from '../context/WeatherContext'

function App() {
	return (
		<WeatherProvider>
			<h1 className="my-8 text-center text-4xl font-semibold text-white/80">
				Weather View
			</h1>
			<Search />
			<WeatherCardsContainer />
		</WeatherProvider>
	)
}

export { App }
