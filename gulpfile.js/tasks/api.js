var config = require('../config');
var gulp = require('gulp');

gulp.task( 'build:api', function() {
    return gulp.src( config.api.src )
        .pipe( gulp.dest( config.api.build ) );
});
