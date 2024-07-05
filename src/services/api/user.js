import $API from '@/services-base/http-interceptors.js'

export function postLogin(data) {
  return $API.post('/userLogin', data)
}
