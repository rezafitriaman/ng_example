/*requered*/
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	order = require('gulp-order'),
	sourcemaps = require('gulp-sourcemaps');

	/*install
	gulp-uglify browser-sync gulp-sass gulp-plumber gulp-autoprefixer gulp-concat gulp-rename gulp-sourcemaps*/

/*task*/
gulp.task('concat', function() {
	console.log('concat work!');
  	return gulp.src('src/js/**/*.js')
  	.pipe(order([
  		"src/js/app.js",
  		"src/js/controllers/MainController.js",
  		"src/js/directives/blocksInfo.js",
  		"src/js/main.js"
  	]))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(reload({stream:true}));
});

/*gulp.task('scripts',function() {
	console.log('scripts work!');
	gulp.src(['cv/bower_components/bootstrap/dist/js/bootstrap.js'])
	.pipe(rename('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('cv/js'))
	.pipe(reload({stream:true}));
});*/

/*''''''''''''''''AngularJs''''''''''''''''''*/
/*make app.js go to public*/
gulp.task('appJs',function() {
	console.log('appJs work!');
	gulp.src(['src/js/app.js'])
	.pipe(rename('app.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/js'))
	.pipe(reload({stream:true}));
});

/*make controller go to public*/
//MainControllers
gulp.task('MainController',function() {
	console.log('MainControllers work!');
	gulp.src(['src/js/controllers/MainController.js'])
	.pipe(rename('MainController.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/js/controllers'))
	.pipe(reload({stream:true}));
});

/*make directives html go to public directives*/
gulp.task('copy_directives_html', function() {
	console.log('copy_directives_html work!');
    gulp.src('src/js/directives/*.html')
    .pipe(gulp.dest('public/js/directives'));
});


/*''''''''''''''''End AngularJs''''''''''''''''''*/

gulp.task('sass', function () {
	console.log('sass work!');
  return gulp.src('src/scss/*.scss')
  	.pipe(plumber())
  	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
    browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'android 4']
	}))
    .pipe(gulp.dest('public/css/'))
    .pipe(reload({stream:true}));
});

gulp.task('concatCss', function () {
	console.log('concatCss work!');
  return gulp.src('public/css/style.css')
  	.pipe(sourcemaps.init())
	    .pipe(concatCss("all.css"))
	    .pipe(gulp.dest('public/css/all'))
    .pipe(sourcemaps.write())
    .pipe(reload({stream:true}));
});

gulp.task('html', function () {
	console.log('html work!');
	gulp.src('public/*.html')
	.pipe(browserSync.stream());
});

/*browser-sync*/
gulp.task('browser-sync', function () {
	console.log('browser-sync work!');
	browserSync({
		server: {
			baseDir: 'public',
			proxy: "grqbge-nwx7013:3000"
		}
	});
});

/*watch*/
gulp.task('watch', function() {
	console.log('watch');
	gulp.watch('src/js/directives/*.html',['copy_directives_html']);
	gulp.watch('src/js/**/*.js', ['concat']);
	/*gulp.watch('cv/js/dev/*.js', ['scripts']);*/
	gulp.watch('src/js/app.js', ['appJs']);
	gulp.watch('src/js/controllers/MainController.js', ['MainController']);
	gulp.watch('src/scss/style.scss', ['sass']);
	gulp.watch('public/css/style.css', ['concatCss']);
	gulp.watch('public/*.html', ['html']);
});

/*default*/
gulp.task('default',['copy_directives_html', 'concat', 'appJs', 'MainController', 'sass', 'concatCss', 'html', 'browser-sync', 'watch']);