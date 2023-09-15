import { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { PropTypes } from 'prop-types'

export function WeatherCard(city) {
	const { latitude, longitude, name: cityName, country } = city
	const { getCityByLatLong } = useContext(WeatherContext)
	const [weatherData, setWeatherData] = useState(null)

	useEffect(() => {
		getCityByLatLong(latitude, longitude)
			.then((data) => setWeatherData(data))
			.catch((error) => console.error(error))
	}, [])

	if (weatherData === null) return
	const {
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
		windSpeed,
		weatherDescription,
		weatherIcon
	} = weatherData
	const iconWeather = `/${weatherIcon}.svg`
	return (
		<div className="relative grid h-[290px] w-[500px] grid-cols-4 grid-rows-6 items-center rounded-lg bg-blue-700 bg-gradient-to-r from-[#00061f] via-[#001460] to-[#001b7a] p-4 text-xl  text-white/80">
			<div className=" col-span-4 flex items-center">
				<div className="h-7 w-7">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 200 200"
						fill="currentcolor"
						fillRule="evenodd"
					>
						<path d="M155.06 85.271c0 33.328-38.888 71.231-51.419 82.58a5.678 5.678 0 0 1-7.682 0C83.428 156.503 44.54 118.6 44.54 85.272c0-30.52 24.74-55.26 55.26-55.26s55.26 24.74 55.26 55.26Zm-35.305 0c0 11.02-8.934 19.955-19.955 19.955s-19.955-8.934-19.955-19.955c0-11.02 8.934-19.955 19.955-19.955s19.955 8.934 19.955 19.955Z" />
					</svg>
				</div>
				<span>
					{cityName} ({country})
				</span>
			</div>
			<div className=" absolute right-3 top-3  grid h-5 w-5 cursor-pointer place-content-center opacity-70 hover:text-[#ff2f2f] ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="5 5 15 15"
					className=" h-5 w-5 items-center justify-center self-center"
				>
					<path
						fill="currentColor"
						d="m14.8 12 3.6-3.6c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L12 9.2 8.4 5.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8L9.2 12l-3.6 3.6c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l3.6-3.6 3.6 3.6c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8L14.8 12z"
					/>
				</svg>
			</div>
			<img
				className="col-span-2 row-span-4 h-36 w-36  place-self-center"
				src={iconWeather}
				alt={weatherIcon}
			/>
			<span className="col-span-2 text-center ">{currentTime}</span>
			<div className="col-span-2 row-span-2 grid place-content-center text-center">
				<span className="text-6xl font-bold text-white/80">
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
			<span className="col-span-3 pl-1">{weatherDescription}</span>
		</div>
	)
}
WeatherCard.propTypes = {
	latitude: PropTypes.number.isRequired,
	longitude: PropTypes.number.isRequired
}
