	import Vue from 'vue'
	import App from './App'
	import uView from '@/uni_modules/uview-ui'
	// import store from '@/store'
	import CONFIG from './config.js'

	import customShowToast from './utils/custom_toast.js'
	import { systemInfo } from './utils/is_systeminfo.js'
	import './utils/promise_vue3.js'
	import './filters/filters.js'
	import './router.js'


	Vue.use(uView)
	Vue.config.productionTip = false
	Vue.prototype.$CONFIG = CONFIG
	Vue.prototype.$TOAST = customShowToast
	Vue.prototype.$SYSTEMINFO = systemInfo
	// #ifndef APP-PLUS
	Vue.prototype.$ICON = process.env.HOST.ICON_URL
	Vue.prototype.$FSfURL = process.env.HOST.FSF_URL
	// #endif


	App.mpType = 'app'
	const app = new Vue({
		// store,
		...App
	})
	app.$mount()
