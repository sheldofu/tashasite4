module.exports = function(grunt) {  
 
 grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/main.css': 'main.scss'       // 'destination': 'source'
      }
    }
  },

  watch: {
    scripts: {
      files: ['*.scss'],
      tasks: ['sass'],
      options: {
        spawn: false,
      },
    },
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass','watch']);

}