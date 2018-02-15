module.exports = function( grunt ) {
	
	// Dynamically load npm tasks	
	require('load-grunt-tasks')(grunt);
		
	grunt.initConfig( {			
		pkg: grunt.file.readJSON( 'package.json' ),
							       
        concat : {
			dist : {
				src : ['project/src/settings.js', 
					'project/src/svg.js', 
					'project/src/chart.js', 
					'project/src/radix.js', 
					'project/src/transit.js', 
					'project/src/aspect.js',
					'project/src/zodiac.js',
					'project/src/animation/timer.js',
					'project/src/animation/animator.js',  										
					'project/src/utils.js'],
				dest : 'project/build/<%= pkg.name %>.js' 
			}
		},

		qunit : {
			files : ['project/test/*.html']
		},

		jshint : {
			// define the files to lint
			files : ['gruntfile.js', 'project/src/<%= pkg.name %>.js'],
			options : {	
				"-W099": true, // disable: Mixed spaces and tabs.
				"-W014": true, // disable: Bag line breaking    				
			}
		},

		uglify : {
			options : {
				// the banner is inserted at the top of the output
				banner : '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
			},
			dist : {
				files : {
					'project/build/<%= pkg.name %>.min.js' : ['<%= concat.dist.dest %>']
				}
			}
		},
      	
      	watch: {
  			scripts: {
    			files: [
    				 "project/src/*.js",
    				 "project/src/animation/*.js",          			 
    			],
    			tasks: [ 'dev' ],
    			options: {
      				spawn: true,
    			},
  			},
		}			    	   	    	   
	});
	
	grunt.registerTask( 'default', [
		"dev",
  		"watch"
	]);	
	grunt.registerTask('dev', ['jshint', 'concat']);
	grunt.registerTask('build', ['concat', 'uglify', 'qunit']);
	grunt.registerTask('test', ['qunit']);	
};