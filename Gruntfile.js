module.exports = function(grunt) {
  
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserSync: {
			bsFiles: {
				src: 'stylesheets/*.css'
			},
			options: {
				server: {
					baseDir: './'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', 'browserSync');
};