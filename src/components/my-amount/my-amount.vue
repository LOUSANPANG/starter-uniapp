<!-- 金额组件 ¥100.00 ¥/.00字体小 100字体大 -->

<template>
	<view class="my-amount" :style="{ color: amountColor }">
		<view
			class="unit-amount"
			:style="{ fontSize: unitAmountSize + 'rpx', unitFontWeight: unitFontWeight ? '600' : '400' }"
		>{{unitAmount}}</view>
		<view
			class="integer-amount"
			:style="{ fontSize: integerAmountSize + 'rpx', fontWeight: fontWeight ? '600' : '400' }"
		>{{integerAmount}}</view>
		<view
			class="decimal-amount"
			:style="{ fontSize: decimalAmountSize + 'rpx', fontWeight: fontWeight ? '600' : '400' }"
		>{{decimalAmount}}</view>
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
			integerAmountSize: { // 整数金额字体大小
				type: Number,
				required: false,
				default: 64
			},
			unitAmountSize: { // 金额单位字体大小
				type: Number,
				required: false,
				default: 32
			},
			decimalAmountSize: { // 小数金额字体大小
				type: Number,
				required: false,
				default: 64
			},
			amountColor: { // 金额颜色
				type: String,
				required: false,
				default: '#FF0728'
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

		watch: {
			amount: {
				handler(newVal, _) {
					this.splitAmount(newVal)
				},
				immediate: true
			},
		},

		methods: {
			// 拆分金额
			splitAmount(amount = this.amount) {
				const formatAmount = String(amount).split('.')
				this.integerAmount = formatAmount[0]
				this.decimalAmount = formatAmount[1] ? `.${formatAmount[1]}` : '.00'
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
