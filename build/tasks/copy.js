import path from 'path';

export default function(gulp, config) {
  return {
    src() {
      return gulp.src([
          path.resolve('./package.json')
        ])
        .pipe(gulp.dest(config.outputDir));
    }
  };
};
