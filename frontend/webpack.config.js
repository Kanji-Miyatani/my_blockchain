const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/index.tsx",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader"
        }
      ]
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],
    devServer: {
        static:{
            directory: outputPath,
        }
        
	}
  };