// 跳转拦截
import Vue from 'vue'
import customStorage from '@/utils/custom_storage.js'


Vue.prototype.$JUMP = function(backurl, jumpType = 'navigateTo') {
	const isToken = customStorage.getToken()

	if(isToken) {
		uni[jumpType]({
			url: backurl
		})
	} else {
		uni.navigateTo({
			url: '/pagesChild/login/login'
		})
	}
	
}
