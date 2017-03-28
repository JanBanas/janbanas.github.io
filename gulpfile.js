var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('pranie', function() {
    console.log("robie pranie");
    
});

var jshint = require('gulp-jshint');

gulp.task('jshint',function (){
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('sass/*.scss')
        .pipe(sourcemaps.init())
		.pipe(sass({errLogToConsole: true}))
		.pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['pranie', 'jshint', 'sass', 'watch' ]);