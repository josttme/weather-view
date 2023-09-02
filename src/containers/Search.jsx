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
	console.log(cities)
	return (
		<section className="m-3 mx-auto w-11/12 max-w-md">
			<SearchCities onSearch={handleSearchChange} />
			{/* Muestra el mensaje de carga o error según corresponda */}
			{loading && <div>Cargando...</div>}

			{(cities?.length > 0 || searchTerm.trim() !== '') && (
				<ListCities cities={cities} />
			)}
		</section>
	)
}
