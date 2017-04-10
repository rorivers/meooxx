
const postcss = require('postcss')

module.exports = {
	plugins:[ 
		//	postcss([ require('postcss-autoreset')]),
			require('postcss-smart-import')({  }), 
    //官方的配置说明简直垃圾 
		//太容易让人 误会，md,明明很简单
  
			postcss([
			require('precss')({ /* options */ })
			]),
  
		// 
		
		require('postcss-cssnext')({ }), 
		
	]
}

