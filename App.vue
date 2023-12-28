<script>
export default {
	onLaunch: function () {

	},
	onShow: function (options) {
		console.log ('App Show--->', options);
		this.updateApp ();
		console.log (uni.$u.route)
	},
	onHide: function () {
		console.log ('App Hide');
	},
	methods: {
		updateApp: function () {
			const updateManager = uni.getUpdateManager ();
			updateManager.onCheckForUpdate (function (res) {
				// 请求完新版本信息的回调
				console.log (res.hasUpdate, '是否需要更新~~~');
				if ( res.hasUpdate ) {
					uni.$u.toast ('检测到新版本~');
				}
			});
			updateManager.onUpdateReady (function (res) {
				uni.showModal ({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success (res) {
						if ( res.confirm ) {
							updateManager.applyUpdate ();
						}
					}
				});
			});
			updateManager.onUpdateFailed (function (res) {
				uni.showToast ({
					title: '更新失败',
					icon: 'none',
					duration: 2000
				});
				// 新的版本下载失败
			});
		}
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uni_modules/uview-plus/index.scss';

page {
	max-width: 1000rpx;
	margin: 0 auto;
}
</style>
