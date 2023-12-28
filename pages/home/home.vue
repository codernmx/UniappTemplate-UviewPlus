<template>
	<view class="container"></view>
</template>

<script setup>
import { reactive, computed, ref, onMounted, getCurrentInstance } from 'vue';
// const { proxy: { $store }, proxy } = getCurrentInstance ();
import { onLoad, onShow, onPullDownRefresh } from '@dcloudio/uni-app';

const dataList = ref ([])
// 获取列表数据
const getList = async () => {
	try {
		const res = await uni.$u.http.post ('/api/user/wx_login', {
			pageSize: 10,
			pageNum: 1
		});
		dataList.value = res.data.list;
	} catch (err) {
		console.log (err)
	}
};
// 下拉刷新
onPullDownRefresh (() => {
});

onShow (() => {
});

onMounted (() => {
	getList ()
});
</script>

<style lang="less" scoped>

</style>
