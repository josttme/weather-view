import { Search } from '../containers/Search'
import { WeatherProvider } from '../context/WeatherContext'

function App() {
	return (
		<WeatherProvider>
			<h1 className="bg-red-200 text-center">Weather View</h1>
			<Search />
		</WeatherProvider>
	)
}

export { App }
