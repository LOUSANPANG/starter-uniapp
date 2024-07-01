import $API from '@/services-base/http-interceptors.js'

export const postLogin = (data) => {
	return $API.post('/userLogin', data)
}
