import { useUserStore } from '@/store/index';
let loading = false //定义一个变量来判断是否loading
const requestInterceptors = (vm) => {
	/**
	 * 请求拦截
	 * @param {Object} http
	 */
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
			// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
			config.data = config.data || {}
			// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			// console.log(vm.$store.state);
			// #ifdef MP-WEIXIN
			if (uni.getStorageSync('token')) {
				config.header.Authorization = uni.getStorageSync('token')
			}
			if(!loading){
			    wx.showLoading({
			    	title: "加载中" 
			    });
			    loading = true
			}
			// #endif
			return config
		}, (config) => // 可使用async await 做异步操作
		Promise.reject(config))
}
const responseInterceptors = (vm) => {
	/**
	 * 响应拦截
	 * @param {Object} http
	 */
	uni.$u.http.interceptors.response.use((response) => {
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		
		const data = response.data
		console.log(data,'api~~~~~~')
		// 自定义参数
		const custom = response.config?.custom
		if (data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			if (custom.toast !== false) {
				uni.$u.toast(data.message)
			}
			// 如果需要catch返回，则进行reject
			if (custom?.catch) {
				return Promise.reject(data)
			} else {
				// 否则返回一个pending中的promise
				return new Promise(() => {})
			}
		}
		if(loading){
		    wx.hideLoading();
		    loading = false
		}
		return data || {}
	}, (response) => {
		console.log(response, 'err')
		if(loading){
		    wx.hideLoading();
		    loading = false
		}
		if (response.statusCode === 404) {
			uni.$u.toast('请求资源不存在')
		} else if (response.statusCode === 500) {
			uni.$u.toast('内部错误')
		} else {
			uni.$u.toast('暂无服务')
		}
		/*  对响应错误做点什么 （statusCode !== 200）*/
		return Promise.reject(response)
	})
}


export {
	requestInterceptors,
	responseInterceptors
}