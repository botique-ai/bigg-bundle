import {log} from "gulp-util";

export function onBundleCompleted(err, stats) {
  if (err) {
    console.error('Failed to create bundle. Reason:');
    console.error(err.stack || err.message || err);
    process.exit(1);
  }

  log(stats.toString({
    chunks: false,
    colors: true
  }));

  log('------------------------------------------');
  log('===> Bundle created successfully');
  log('------------------------------------------');
}