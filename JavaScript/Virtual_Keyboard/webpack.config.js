const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// css 를 압축하는 플러그인
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    // 자바스크립트 파일의 진입점을 나타냄
    entry: './src/js/index.js',
    // 빌드를 했을 때, 번들 파일과 관련된 속성 영역
    output: {
        // 파일 이름 지정
        filename: 'bundle.js',
        // 번들 파일이 생성될 경로
        path: path.resolve(__dirname, './dist'), // 절대경로로 지정해주어야 함 (*상대경로로 지정 시 webpack 에서 경로를 찾을 수 없음)
        // 생성될 경로에 이미 파일이 존재한다면 삭제 후 다시 생성
        clean: true,
    },
    // 빌드한 파일과 원본 파일을 서로 연결시켜주는 기능
    devtool: 'source-map',
    mode: 'development',
    // webpack-dev-server
    devServer: {
        host: 'localhost',
        port: 8080,
        // webpack-dev-server 를 실행할때마다 브라우저를 새창으로 열기
        open: true,
        // index.html 에 변화가 생길때마다 reload => 변화감지
        watchFiles: 'index.html'
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 제목
            title: 'keyboard',
            // 빌드 시 사용할 파일
            template: './index.html', // 상대경로
            // 빌드 시 자바스크립트파일이 들어갈 영역 => 지정해주지 않으면 head 영역에 들어감
            inject: 'body',
            favicon: './favicon.ico',
        }),
        new MiniCssExtractPlugin({filename:'style.css'})
    ],
    module: {
        // .css 파일을 ~~.loader 를 사용해 불러오기
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        minimizer: [
            // 초기화
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin()
        ]
    }
}