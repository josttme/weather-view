import PropTypes from 'prop-types'
import { ItemCity } from './ItemCity'

export function ListCities({ cities, searchTerm, loading, isSearchFocus }) {
	if (!cities?.length || !searchTerm.trim() || loading || !isSearchFocus) return
	return (
		<div className="bg-primary absolute flex w-full flex-col gap-1 rounded-lg p-1">
			{cities?.map((city) => (
				<ItemCity key={city.id} {...city} />
			))}
		</div>
	)
}

ListCities.propTypes = {
	cities: PropTypes.array,
	searchTerm: PropTypes.string,
	loading: PropTypes.bool,
	isSearchFocus: PropTypes.bool
}
