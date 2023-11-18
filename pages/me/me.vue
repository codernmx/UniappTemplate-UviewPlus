<template>
	<view class="container">
	
	</view>
</template>

<script setup>
import { reactive, computed, ref, onMounted, getCurrentInstance } from 'vue';
const {
	proxy: { $store },
	proxy
} = getCurrentInstance();
import { onLoad, onShow, onPullDownRefresh } from '@dcloudio/uni-app';
import {  } from '@/common/api.js';

let dataVal = reactive({
	userInfo: {},
	list: []
});
// 下拉刷新
onPullDownRefresh(() => {});

onShow(() => {});
onLoad((option) => {});
</script>

<style lang="less" scoped>
	
</style>
