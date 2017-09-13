import config from './config'

const apiKey = config.apiKey
// const { apiKey } = config

const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
const URL2 = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${apiKey}&format=json`

export default function getArtist(country)
{
	const url = URL.replace(":country", country);
	return fetch(url)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}