var src = './src/';
var build = './build/';

module.exports = {
    jade: {
        src: [ src + 'templates/*.jade'],
        build: build
    },

    sass: {
        src: [src + 'sass/**/*.scss'],
        build: build + 'css'
    },

    js: {
        src: [src + 'js/**/*.js'],
        build: build + 'js'
    },

    api: {
        src: [src + 'api/**/*.js'],
        build: build + 'api',
        buildName: 'api.js'
    }
}
