<template>
	<view class="my-skeleton-screen">
		
		<template v-if="type == 'list'">
			<view class="list_item" v-for="item in 6" :key="item"></view>
		</template>
		
		<template v-if="type == 'paragraph'">
			<view class="paragraph" v-for="val in 3" :key="val">
				<view class="paragraph_tip"></view>
				<view class="paragraph_item" v-for="item in 3" :key="item"></view>
			</view>
		</template>
		
	</view>
</template>

<script>
	/**
	 * SkeletonScreen 骨架屏
	 * @description 预加载数据时loading效果
	 * @property {Boolean} num 骨架屏的展示数量
	 */
	export default {
		name: 'MySkeletonScreen',
		props: {
			type: {
				type: String,
				default: 'list', // list paragraph
			}
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes skeleton {
		0% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}
	@keyframes skeleton-blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
	}
	
	@mixin animation {
		animation: skeleton 1.8s ease infinite;
		background: linear-gradient(90deg, #F1F2F4 25%, #e6e6e6 37%, #F1F2F4 50%);
		background-size: 400% 100%;
	}

	// 列表
	.list_item {
		margin-bottom: 24rpx;
		width: 100%;
		height: 160rpx;
		border-radius: 16rpx;
		@include animation;
	}
	
	// 标题+列表
	.paragraph {
		width: 100%;
		margin-bottom: 16rpx;
		&_tip {
			margin-bottom: 16rpx;
			width: 250rpx;
			height: 44rpx;
			@include animation;
		}
		&_item {
			margin-bottom: 16rpx;
			width: 100%;
			min-height: 80rpx;
			border-radius: 16rpx;
			@include animation;
		}
	}
</style>
