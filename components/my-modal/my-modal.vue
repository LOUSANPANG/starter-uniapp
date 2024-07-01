<template>
	<view class="modal">
		<u-popup :show="true" round="32">

			<view class="container">
				<view v-if="title" class="title">{{title}}</view>
				<view v-if="subTitle" class="subtitle">{{subTitle}}</view>
				<view class="flex_center">
					<view class="btn">
						<view class="btn_item cancle" @click="handleCancle">取消</view>
						<view class="btn_item submit" @click="handleSubmit">确定</view>
					</view>
				</view>
			</view>

		</u-popup>
	</view>
</template>

<script>
	export default {
		name: 'Modal',

		props: {
			title: {
				type: String,
				default: '',
			},
			subTitle: {
				type: String,
				default: '',
			}
		},

		data() {
			return {
			}
		},

		methods: {
			handleCancle() {
				this.$emit('emit-modal-cancle')
			},
			handleSubmit() {
				this.$emit('emit-modal-submit')
			}
		}
	}
</script>

<style scoped lang="scss">
	.flex_center {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.container {
		padding: 48rpx 0 32rpx;
		width: 100%;
		.title {
			margin-bottom: 32rpx;
			width: 100%;
			color: #333;
			text-align: center;
			font-size: 32rpx;
			line-height: 32rpx;
		}
		.subtitle {
			margin: 0 auto 32rpx;
			text-align: center;
			width: 430rpx;
			color: #666;
			font-size: 28rpx;
			line-height: 48rpx;
		}
		.btn {
			display: flex;
			align-items: center;
			justify-content: space-around;
			width: 430rpx;
			&_item {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20rpx 0;
				width: 240rpx;
				border-radius: 40rpx;
			}
			.cancle {
				margin-right: 16rpx;
				border: 2rpx solid #E5E5E5;
				background-color: #fff;
				color: #666;
				font-size: 32rpx;
				line-height: 32rpx;
			}
			.submit {
				background: #3A8E7C;
				color: #fff;
				font-size: 32rpx;
				line-height: 32rpx;
			}
		}
	}
</style>
