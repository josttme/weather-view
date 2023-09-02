import PropTypes from 'prop-types'
import { ItemCity } from './ItemCity'

export function ListCities({ cities }) {
	return (
		<div className="flex flex-col gap-1 rounded-lg border  p-1">
			{cities.map((city) => (
				<ItemCity key={city.id} {...city} />
			))}
		</div>
	)
}

ListCities.propTypes = {
	cities: PropTypes.array.isRequired
}
