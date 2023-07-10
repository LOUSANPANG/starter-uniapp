	import Vue from 'vue'
	import App from './App'
	import uView from '@/uni_modules/uview-ui'
	// import store from '@/store'

	import customShowToast from './utils/custom_toast.js'
	import { systemInfo } from './utils/is_systeminfo.js'
	import './utils/lib_uview.js'
	import './router.js'


	Vue.use(uView)
	Vue.config.productionTip = false
	Vue.prototype.$TOAST = customShowToast
	Vue.prototype.$SYSTEMINFO = systemInfo

	Vue.prototype.$FSfURL = process.env.FSF_URL // 服务返回图片路径
	Vue.prototype.$ICON = process.env.ICON_URL // 静态资源路径
	Vue.prototype.$VERSION = process.env.VERSION


	App.mpType = 'app'
	const app = new Vue({
		// store,
		...App
	})
	app.$mount()
