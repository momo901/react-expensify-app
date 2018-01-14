
const path=require('path');



module.exports={
  entry:[
   './src/app.js'  
  ],
  output:{
    
      path:path.join(__dirname,'public'),
      filename:'bundle.js'
  },
  module :{
      rules:[{
        loader:'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        test:/\.s?css$/,
        use:[
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      }
    ]
  },

  devtool:'cheap-eval-source-map',


  devServer:{
    contentBase:path.join(__dirname,'public'),
    stats: "errors-only",
    host: process.env.HOST, // Defaults to `localhost`
    port: 8080,
    historyApiFallback:true,
    https:false
  },
  
};