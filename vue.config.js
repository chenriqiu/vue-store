module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': 'src/assets',
				'components': 'src/components',
				'network': 'src/network',
				'views': 'src/views'
			}
		}
	}
}