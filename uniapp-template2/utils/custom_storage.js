export const customStorage = {
	// 权限信息
	getToken() {
		return uni.getStorageSync('token')
	},
	setToken(token) {
		uni.setStorageSync('token', token)
	},
	
	clearAll() {
		uni.clearStorage()
	}
}
