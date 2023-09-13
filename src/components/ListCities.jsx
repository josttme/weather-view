import PropTypes from 'prop-types'
import { ItemCity } from './ItemCity'

export function ListCities({
	cities,
	searchTerm,
	loading,
	isSearchFocus,
	handleClick
}) {
	const handleCityClick = () => {
		handleClick() // Llama a la función handleClick cuando se haga clic en la lista de ciudades
	}
	if (!cities?.length || !searchTerm.trim() || loading || !isSearchFocus) return
	return (
		<div
			className="absolute flex w-full flex-col gap-1 rounded-lg bg-primary p-1"
			onClick={handleCityClick}
		>
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
	setIsSelectedCity: PropTypes.func,
	handleClick: PropTypes.func
}
