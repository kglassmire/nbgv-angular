var gulp = require('gulp');
var nbgv = require('nerdbank-gitversioning')

gulp.task('default', function() {
    console.log("just printing version for sanity check...");
    
    nbgv.getVersion()
    .then(r => console.log(r))
    .catch(e => console.error(e));
    
    return nbgv.setPackageVersion();
});