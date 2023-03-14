<script setup>
	import { onLaunch, onShow, onHide, onError, onUnhandledRejection, onPageNotFound } from '@dcloudio/uni-app'
	import {} from 'vue'
	import { detectVersionUpdate } from '@/utils/can_version.js'
	
	onLaunch(() => {})
	onShow(() => {
		// 检查版本更新
		detectVersionUpdate()
	})
	onHide(() => {})
	// 捕获 app error
	onError(() => {})
	onUnhandledRejection(() => {})
	// 通过分享卡片、小程序码发现页面不存在，才会触发
	onPageNotFound(() => {})
</script>

<style lang="scss">
	@import "./styles/iconfont.css";
	
	page {
		background-color: #ffffff;
	}
</style>
