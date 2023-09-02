import debounce from 'just-debounce-it'
import { PropTypes } from 'prop-types'
import { useCallback } from 'react'

export function SearchCities({ onSearch }) {
	const debounceGetCities = useCallback(
		debounce((search) => {
			onSearch(search)
		}, 400),
		[]
	)

	const handleChange = (e) => {
		const newQuery = e.target.value
		if (newQuery.startsWith(' ')) return
		debounceGetCities(newQuery)
	}

	return (
		<div className="input-group relative mb-4 flex h-11 w-full  items-stretch">
			<input
				className="form-control relative m-0 block w-full min-w-0 flex-auto rounded-bl-lg rounded-tl-lg  border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-gray-500 focus:bg-white focus:text-gray-700 focus:outline-none"
				placeholder="Search..."
				onChange={handleChange}
				type="search"
			/>
			<span className=" flex items-center rounded-br-lg rounded-tr-lg bg-gray-900 px-6 py-2.5  leading-tight text-white ">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="search"
					className="w-4"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
					/>
				</svg>
			</span>
		</div>
	)
}
SearchCities.propTypes = {
	onSearch: PropTypes.func.isRequired
}
