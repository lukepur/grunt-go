grunt-go
========

A collection of grunt templates for different project types. For example, a basic website, an angular web app, or an express REST service.

References a common lib bundle for client-side javascript so all new projects have access to these by default.

Currently includes bootstrap (less and javascript files), jquery and kinetic.js (for HTML5 canvas magic).

By default, the grunt task will listen for changes in the app/ directory (excluding lib) and trigger:
	1. Javascripts concatenation
	2. less compilation to css
	3. jade compilation to html
	4. browser refresh

Installation
============

Use npm to install grunt and grunt-init
	(sudo) npm install grunt-cli grunt-init -g

Create a .grunt-init file in your home directory
	mkdir ~/.grunt-init

Clone grunt-go into this directory:
	cd ~/.grunt-init
	git clone git://github.com/lukepur/grunt-go.git .

Create a new project from a template
====================================

1. From the root of your new project directory:
	grunt-init <projectType>
projectType is simply the name of the directory of the type of project you want to scaffold from.

2. Enter the name of your new project and hit enter twice.

3. Install npm dependencies:
	(sudo) npm install

4. Start having your changes watched as you develop:
	grunt

5. Develop!

Still to come
=============
1. More project types
2. Deployment tasks
3. Testing tasks
4. Allow the removal of unneeded lib components
5. Lib versioning