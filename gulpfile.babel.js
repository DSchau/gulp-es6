import gulp from 'gulp';
import LoadTasks from 'load-tasks';
import path from 'path';

import buildConfig from './build/config';

const { babel, copy } = new LoadTasks(path.resolve('./build/tasks'))(gulp, buildConfig);

gulp.task('babel', babel);
gulp.task('copy:src', copy.src);

gulp.task('copy', ['copy:src']);

gulp.task('default', ['copy', 'babel']);
