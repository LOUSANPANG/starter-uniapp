// web socket
import { Storage } from '@/utils/storage.js'

export default {
	data() {
		return {
			socketToask: null,
		}
	},

	created() {
	},

	beforeDestroy() {
		this.closeSocket()
	},

	methods: {
		// 建立连接
		initSocket() {
			this.socketToask = uni.connectSocket({
				url: this.socketUrl,
				header: {
					sessionId: Storage.getSessionId(),
				},
				fail: (err) => {
					this.$TOAST(`建立连接失败，${err}`)
				}
			})
		},

		onOpenSocket(callback) {
			this.socketToask.onOpen(callback)
		},

		// 接受信息
		messageSocket(callback) {
			this.socketToask.onMessage((res) => {
				const data = JSON.parse(res.data)
				if (data.errNo == 3) {
					this.$TOAST(data.errMsg)
					uni.navigateTo({
						url: '/pagesChild/login/login'
					})
				} else if (data.errNo == 4) { // 次数已用完

				} else if (data.errNo == 5) { // 会员到期

				} else if (data.errNo == 0) {
					callback(data)
				} else {
					this.$TOAST(data.errMsg)
				}
			})
		},

		// 发送socket
		sendSocket(data, callback) {
			this.socketToask.send({
				data,
				success: (res) => {
					callback && callback(res)
				},
				fail: (err) => {
					console.log('发送socket fail ===>', err)
					this.$TOAST(err)
				},
				complete: () => {}
			})
		},

		// 关闭socket
		closeSocket() {
			this.socketToask && this.socketToask.close()
		},
	},
	// /end methods
}
