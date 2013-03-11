'use strict';

var path = require('path'),
	lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function (connect, point) {
	return connect.static(path.resolve(point));
}

var platform = process.platform;

var gruntInitDir = (platform === 'win32' || platform === 'win64' ?
	process.env.HOMEDRIVE + process.env.HOMEPATH + '\\.grunt-init' : // Windows
	process.env.HOME + '/.grunt-init');  // unix/osx
console.log(gruntInitDir);

module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		copy: {
			libs : {
				files : [
					{
						expand: true,
						cwd: gruntInitDir +'/lib/bundle/',
						src : ['**'], 
						dest : 'lib/'
					}
				]
			},
			img : {
				files : [
					{
						// images required for bootstrap
						expand : true,
						cwd: 'lib/bootstrap/img/',
						src : ['*'],
						dest : 'public/img/'
					},
					{
						// any images for this site
						expand : true,
						cwd : 'img/',
						src : ['**/*.*'],
						dest : 'public/img/'
					},
					{
						// favicon
						'public/favicon.ico' : 'favicon.ico'
					}
				]
			},
			js : {
				files : [
					{
						expand : true,
						cwd : 'js/',
						src : ['**/*.js'],
						dest : 'public/js'
					}
				]
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				// ensure required load order
				src : [	'lib/jquery-1.9.1.js',
						'lib/**/*.js'],
				dest : 'public/js/lib-min.js'
			}
		},

		jade : {
			compile : {
				options : {
					pretty : true
				},
				files : [
					{
						expand: true,
						dest: 'public/',
						cwd: 'view',
						src:['**/*.jade'],
						rename : function(destBase, destPath) {
							return destBase + destPath.replace(/\.jade$/, '.html');
						}
					}
				]
			}
		},

		connect: {
			livereload: {
				options : {
					port : 3003,
					base : 'public',
					middleware: function(connect, options) {
						return [lrSnippet, folderMount(connect, './public')];
					}
				}
			}
		}, 

		regarde: {
			dev : {
				files: ['view/**/*.jade', 'js/*.js', 'stylesheets/**/*.*', 'img/**/*.*'],
				tasks: ['rebuild-sources', 'livereload']
			}
		},

		less : {
			dev: {
				options : {
					paths : ['lib/bootstrap/less', 'app']
				},
				files : {
					'public/css/main.css' : 'stylesheets/main.less'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-livereload');

	grunt.registerTask('rebuild-sources', ['copy', 'concat', 'jade', 'less']);
	grunt.registerTask('default', ['rebuild-sources', 'livereload-start', 'connect', 'regarde']);

}