export const ICON_MAP = new Map()

addMapping([0, 1], 'day')
addMapping([2], 'cloudy-day')
addMapping([3], 'cloudy')
addMapping([45, 48], 'smog')
addMapping([51, 53, 55, 56, 57], 'drizzle')
addMapping([61, 63, 65, 66, 67], 'rain')
addMapping([71, 73, 75, 77, 85, 86], 'snowy')
addMapping([80, 81, 82], 'rainy')
addMapping([95, 96, 99], 'thunder')

function addMapping(values, icon) {
	values.forEach((v) => {
		ICON_MAP.set(v, icon)
	})
}
