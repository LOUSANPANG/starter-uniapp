import { createSSRApp } from 'vue'
// import * as Pinia from 'pinia'
import App from './App'
import CONFIG from './config.js'

import customShowToast from './utils/custom_toast.js'


export function createApp() {
  const app = createSSRApp(App)

	app.config.globalProperties.$CONFIG = CONFIG
	app.config.globalProperties.$TOAST = customShowToast
	// #ifndef APP-PLUS
	app.config.globalProperties.$ICON = process.env.HOST.ICON_URL
	app.config.globalProperties.$FSfURL = process.env.HOST.FSF_URL
	// #endif

	// app.use(Pinia.createPinia())

  return {
    app,
		// Pinia,
  }
}
