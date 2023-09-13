import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
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
	const [imageLoaded, setImageLoaded] = useState(true)

	const urlCountryFlag = (countryCode) =>
		`https://open-meteo.com/images/country-flags/${countryCode}.svg`

	const handleClick = () => {
		selectCity({ id, country, name, latitude, longitude })
	}
	const handleImageLoad = () => {
		setImageLoaded(false)
	}
	return (
		<div
			className="flex  cursor-pointer rounded-lg bg-secondary p-1 hover:bg-tertiary"
			onClick={handleClick}
		>
			<div className="mx-4 grid w-12 place-content-center">
				<img
					className={imageLoaded ? 'hidden' : ''}
					src={urlCountryFlag(countryCode)}
					alt={`Bandera de ${country}`}
					onLoad={handleImageLoad}
				/>
				{imageLoaded && (
					<div className=" left-0  flex animate-pulse space-x-4">
						<div className="h-12 w-12 rounded-full bg-slate-700"></div>
					</div>
				)}
			</div>
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
