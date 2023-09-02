import { useEffect, useState } from 'react'
import { fetchCity } from '../services/api'

export function useListCities({ searchTerm }) {
	const [cities, setCities] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		async function fetchData() {
			try {
				if (!searchTerm) return
				const { cities } = await fetchCity({ searchTerm })
				setCities(cities)
				setLoading(false)
			} catch (error) {
				setError(error)
				setLoading(false)
			}
		}

		fetchData()
	}, [searchTerm])

	return { cities, loading, error }
}
