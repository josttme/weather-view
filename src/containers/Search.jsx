import { useState } from 'react'
import { ListCities } from '../components/ListCities'
import { SearchCities } from '../components/SeachCities'
import { useListCities } from '../hooks/useListCities'
import { LoaderSpinner } from '../components/LoaderSpinner'

export function Search() {
	const [searchTerm, setSearchTerm] = useState(' ')
	const [isSearchFocus, setIsSearchFocus] = useState(false)
	const [isSelectedCity, setIsSelectedCity] = useState(false)

	const handleSearchChange = (search) => {
		setSearchTerm(search)
	}
	const { cities, loading } = useListCities({ searchTerm })
	const handleChange = () => {
		if (isSelectedCity) return
		setIsSearchFocus(!isSearchFocus)
	}
	const handleClick = () => {
		setIsSelectedCity(true)
	}
	console.log(isSelectedCity)
	return (
		<section className="relative m-3 mx-auto w-11/12 max-w-md">
			<SearchCities
				onSearch={handleSearchChange}
				handleBlur={handleChange}
				handleFocus={handleChange}
			/>

			<LoaderSpinner loading={loading} />

			<ListCities
				cities={cities}
				searchTerm={searchTerm}
				loading={loading}
				isSearchFocus={isSearchFocus}
				handleClick={handleClick}
			/>
		</section>
	)
}
