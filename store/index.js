import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useUserStore = defineStore ('user', () => {
	const userInfo = reactive ({});
	const token = ref (null)


	return { userInfo, token };
});

