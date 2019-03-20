var destination = process.env.GULP_DESTINATION || 'static';

// Load plugins
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  git = require('gulp-git'),
  streamqueue = require('streamqueue');

  sass.compiler = require('node-sass');


// Styles
gulp.task('styles', function () {
  return gulp.src('themes/cnab/static/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('themes/cnab/static/css/'))
    .pipe(gulp.dest(destination + '/css'));
});


// Images
gulp.task('images', function () {
  return streamqueue({objectMode: true},
    gulp.src('themes/cnab/static/img/**/*{.jpg, .png, .gif}')
      .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))),
    gulp.src('themes/cnab/static/img/**/*')
      .pipe(gulp.dest(destination + '/img'))
  )
});


// Clean
gulp.task('clean', function () {
  return del([
    'public',
    'content/docs/'
  ], {force: true});
});


// Clone Docs for Hugo
gulp.task('clonedocs', function(cb) {
  git.clone('https://github.com/flynnduism/cnab-spec', {args: './content/docs', quiet: false}, function(err) {
    // handle err
    cb(err);
  });
});
gulp.task('clone-index', function() {
  return gulp.src('content/docs/000-index.md',)
  .pipe(rename('index.md'))
  .pipe(gulp.dest('content/docs'))
});
gulp.task('clonedel', function () {
  return del([
    'content/docs/CONTRIBUTING.md',
    'content/docs/README.md'
  ]);
});
gulp.task('clone', gulp.series('clean', 'clonedocs', 'clonedel'), function() { });


// Copy
gulp.task('copy', function () {
  return gulp.src('themes/cnab/static/fonts/*')
    .pipe(gulp.dest(destination + '/fonts'));
});
gulp.task('copyall', function () {
  return gulp.src('static/**/*')
    .pipe(gulp.dest('public/'));
});


// 'gulp' default task to build the site assets
gulp.task('default', gulp.series('clone', 'styles', 'images', 'copy'), function() { });

// 'gulp watch' to watch for changes during dev
gulp.task('watch', function () {

  gulp.watch('themes/cnab/static/sass/**/*.scss', gulp.series('styles'));

  livereload.listen();

  gulp.watch([destination + '/**', destination + '/**']).on('change', livereload.changed);
});