<template>
	<view class="pay">

		<u-popup :show="isPopupPay" round="40" :closeOnClickOverlay="true" @close="closePopupPay" >
			<view class="m-popup__pay">
				<view class="pay-title">选择支付方式</view>

				<view class="pay-radiogroup">
					<!-- 微信 -->
					<view class="pay-radiogroup__radio" @click="radioPayOption = 'wxPay'">
						<image class="pay-radiogroup__radio-wx" :src="vipIconWx"></image>
						<u-icon name="checkmark-circle-fill" color="#5C68DA" size="40"></u-icon>
						<!-- <view :class="['radio-default', radioPayOption === 'wxPay' && 'radio-select']"></view> -->
					</view>
					<!-- 支付宝 -->
					<!-- <view class="pay-radiogroup__radio radiogroup__radioali" @click="radioPayOption = 'aliPay'">
						<image class="pay-radiogroup__radio-ali" :src="vipIconAliPay"></image>
						<view :class="['radio-default', radioPayOption === 'aliPay' && 'radio-select']"></view>
					</view> -->
				</view>

				<view class="pay-submit" @click="handlePay">确定</view>
			</view>
		</u-popup>

	</view>
</template>

<script>
	import { postWxPay } from '@/services/api/pay.js'

	export default {
		name: 'Pay',
		props: {
			show: {
				type: Boolean,
				require: true
			}
		},

		data() {
			return {
				vipIconWx: '', // 微信支付图标
				vipIconAliPay: '', // 支付宝支付图标

				isPopupPay: this.show,
				radioPayOption: 'wxPay', // wxPay、aliPay

				interval: null,
			}
		},

		watch: {
			interval(newVal, oldVal) {
				if (newVal) {
					uni.showLoading({
						title: '等待上游返回支付结果中...',
						mask: true
					})
				} else {
					uni.hideLoading()
				}
			}
		},

		created() {
			uni.hideTabBar()
		},

		methods: {
			closePopupPay() {
				if (this.interval) clearInterval(this.interval)
				this.$emit('emit-pay-close')
				uni.showTabBar()
			},

			// TODO 查询订单状态服务
			queryWxOrderStatus() {
				// TODO 判断是否回调成功，没有成功，继续轮询
				this.closePopupPay()
				this.$emit('emit-pay-success')
			},

			// 轮询微信订单状态
			pollQuery() {
				if (this.interval) clearInterval(this.interval)
				this.interval = setInterval(() => {
					this.queryWxOrderStatus()
				}, 2000)
			},

			// 获取微信支付参数信息 payment data
			async queryWxPay() {
				try{
					const res = await postWxPay({ productId: 1 })
					return res
				}catch(e){}
			},

			// 拉起微信支付
			async handlePay() {
				const result = await this.queryWxPay()
				const payInfo = result.data
				const paymentData = {
					provider: 'wxpay',
					// #ifdef APP
					orderInfo: {
						appid: payInfo.appid,  // 应用ID（AppID）
						partnerid: "148*****52",      // 商户号（PartnerID）
						prepayid: payInfo.prepay_id, // 预支付交易会话ID
						package: payInfo.package,        // 固定值
						noncestr: payInfo.nonceStr, // 随机字符串
						timestamp: payInfo.timeStamp,        // 时间戳（单位：秒）
						sign: payInfo.paySign // 签名，这里用的 MD5 签名
					},
					// #endif
					// #ifdef MP-WEIXIN
					timeStamp: payInfo.timeStamp, // 时间戳
					nonceStr: payInfo.nonceStr, // 随机字符串，不长于32位
					package: payInfo.package, // 数据包
					signType: payInfo.signType, // 签名方式
					paySign: payInfo.paySign,
					// #endif
				}

				uni.getProvider({
					service: 'payment',
					success: (res) => {
						console.log('服务供应商:', res.provider)
						console.log('服务供应商服务对象:', res.providers)

						if (~res.provider.indexOf('wxpay')) {
							uni.requestPayment({
								...paymentData,
								success: (res) => {
									if (res.errMsg == 'requestPayment:ok') {
										// 支付成功，轮询订单状态
										this.pollQuery()
									} else if (res.errMsg == 'requestPayment:cancel') {
										this.$TOAST('微信支付失败')
									}
								},
								fail() {
									this.$TOAST('微信支付取消')
								}
							})
						} else {
							this.$TOAST('服务供应商不支持微信支付')
						}

					},
					fail() {
						this.$TOAST('获取支付服务商失败')
					}
				})
			},
		},

	}
</script>

<style scoped lang="scss">
	@mixin flexCenter {
		display: flex;
		align-items: center;
	}

	// 支付弹窗
	.m-popup__pay {
		box-sizing: border-box;
		padding: 56rpx;
		width: 100%;
		// height: 682rpx;
		background: #FFFFFF;
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		.pay-title {
			margin-bottom: 40rpx;
			text-align: center;
			width: 100%;
			font-weight: 500;
			font-size: 40rpx;
			line-height: 131%;
			color: #333333;
		}
		.pay-radiogroup {
			width: 100%;
			&__radio {
				@include flexCenter;
				justify-content: space-between;
				// margin-bottom: 40rpx;
				margin-bottom: 60rpx;
				&-wx {
					width: 296rpx;
					height: 80rpx;
				}
				&-ali {
					width: 336rpx;
					height: 80rpx;
				}
				.radio-default {
					width: 40rpx;
					height: 40rpx;
					background: #F5F5FB;
					border: 2rpx solid #5C68DA;
					border-radius: 50%;
				}
				.radio-select {
					background: #5C68DA;
				}
			}
			.radiogroup__radioali {
				margin-bottom: 80rpx
			}
		}
		.pay-submit {
			@include flexCenter;
			justify-content: center;
			margin: 0 auto 74rpx;
			width: 512rpx;
			height: 124rpx;
			border-radius: 40rpx;
			background-color: #5C68DA;
			font-weight: 400;
			font-size: 44rpx;
			letter-spacing: 1rpx;
			color: #FFFFFF;
		}
	}
	// /end 支付弹窗
</style>
