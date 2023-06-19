<template>
	<view class="modal">

		<u-popup :show="isPopupBuy" mode="center" round="24" :customStyle="stylePopupBuy">
			<view class="m-popup__buy">
				<image class="m-popup__buy-bg" :src="vipPopupBg"></image>
				<view class="m-popup__buy-info">
					<image class="info-iconblack" :src="vipIconWhite"></image>
					<view class="info-text">
						<view class="info-text__title">{{ title }}</view>
						<view class="info-text__subtitle">{{ subTitle }}</view>
					</view>
				</view>
				<view class="m-popup__buy-btn" @click="handleSubmit">确定</view>
			</view>
		</u-popup>

	</view>
</template>

<script>
	export default {
		name: 'Modal',

		props: {
			show: {
				type: Boolean,
				require: true
			},
			title: {
				type: String,
				default: '欢迎加入', // 欢迎加入 成功续费
			},
			subTitle: {
				type: String,
				default: 'AI口语外教会员',
			}
		},

		data() {
			return {
				vipPopupBg: '/static/speaksmark/component_popup_bg.png',
				vipIconWhite: '/static/speaksmark/icon_logo_white.png',

				isPopupBuy: this.show,
				stylePopupBuy: {
					width: '576rpx',
					height: '644rpx'
				},
			}
		},

		methods: {
			handleSubmit() {
				this.$emit('emit-modal-close')
			}
		}
	}
</script>

<style scoped lang="scss">
	@mixin flexCenter {
		display: flex;
		align-items: center;
	}

	.m-popup__buy {
		position: relative;
		width: 576rpx;
		height: 644rpx;
		&-bg {
			width: 100%;
			height: 100%;
		}
		&-info {
			position: absolute;
			z-index: 1;
			@include flexCenter;
			left: 52rpx;
			top: 118rpx;
			.info-iconblack {
				margin-right: 14rpx;
				width: 200rpx;
				height: 218rpx;
			}
			.info-text {
				font-weight: 500;
				font-size: 40rpx;
				line-height: 131%;
				color: #FFFFFF;
				&__title {
					margin-bottom: 16rpx;
				}
			}
		}
		&-btn {
			position: absolute;
			z-index: 2;
			left: 134rpx;
			bottom: 90rpx;
			@include flexCenter;
			justify-content: center;
			width: 308rpx;
			height: 80rpx;
			border-radius: 40rpx;
			background-color: #6DD26F;
			font-weight: 400;
			font-size: 40rpx;
			letter-spacing: 1rpx;
			color: #FFFFFF;
		}
	}
</style>
