import { Search } from '../containers/Search'
import { WeatherCardsContainer } from '../containers/WeatherCardsContainer'
import { WeatherProvider } from '../context/WeatherContext'

function App() {
	return (
		<WeatherProvider>
			<h1 className="bg-red-200 text-center">Weather View</h1>
			<Search />
			<WeatherCardsContainer />
		</WeatherProvider>
	)
}

export { App }
