import { useState, useEffect } from 'react'

export const useLocalStorage = (key) => {
	const [state, setState] = useState(() => {
		// Obtiene el valor almacenado en el localStorage o devuelve un array vacío si no hay valor
		const storedValue = localStorage.getItem(key)
		return storedValue ? JSON.parse(storedValue) : []
	})

	useEffect(() => {
		// Guarda el estado actual en el localStorage cuando cambia
		localStorage.setItem(key, JSON.stringify(state))
	}, [key, state])

	return [state, setState]
}
