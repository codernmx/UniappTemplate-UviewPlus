<!--
 * @Date: 2023-10-22 10:51:06
 * @LastEditTime: 2023-10-22 20:41:34
-->
<template>
	<view class="container">
		<u-swiper :list="dataVal.list" indicator indicatorMode="line" circular></u-swiper>
	</view>
</template>

<script setup>
import { reactive, computed, ref, onMounted, getCurrentInstance } from 'vue';
const {
	proxy: { $store },
	proxy
} = getCurrentInstance();
import {} from '@/common/api.js';
import { onLoad, onShow, onPullDownRefresh } from '@dcloudio/uni-app';

let dataVal = reactive({
	dataList: [],
	list: ['https://cdn.uviewui.com/uview/swiper/swiper3.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper1.png']
});

// 获取列表数据
const getList = async () => {
	try {
		const res = await getReservationList({
			pageSize: 1000,
			currentPage: 1
		});
		dataVal.dataList = res.data.list;
		console.log(res);
	} catch (e) {
		//TODO handle the exception
	}
};
// 下拉刷新
onPullDownRefresh(() => {});

onShow(() => {});

onMounted(() => {});
</script>

<style lang="less" scoped>

</style>
