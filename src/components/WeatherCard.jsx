import { useContext, useEffect } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { PropTypes } from 'prop-types'

export function WeatherCard({ latitude, longitude }) {
	const { weatherData, getCityByLatLong } = useContext(WeatherContext)

	useEffect(() => {
		getCityByLatLong({ latitude, longitude })
	}, [])
	if (weatherData === null) return
	const {
		city,
		country,
		currentTemp,
		currentTime,
		humidity,
		/* 		iconCode, */
		maxTemp,
		minTemp,
		/* 		precip,
		sunrise,
		sunset,
		timezone, */
		windSpeed
	} = weatherData

	return (
		<div className=" grid h-[290px] w-[500px] grid-cols-4 grid-rows-6 rounded-lg bg-blue-700 bg-gradient-to-r from-[#00061f] via-[#001460] to-[#001b7a] p-4 text-xl  text-white/80">
			<span className="col-span-4">
				{city} ({country})
			</span>
			<img
				className="col-span-2 row-span-4 h-20 w-20  place-self-center bg-cyan-600"
				alt="weather icon"
			/>
			<span className="col-span-2 text-center ">{currentTime}</span>
			<div className="col-span-2 row-span-2 grid place-content-center text-center">
				<span className="text-5xl font-bold text-white/80">
					{currentTemp}°C
				</span>
				<span>
					{maxTemp}°C / {minTemp}°C
				</span>
			</div>
			<div className="col-span-2 col-start-3 flex justify-center gap-1  text-center">
				<span>{humidity}%</span>
				<span>{windSpeed} km/h</span>
			</div>
			<span className="col-span-3">Overcast</span>
		</div>
	)
}
WeatherCard.propTypes = {
	latitude: PropTypes.number.isRequired,
	longitude: PropTypes.number.isRequired
}
