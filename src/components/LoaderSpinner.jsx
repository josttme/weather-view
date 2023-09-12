import PropTypes from 'prop-types'

export function LoaderSpinner({ loading }) {
	if (!loading) return
	return (
		<div className="bg-primary absolute grid w-full place-content-center rounded-lg p-4 ">
			<span className="loader  h-12 w-12 animate-spin rounded-full border-4 border-cyan-600 border-b-transparent "></span>
		</div>
	)
}

LoaderSpinner.propTypes = {
	loading: PropTypes.bool
}
