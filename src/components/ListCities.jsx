import PropTypes from 'prop-types'
import { ItemCity } from './ItemCity'

export function ListCities({ cities, searchTerm, loading, isListVisible }) {
	if (!cities?.length || !searchTerm.trim() || loading || !isListVisible) return

	return (
		<div className="absolute flex w-full flex-col gap-1 rounded-lg bg-primary p-1">
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
	isSearchFocus: PropTypes.bool,
	isListVisible: PropTypes.bool
}
