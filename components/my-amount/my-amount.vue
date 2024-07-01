<!-- 金额组件 ¥100.00 ¥/.00字体小 100字体大 -->

<template>
	<view class="my-amount" :style="{ color: amountColor }">
		<view class="unit-amount" :style="{ fontSize: unitAmountSize + 'rpx', unitFontWeight: unitFontWeight ? '600' : '400' }">{{unitAmount}}</view>
		<view class="integer-amount" :style="{ fontSize: integerAmountSize + 'rpx', fontWeight: fontWeight ? '600' : '400' }">{{integerAmount}}</view>
		<view class="decimal-amount" :style="{ fontSize: decimalAmountSize + 'rpx', fontWeight: fontWeight ? '600' : '400' }">{{decimalAmount}}</view>
	</view>
</template>

<script>
	export default {
		name: 'MyAmount',
		props: {
			amount: { // 展示的金额
				type: Number,
				required: false,
				default: 0
			},
			unitAmountSize: { // 金额单位字体大小
				type: Number,
				required: false,
				default: 24
			},
			integerAmountSize: { // 整数金额字体大小
				type: Number,
				required: false,
				default: 30
			},
			decimalAmountSize: { // 小数金额字体大小
				type: Number,
				required: false,
				default: 24
			},
			amountColor: { // 金额颜色
				type: String,
				required: false,
				default: '#F7283D'
			},
			unitFontWeight: { // 单位是否加粗
				type: Boolean,
				default: false
			},
			fontWeight: { // 是否加粗
				type: Boolean,
				default: true
			}
		},

		data() {
			return {
				unitAmount: '¥', // 单位
				integerAmount: '--', // 整数部分
				decimalAmount: '.--' // 小数部分
			}
		},
		
		mounted() {
			this.splitAmount()
		},

		methods: {
			// 格式化金额方法
			commFormatAmount(num, options = { style: 'currency', currency: 'CNY' }) {
				if (!num) return ''
				return (Number(num)).toLocaleString('zh-CN', options)
			},
			// 拆分金额
			splitAmount() {
				const formatAmount = this.commFormatAmount(this.amount)
				this.unitAmount = formatAmount[0]
				this.integerAmount = formatAmount.slice(1, formatAmount.length - 3)
				this.decimalAmount = formatAmount.slice(-3)
			}
		}
	}
</script>

<style lang="scss">
	.my-amount 	{
		display: flex;
		justify-content: center;
		align-items: baseline;
		.unit-amount {
			line-height: 1;
			margin-right: 4rpx;
		}
		.integer-amount {
			line-height: 1;
		}
		.decimal-amount {
			line-height: 1;
		}
	}
</style>
