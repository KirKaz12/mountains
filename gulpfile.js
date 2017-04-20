var gulp = require('gulp'),
	less = require('gulp-less'),
	browserSync = require('browser-sync');

gulp.task('less', function() {
	return gulp.src('app/css/style.less')
		.pipe(less())
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
       proxy: 'show.stepanov-itpark.sl'
    });
});
gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('app/css/style.less', ['less']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/*.php').on('change', browserSync.reload); 
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload); 
});