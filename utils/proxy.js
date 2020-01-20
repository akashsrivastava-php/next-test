const { API, API_BASE_URL } = process.env

const devProxy = {
	[API]: {
		target: API_BASE_URL + API,
		pathRewrite: { ['^' + API]: '/' },
		logLevel: 'silent',
		changeOrigin: true,
	}
}

module.exports = devProxy
