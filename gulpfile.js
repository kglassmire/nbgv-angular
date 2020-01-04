var gulp = require('gulp');
var nbgv = require('nerdbank-gitversioning')

gulp.task('default', function() {
    nbgv.getVersion()
    .then(r => console.log(r))
    .catch(e => console.error(e));
    return nbgv.getVersion();
    //return nbgv.setPackageVersion();
});