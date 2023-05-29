const path = require("path");

module.export={
    mode : 'development',
    entry : './src/index.js',
    output:{
        path: path.join(__dirname,"/dist"),
        filename:"index.js"
    },
    devtool:'source-map'
}