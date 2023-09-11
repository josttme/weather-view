import { useEffect, useState } from 'react'
import { fetchCity } from '../services/api'

export function useListCities({ searchTerm }) {
	const [cities, setCities] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!searchTerm) {
			setCities([])
			setLoading(false)
			setError(null)
			return
		}

		setLoading(true)
		setError(null)

		fetchCity({ searchTerm })
			.then((result) => {
				const { cities } = result
				setCities(cities)
				setLoading(false)
			})
			.catch((error) => {
				setError(error.message || 'Error desconocido')
				setLoading(false)
			})
	}, [searchTerm])

	return { cities, loading, error }
}
