/* global process*/

const gulp = require('gulp');

const clean = require('gulp-clean');
const eslint = require('gulp-eslint');
const connect = require('gulp-connect');
const firebaseTools = require('firebase-tools');

gulp.task('clean', () => {
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('lint', ['clean'], () => {
	return gulp.src(['**/*.js', '!node_modules/**'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('copy', () => {
	gulp.src('*/**', { cwd: 'src/' })
		.pipe(gulp.dest('dist'));
	gulp.src('index.html', { cwd: 'src/' })
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['lint'], () => {
	gulp.start('copy');
	gulp.src('bootstrap/dist/css/bootstrap.css', { cwd: 'node_modules/' })
		.pipe(gulp.dest('dist/assets/css/lib'));
	gulp.src('bootstrap/dist/css/bootstrap-reboot.min.css',
		{ cwd: 'node_modules/' })
		.pipe(gulp.dest('dist/assets/css/lib'));

	[
		'firebase',
		'jquery',
		'systemjs',
		'tether',
		'bootstrap',
		'systemjs-plugin-babel',
		'sammy',
		'handlebars',
		'popper',
	].forEach((name) => {
		gulp.src(name + '/**', { cwd: 'node_modules/' })
		.pipe(gulp.dest('dist/assets/js/lib/' + name));
	});
});

gulp.task('connect', ['build'], () => {
	connect.server({
		name: 'Dist App',
		root: 'dist',
		port: 8000,
		livereload: true,
	});
});

gulp.task('watch', ['connect'], () => {
	gulp.watch('src/**/*', ['copy']);
});

gulp.task('default', ['watch']);

gulp.task('deploy', ['build'], () => {
	return firebaseTools.deploy({
		project: 'mycuisine-6f6e4',
		token: process.env.FIREBASE_TOKEN,
		cwd: 'dist',
	});
});
