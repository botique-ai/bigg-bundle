import {createCompiler} from "../utils/createCompiler";
import {onBundleCompleted} from "../utils/onBundleCompleted";
import {log} from "gulp-util";

export function bundleAndWatch(options) {
  const compiler = createCompiler(options);

  compiler['plugin']('invalid', () => {
    log('------------------------------------------');
    log('===> Change detected. Re-bundling...');
    log('------------------------------------------');
  });

  log('------------------------------------------');
  log('===> Creating bundle...');
  log('------------------------------------------');

  compiler.watch({}, onBundleCompleted);
}