<!--
 * @Date: 2023-10-29 13:28:10
 * @LastEditTime: 2023-10-31 14:41:12
-->
<script>
export default {
	onLaunch: function () {
		console.log('App Launch');

		// uni.login({
		// 	provider: 'weixin',
		// 	onlyAuthorize: true, // 微信登录仅请求授权认证
		// 	success: async ({ code }) => {
		// 		const res = await login({ code });
		// 		console.log(res, 'getuserinfo--------------->');
		// 		if (res.data) {
		// 			$store.$userInfo = res.data.userInfo;
		// 			uni.setStorageSync('userInfo', res.data.userInfo);
		// 			uni.switchTab({
		// 				url: '/pages/home/home'
		// 			});
		// 		} else {
		// 			show.value = true;
		// 			uni.removeStorageSync('userInfo');
		// 		}
		// 	},
		// 	fail: (err) => {
		// 		console.log(err, 'err------------------>');
		// 	},
		// 	complete() {}
		// });
	},
	onShow: function (options) {
		console.log('App Show--->', options);
		// console.log(uni.$u.http)
	},
	onHide: function () {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uni_modules/uview-plus/index.scss';
@import 'common/demo.scss';
@import '/styles/public.css';

page {
	max-width: 1000rpx;
	margin: 0 auto;
}
</style>
