import { useState } from 'react'
import { ListCities } from '../components/ListCities'
import { SearchCities } from '../components/SeachCities'
import { useListCities } from '../hooks/useListCities'

export function Search() {
	const [searchTerm, setSearchTerm] = useState(' ')

	const handleSearchChange = (search) => {
		setSearchTerm(search)
	}
	const { cities, loading } = useListCities({ searchTerm })

	return (
		<section className="relative m-3 mx-auto w-11/12 max-w-md">
			<SearchCities onSearch={handleSearchChange} />
			{loading && <div>Cargando...</div>}

			<ListCities cities={cities} searchTerm={searchTerm} />
		</section>
	)
}
