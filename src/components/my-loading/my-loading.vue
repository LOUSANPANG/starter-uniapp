<template>
	<view class="cashier-loading">
		<view class="loading" />
	</view>
</template>

<style lang="scss">
	$loadingColor: #FF0728;
	
	.cashier-loading {
		position: fixed;
		z-index: 999;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, .4);
		
		@keyframes loading1Spin {
		  to {
		    transform: rotate(360deg);
		  }
		}
		
		.loading {
			margin: 70% auto;
		  width: 50rpx;
		  height: 50rpx;
		  border: 5rpx solid rgba(255, 255, 255, 0);
		  border-top-color: $loadingColor;
		  border-right-color: $loadingColor;
		  border-radius: 50%;
		  animation: loading1Spin 1s linear infinite;
		}
	}
</style>
