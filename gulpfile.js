var destination = process.env.GULP_DESTINATION || 'static';

// Load plugins
var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  streamqueue = require('streamqueue');


// Styles
gulp.task('styles', function () {
  return sass('themes/cnab/static/sass/styles.scss', {style: 'compressed'})
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination + '/css'))
    .pipe(gulp.dest('themes/cnab/static/css/'))
    .pipe(notify({message: 'Styles compiled.'}));
});


// Images
gulp.task('images', function () {
  return streamqueue({objectMode: true},
    gulp.src('themes/cnab/static/img/**/*{.jpg, .png, .gif}')
      .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
      .pipe(notify({message: 'Images minifed.'})),
    gulp.src('themes/cnab/static/img/**/*')
      .pipe(notify({message: 'Images moved.'}))
      .pipe(gulp.dest(destination + '/img'))
  )
});


// Clean
gulp.task('clean', function () {
  return del([
    destination + '/**/*'
  ], {force: true});
});



// 'gulp' default task to build the site assets
gulp.task('default', ['styles', 'images']);

// 'gulp watch' to watch for changes during dev
gulp.task('watch', function () {

  gulp.watch('themes/cnab/static/sass/**/*.scss', ['styles']);

  livereload.listen();

  gulp.watch([destination + '/**', destination + '/**']).on('change', livereload.changed);
});