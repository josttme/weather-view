import PropTypes from 'prop-types'
import { ItemCity } from './ItemCity'

export function ListCities({ cities, searchTerm }) {
	if (!cities?.length || !searchTerm.trim()) return

	return (
		<div className="absolute flex w-full flex-col gap-1  rounded-lg border p-1">
			{cities?.map((city) => (
				<ItemCity key={city.id} {...city} />
			))}
		</div>
	)
}

ListCities.propTypes = {
	cities: PropTypes.array,
	searchTerm: PropTypes.string
}
