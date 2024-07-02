// 拦截器
import { UUID } from '@/js_sdk/uuid.min.js'
import Request from '@/uni_modules/luch-request/luch-request/index.js';
import Storage from '@/utils/custom_storage.js'
import customShowToast from '@/utils/custom_toast.js'
import md5WithSalt from './md5-signature.js'
import silentLogin from './silent-login.js'
import { toLogin } from './tologin.js'


const $API = new Request()

$API.setConfig((config) => {
	const _config = {
		baseURL: process.env.HOST,
		custom: {}
	}
	return {
		...config,
		..._config
	}
})

/**
 * 请求前拦截
 * header 添加 token
 * 通过 custom 做一系列其他操作
 */
$API.interceptors.request.use((config) => {
	config.header = {
		...config.header,
		uuid: UUID.genV1()(),
		timestamp: Date.parse(new Date()) / 1000,
		sign: md5WithSalt(config.data, Storage.getKey()),
		Authorization: Storage.getToken()
	}
	// if (config.custom.auth) {
	//   config.header.token = 'token'
	// }
	if (process.env.NODE_ENV == 'production') {
		console.log('请求前正确拦截⛔️: ', config)
	}
	return Promise.resolve(config)
}, config => {
	if (process.env.NODE_ENV == 'production') {
		console.error('请求前错误拦截⛔️: ', config)
	}
	return Promise.reject(config)
})


/**
 * 请求后拦截
 * status code 状态判断
 * code 数据判断
 */
$API.interceptors.response.use(async (response) => {
	if (process.env.NODE_ENV == 'production') {
		console.info('请求拦截后成功码✅: ', response)
	}
	const { resCode, resMsg } = response.data
	
	// if (response.config.custom.verification) { // 演示自定义参数的作用
	// 	return response.data
	// }

	if (response.statusCode === 200) {
		if (resCode === '02') {
			const complete = () => $API.request(response.config)
			// token 失效 静默登录
			await silentLogin(complete)
			return await $API.post(response.config.url, response.config.data)
		} else if (resCode === '00') {
			return Promise.resolve(response.data)
		} else {
			customShowToast(resCode + resMsg)
			// return null
			return Promise.reject(response.data)
		}
	}

}, (response) => {
	if (process.env.NODE_ENV == 'production') {
		console.info('请求拦截后错误码❌: ', response)
	}
	const { statusCode, errMsg } = response

	if (!statusCode) {
		customShowToast(`${errMsg}系统繁忙`)
	} else {
		if (statusCode === 404) {
			customShowToast(`${statusCode}请求资源不存在`)
			// return Promise.reject(`${statusCode}请求资源不存在`)
		} else if (statusCode === 500 || statusCode === 502 || statusCode === 503) {
			customShowToast(`${statusCode}系统繁忙稍后重试`)
			// return Promise.reject(`${statusCode}系统繁忙稍后重试`)
		} else if (statusCode === 403) {
			customShowToast(`${statusCode}没有权限访问`)
			// setTimeout(() => {
			// 	Storage.clearAll()
			// 	toLogin()
			// 	// return Promise.reject(`${statusCode}没有权限访问`)
			// }, 2000)
		} else if (statusCode === 401) {
			customShowToast(`${statusCode}需要鉴权`)
			// uni.showModal({
			// 	title: '提示',
			// 	content: '登录失效，请重新登录',
			// 	showCancel: false,
			// 	confirmText: '去登录',
			// 	confirmColor: '#3A8E7C',
			// 	success: function (res) {
			// 		if (res.confirm) {
			// 			Storage.clearStorage()
			// 		}
			// 	}
			// })
		} else {
			customShowToast(statusCode + errMsg)
		}
	}
	// return null
})

export default $API
