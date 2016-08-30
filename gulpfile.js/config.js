var src = './src/';
var build = './build/';

module.exports = {
    jade: {
        src: ['./src/templates/*.jade'],
        build: './build/'
    },

    sass: {
        src: [src + 'sass/**/*.scss'],
        build: build + 'css'
    }
}
