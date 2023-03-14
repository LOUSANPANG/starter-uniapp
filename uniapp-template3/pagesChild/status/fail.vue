<!-- 失败页 -->
<template>
	<view class="fail">
		<!-- <image class="fail-logo" src="../../static/status/fail.png" title="失败" /> -->

		<view class="fail-title">fail</view>
	</view>
</template>

<script setup>
  import {} from '@dcloudio/uni-app'
</script>

<style lang="scss">
	.fail {
		position: relative;
		width: 100%;
		height: 100%;
		background: #FFFFFF;

		&-logo {
			margin: 20% auto 10%;
			width: 200rpx;
			height: 200rpx;
		}

		&-title {
			margin-bottom: 10rpx;
			text-align: center;
			font-size: 40rpx;
			font-weight: 700;
		}
	}
</style>
