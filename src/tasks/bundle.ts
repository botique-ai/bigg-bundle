import {createCompiler} from "../utils/createCompiler";
import {onBundleCompleted} from "../utils/onBundleCompleted";
import {log} from "gulp-util";

export function bundle(options) {
  const compiler = createCompiler(options);

  log('------------------------------------------');
  log('===> Creating bundle...');
  log('------------------------------------------');
  compiler.run(onBundleCompleted);
}