<!-- 成功页 -->
<template>
	<view class="success">
		<!-- <image class="success-logo" src="../../static/status/success.png" title="成功" /> -->

		<view class="success-title">Success</view>
	</view>
</template>

<script>
	export default {
		name: 'Success',

		data() {
			return {}
		},

		methods: {}

	}
</script>

<style lang="scss">
	.success {
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
