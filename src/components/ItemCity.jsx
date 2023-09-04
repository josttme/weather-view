import PropTypes from 'prop-types'
import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

export function ItemCity({
	id,
	country,
	name,
	countryCode,
	admin1,
	latitude,
	longitude
}) {
	const { selectCity } = useContext(WeatherContext)

	const urlCountryFlag = (countryCode) =>
		`https://open-meteo.com/images/country-flags/${countryCode}.svg`

	const handleClick = () => {
		selectCity({ id, country, name, latitude, longitude })
	}
	return (
		<div
			className="flex cursor-pointer rounded-lg bg-slate-600 p-1 hover:bg-slate-700"
			onClick={handleClick}
		>
			<img
				className="mx-4 w-12"
				src={urlCountryFlag(countryCode)}
				alt={`Bandera de ${country}`}
			/>
			<div className="text-lg text-white/80">
				<p>{name}</p>
				<p>{admin1}</p>
			</div>
		</div>
	)
}

ItemCity.propTypes = {
	id: PropTypes.number,
	countryCode: PropTypes.string,
	country: PropTypes.string,
	name: PropTypes.string,
	admin1: PropTypes.string,
	latitude: PropTypes.number,
	longitude: PropTypes.number
}
