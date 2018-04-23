var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); 
var cssnext = require('cssnext'); 
var precss = require('precss');
var processors = [ autoprefixer, cssnext, precss ]
// 打包单独css文件
gulp.task('css', function () {
    gulp.src('../src/styles/components/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(cleanCSS({
          inline: ['none']
        }))
        .pipe(rename(function (path) {
          console.log(path)
          path.dirname +=  `/${path.basename}`;
          path.basename =  `index`;
        }))
        .pipe(gulp.dest('../lib'));
});
// 打包总css
gulp.task('cssAll', function () {
  gulp.src('../src/styles/qianliui.less')
      .pipe(less())
      .pipe(postcss(processors))
      .pipe(cleanCSS({
        inline: ['none']
      }))
      .pipe(gulp.dest('../lib'));
});


// 拷贝字体文件
// gulp.task('fonts', function () {
//     gulp.src('../src/styles/common/iconfont/fonts/*.*')
//         .pipe(gulp.dest('../dist/styles/fonts'));
// });

// gulp.task('default', ['css', 'fonts']);
gulp.task('default', ['css', 'cssAll']);
