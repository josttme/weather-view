import { useState } from 'react'
import { ListCities } from '../components/ListCities'
import { LoaderSpinner } from '../components/LoaderSpinner'
import { SearchCities } from '../components/SeachCities'
import { useListCities } from '../hooks/useListCities'

export function Search() {
	const [searchTerm, setSearchTerm] = useState('')
	const [isListVisible, setIsListVisible] = useState(false)
	const { cities, loading } = useListCities({ searchTerm })

	const handleSearchChange = (search) => {
		setSearchTerm(search)
		setIsListVisible(true)
	}

	const handleBlur = () => {
		setTimeout(() => {
			setIsListVisible(false)
		}, 100)
	}

	const handleFocus = () => {
		setIsListVisible(true)
	}

	return (
		<section className="relative m-3 mx-auto w-11/12 max-w-md">
			<SearchCities
				handleSearchChange={handleSearchChange}
				handleBlur={handleBlur}
				handleFocus={handleFocus}
			/>

			<LoaderSpinner loading={loading} />

			<ListCities
				cities={cities}
				searchTerm={searchTerm}
				loading={loading}
				isListVisible={isListVisible}
			/>
		</section>
	)
}
