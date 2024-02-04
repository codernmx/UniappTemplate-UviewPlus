import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
	const userInfo = ref(null);
	const userId = ref(null);
	const token = ref(null)
	return { userInfo,userId, token };
}, {
	persist: {
		storage: {
			getItem: uni.getStorageSync,
			setItem: uni.setStorageSync
		}
	}
});
