module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/helpers.css': 'src/main.scss'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/helpers.min.css': 'dist/helpers.css'
        }
      }
    },
    watch: {
      styles: {
        files: ['src/**/*.scss'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['sass', 'cssmin']);
};
