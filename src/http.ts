import axios from 'axios'

const $host = axios.create({
	baseURL: 'https://randomuser.me/api/'
})

export {
	$host
}
