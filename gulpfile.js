var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglifyjs = require('gulp-uglifyjs'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');
  

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
			intarlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
	.pipe(gulp.dest('dist/img'))
});

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('script', function(){
	return gulp.src(['app/libs/owl-carousel/owl-carousel/owl.carousel.js', 
					 'app/libs/magnific-popup/dist/jquery.magnific-popup.js'])
	.pipe(concat('libs.min.js'))
	.pipe(uglifyjs())
	.pipe(gulp.dest('app/js'))
});

gulp.task('css', function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['browser-sync'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass'])
	gulp.watch('app/*.html', browserSync.reload)
	gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('build', ['clean', 'img'], function(){
	
	var buildHTML = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))

	var buildFonts = gulp.src('fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*.js')
	.pipe(gulp.dest('dist/js'))

	var buildCss = gulp.src(['app/css/**/*.css', '!app/css/libs.css'])
	.pipe(gulp.dest('dist/css'))
							
});

gulp.task('clean', function(){
	return del.sync('dist')
});