var gulp = require("gulp");

gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web180506\\day33"));
});