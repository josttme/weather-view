import PropTypes from 'prop-types'
import { useWeather } from '../hooks/useWeather'
export function ItemCity(city) {
	const { selectCity } = useWeather()
	const urlCountryFlag = (countryCode) =>
		`https://open-meteo.com/images/country-flags/${countryCode}.svg`

	const handleClick = () => {
		const cityData = { ...city }
		selectCity(cityData)
	}
	return (
		<div
			className="flex cursor-pointer rounded-lg bg-slate-600 p-1 hover:bg-slate-700"
			onClick={handleClick}
		>
			<img
				className="mx-4 w-12"
				src={urlCountryFlag(city.countryCode)}
				alt={`Bandera de ${city.country}`}
			/>
			<div className="text-lg text-white/80">
				<p>{city.name}</p>
				<p>{city.admin1}</p>
			</div>
		</div>
	)
}

ItemCity.propTypes = {
	id: PropTypes.number,
	countryCode: PropTypes.string,
	country: PropTypes.string,
	name: PropTypes.string,
	admin1: PropTypes.string
}
