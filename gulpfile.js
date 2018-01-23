var gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  uglifycss = require('gulp-uglifycss'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  fs = require('fs'),
  path = require('path'),
  pump = require('pump');
  const changed = require('gulp-changed');
  const imagemin = require('gulp-imagemin');


// Build the site, run the server, and watch for file changes
// gulp.task('default',
//   gulp.series(watch));

// all of these will be *checked* – they still need imported somewhere.
var sassPaths = [
  "node_modules/fullcalendar/dist",
  "bower_components/breakpoint-sass/stylesheets",
  "bower_components/susy/sass/",
  "bower_components/css-hamburgers/_sass/hamburgers/",
  "bower_components/fancybox/dist/",
  "bower_components/slick-carousel/slick/",
  "src/scss"
]

// all of these will be concatenated.
var scriptPaths = [
  "bower_components/fancybox/dist/jquery.fancybox.js",
  "bower_components/superfish/dist/js/hoverIntent.js",
  "bower_components/superfish/dist/js/superfish.js",
  "src/js/KCT-mobilenav.js",
  "src/js/scripts.js"
]

// image paths
var imgPaths = [
  'src/img/*',
  "bower_components/slick-carousel/slick/*.gif",

]

// stylesheets
gulp.task('sass', function sassTask() {
  gulp.src('src/scss/styles.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: sassPaths
  }))
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(uglifycss())
  .pipe(sourcemaps.write('../maps', {
    includeContent: false,
    sourceRoot: 'src/scss'
  }))
  .pipe(gulp.dest('dist/css'));
});

// scripts
gulp.task('scripts', function(cb) {
    pump([ // minify JS using pump, which helps with error messages.
          gulp.src(scriptPaths),
          concat('all.js'),
          sourcemaps.write(),

          gulp.dest('dist/js/')
      ],
      cb
    );
});

// just move some fonts.
// Fonts
gulp.task('fonts', function() {
    return gulp.src([
      'src/fonts/**/*'])
      .pipe(gulp.dest('dist/fonts/'));
});


gulp.task('images', function imageMin() {
	gulp.src(imgPaths)
    .pipe(changed('dist/img'))
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
  gulp.src('src/icons/*')
    .pipe(changed('dist/icons'))
		.pipe(imagemin())
		.pipe(gulp.dest('dist/icons'));
});



// Watch lots of things task
gulp.task('watch', function watchTask() {
  gulp.watch('src/scss/**/*', ['sass']);
  gulp.watch('src/js/**/*', ['scripts']);
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch('src/fonts/**/*', ['fonts']);
});

gulp.task('default', ['sass', 'scripts', 'images', 'fonts', 'watch']);
