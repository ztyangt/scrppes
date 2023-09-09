module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-screeps');
  grunt.initConfig({
    screeps: {
      options: {
        email: 'yang2210670@163.com',
        token: 'affacc5f-f1cd-4e1c-9bfb-6238bc2ddadc',
        branch: 'default',
        //server: 'season'
      },
      dist: {
        src: ['src/*.js', 'src/**/*.js']
      }
    }
  });
}