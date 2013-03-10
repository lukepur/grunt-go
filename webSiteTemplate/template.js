'use strict';

exports.description = 'Create a web site using Twitter Bootstrap and jquery.';

exports.notes = 'More information on this template will go here later.' +
				' Let\'s get it working first.';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {
	// Get user inputs required - keep as short as possible
	// to keep the project creation a fast process.
	init.process({}, [
		{
			name: 'name',
			message: 'What would you like to call your site?'
		}
	], function(err, props) {

		// copy lib bundle
		var files = init.filesToCopy(props);

		init.copyAndProcess(files, props);

		// Create the package JSON
		init.writePackageJSON('package.json', {
	      	name: props.name,
	      	description : 'TODO',
	      	version: '0.0.1',
	      	node_version: '>= 0.8.0',
	      	dependencies : {
	      		'express' : '~3.1.0'
	      	},
	      	devDependencies: {
	      		'grunt' : '~0.4.0',
		        'grunt-contrib-jshint': '~0.1.1',
		        'grunt-contrib-concat': '~0.1.2',
		        'grunt-contrib-uglify': '~0.1.1',
		        'grunt-contrib-watch': '~0.2.0',
		        'grunt-contrib-clean': '~0.4.0',
		        'grunt-contrib-copy' : '~0.4.0',
		        'grunt-contrib-less' : '~0.5.0',
		        'grunt-contrib-jade' : '~0.5.0',
		        'grunt-contrib-livereload' : '~0.1.2',
		        'grunt-regarde' : '~0.1.1',
		        'grunt-contrib-connect' : '~0.2.0',
		        'gruntacular' : '~0.2.0'
	      	},
	    });
	});
}