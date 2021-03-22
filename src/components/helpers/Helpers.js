function getNameMonth(month) {
	switch (month) {
		case 0: return "Jan"
		case 1: return "Feb"
		case 2: return "Mar"
		case 3: return "Apr"
		case 4: return "May"
		case 5: return "Jun"
		case 6: return "Jul"
		case 7: return "Aug"
		case 8: return "Sep"
		case 9: return "Oct"
		case 10: return "Nov"
		case 11: return "Dec"
		default: return "Month"
	}
}
function getNameDay(month) {
	switch (month) {
		case 0: return "Sun"
		case 1: return "Mon"
		case 2: return "Tue"
		case 3: return "Wed"
		case 4: return "Thu"
		case 5: return "Fri"
		case 6: return "Sat"
		default: return "Day"
	}
}

function convertTemp(unitName, value) {
	return (unitName === "metric")
		? `${Math.round(value)}°C`
		: `${Math.round(((value) * 1.8) + 32)}°F`
}
function convertWind(unitName, value) {
	return (unitName === "metric")
		? `${value}m/s `
		: `${(value * 2.237).toFixed(1)}mph `
}

function formatDate(value, data, hour = false) {
	const timezone = data.timezone_offset
		? (data.timezone_offset - 7200)
		: (data.timezone - 7200)
	const date = new Date((value + timezone) * 1000);
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const dayMonth = date.getDate();
	const dayWeek = date.getDay();
	const month = date.getMonth();

	const weather = `${getNameDay(dayWeek)} • ${hours}:${minutes <= 9 ? `0${minutes}` : minutes}${hours >= 11 ? "pm" : "am"}, ${getNameMonth(month)} ${dayMonth}`

	const forecast = `${getNameDay(dayWeek).toUpperCase()}, ${getNameMonth(month)} ${dayMonth}`

	return hour ? weather : forecast;
}

function getSrc(folder, cod) {
	let src = `${process.env.PUBLIC_URL}/images/${folder}/${cod}.png`
	let srcDn = `${process.env.PUBLIC_URL}/images/${folder}/`

	switch (cod) {
		case "01d":
		case "01n":
		case "02d":
		case "02n": return src
		case "03d":
		case "03n": return `${srcDn}03dn.png`
		case "04d":
		case "04n": return `${srcDn}04dn.png`
		case "09d":
		case "09n": return `${srcDn}09dn.png`
		case "10d":
		case "10n": return src
		case "11d":
		case "11n": return `${srcDn}11dn.png`
		case "13d":
		case "13n": return `${srcDn}13dn.png`
		case "50d":
		case "50n": return src
		default: return null
	}
}


export {
	getNameMonth, getNameDay,
	convertTemp, convertWind,
	formatDate, getSrc

}