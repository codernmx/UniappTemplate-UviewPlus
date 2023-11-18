// 格式化时间
export const formatDate = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// 获取日期范围
export const getDateRange = (type) => {
	const now = new Date();
	let start, end;
	let currentDay;
	switch (type) {
		case 'today':
			start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
			end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
			break;
		case 'thisWeek':
			currentDay = now.getDay();
			start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - currentDay + 1, 0, 0, 0);
			end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - currentDay), 23, 59, 59);
			break;
		case 'lastWeek':
			currentDay = now.getDay();
			const lastWeekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - currentDay - 6, 0, 0,
				0);
			const lastWeekEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() - currentDay, 23, 59, 59);
			// 计算上周的时间范围
			start = new Date(lastWeekStart.getFullYear(), lastWeekStart.getMonth(), lastWeekStart.getDate(), 0, 0,
				0);
			end = new Date(lastWeekEnd.getFullYear(), lastWeekEnd.getMonth(), lastWeekEnd.getDate(), 23, 59, 59);
			break;
		case 'thisMonth':
			start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
			end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
			break;
		case 'lastMonth':
			const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0);
			start = lastMonthStart;
			end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);
			break;
		case 'lastThreeMonths':
			start = new Date(new Date().setDate(new Date().getDate() - 90));
			start.setHours(0, 0, 0, 0);
			end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
			break;
		default:
			start = null;
			end = null;
	}
	if (type === 'all') {
		return {}
	}
	return {
		startTime: formatDate(start),
		endTime: formatDate(end)
	};
}


/**
 * 中文姓名验证
 * @param {string} value
 * @returns {boolean}
 */
export const checkName = (value) => {
	const check = /^([\u4e00-\u9fa5]{2,20}|[a-zA-Z.\s]{2,20})$/;
	if (!check.test(value)) {
		return false;
	} else {
		return true;
	}
};

/**
 * 验证手机号
 * @param {string} phone
 * @returns {boolean}
 */
export const checkPhone = (phone) => {
	if (!/^1[3456789]\d{9}$/.test(phone)) {
		return false;
	} else {
		return true;
	}
};