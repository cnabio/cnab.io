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
    .pipe(gulp.dest('themes/cnab/static/css/'))
    .pipe(gulp.dest(destination + '/css'))
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


// Copy
gulp.task('copy', function () {
  return gulp.src('themes/cnab/static/fonts/*')
    .pipe(gulp.dest(destination + '/fonts'))
    .pipe(notify({message: 'Fonts moved.'}));
});
gulp.task('copyall', function () {
  return gulp.src('static/**/*')
    .pipe(gulp.dest('public/'))
    .pipe(notify({message: 'Copied all.'}));
});


// Clean
gulp.task('clean', function () {
  return del([
    destination + '/**/*'
  ], {force: true});
});


// 'gulp' default task to build the site assets
gulp.task('default', ['styles', 'images', 'copy']);

// 'gulp watch' to watch for changes during dev
gulp.task('watch', function () {

  gulp.watch('themes/cnab/static/sass/**/*.scss', ['styles']);

  livereload.listen();

  gulp.watch([destination + '/**', destination + '/**']).on('change', livereload.changed);
});