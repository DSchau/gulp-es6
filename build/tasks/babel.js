import babel from 'gulp-babel';

export default function(gulp, { src, outputDir }) {
  return function() {
    return gulp.src(src.js)
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(gulp.dest(outputDir));
  };
};
