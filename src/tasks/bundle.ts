import {createCompiler} from "../utils/createCompiler";
import {onBundleCompleted} from "../utils/onBundleCompleted";
import {log} from "gulp-util";

export function bundle(options) {
  return new Promise((resolve, reject) => {
    const compiler = createCompiler(options);

    log('------------------------------------------');
    log('===> Creating bundle...');
    log('------------------------------------------');
    compiler.run((err, stats) => {
      onBundleCompleted(err, stats);
      if (err) {
        reject(err);
      }
      else {
        resolve(stats);
      }
    });
  })
}