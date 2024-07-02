const isProduction = process.env.NODE_ENV === 'production'
const isProdPlatform = [ 'wx-prod', 'alipay-prod', 'h5-prod', 'app-plus' ].includes(process.env.UNI_SCRIPT)

module.exports = {
	// css: {
	// 	loaderOptions: {
	// 		sass: {
  //       additionalData: `
  //         @import "@/styles/index.scss";
  //       `
  //     }
	// 	}
	// },

	chainWebpack: (config) => {
		// #ifdef H5
			// 允许内网穿透
			// config.devServer.disableHostCheck(true)
			// config
			// 	.devServer
			// 	.proxy({
			// 		'/xxx': {
			// 			target: '',
			// 			changeOrigin: true,
			// 			pathRewrite: {
			// 				'^/xxx': ''
			// 			}
			// 		}
			// 	})
		// #endif
		
		// #ifdef APP-PLUS
			// APP 配置环境变量
			// config
			// 	.plugin('define')
			// 	.tap(args => {
			// 		args[0]['process.env'].HOST = '""'
			// 		args[0]['process.env'].FSfURL = '""'
			// 		args[0]['process.env'].ICON = '""'
			// 		return args
			// 	})
		// #endif

		// 生产环境移除日志及打印
    if (isProduction && isProdPlatform) {
      config.optimization.minimizer('terser').tap((args) => {
        const compress = args[0].terserOptions.compress
        compress.drop_console = true
        compress.pure_funcs = [
          '__f__',
          'console.log',
          'console.error',
          'console.warn',
          'console.info'
        ]
        return args
      })
    }
	}
}
