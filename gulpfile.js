var gulp = require('gulp'),
    inject = require("gulp-inject"),
    html2js = require('gulp-html2js'),
    concat = require('gulp-concat');

var SCRIPTS_SRC = [
    'components/jquery/dist/jquery.js',
    'components/angular/angular.js',
    'components/angular-ui-router/release/angular-ui-router.js',
    'components/angular-bootstrap/ui-bootstrap-tpls.js',

    'src/js/**/*.services.module.js',
    'src/js/**/*.directives.module.js',
    'src/js/**/*.controllers.module.js',

    'src/js/*.module.js',
    'src/js/**/*.module.js',


    'src/js/**/*.srv.js',
    'src/js/*.srv.js',

    'src/js/**/*.constants.js',
    'src/js/*.constants.js',

    'src/js/**/*.drv.js',
    'src/js/*.drv.js',

    'src/js/**/*.ctrl.js',
    'src/js/*.ctrl.js',

    'src/js/ng-template.js',
    'src/js/**/*.module.config.js',

    'src/js/*.js',
    'src/js/**/*.js',
    '!src/js/**/*.test.js',


    'src/js/angular.bootstrap.js'
];

var STYLES_SRC = [
    'components/bootstrap/dist/css/bootstrap.css',
    'src/css/*.css',
    'src/css/**/*.css',
    'src/js/**/*.css'
];

var NG_HTML_TEMPLATES_SRC =[
    'src/js/**/*.html',
    'src/ng-templates/*.tpl.html',
    'src/ng-templates/**/*.tpl.html'
];

var ANGULAR_MODULE_NAME = 'TasksManager';

var VERSION = (function(){
    var min,max;
    min=0; max=9999;

    return (Math.floor(Math.random() * (max - min + 1)) + min);

})();

/* ------------------------------------- include resource to html --------------------------------------------*/

// must in html fro Scripts     <!-- inject:js --><!-- endinject -->
// must in html fro Css         <!-- inject:css --><!-- endinject -->

gulp.task('js_css_injector:developer', function() {

    var options = {
        addRootSlash:false,
        transform: function (filepath, file, i, length) {
            var tag;

            if(filepath.indexOf('.css') != -1){
                tag = "<link rel='stylesheet' href='<filename>'>";
            }
            if(filepath.indexOf('.js') != -1){
                tag = "<script src='<filename>'></script>";
            }

            return tag.replace("<filename>",'../'+filepath+'?v='+VERSION);
        }
    };

    var resources = SCRIPTS_SRC.concat(STYLES_SRC);

    gulp.src('src/index.html')
        .pipe(inject(gulp.src(resources,{read: false}),options))
        .pipe(gulp.dest("src"));
});

/* ------------------------------------- templates:developer --------------------------------------------*/

gulp.task('templates:developer', function() {
    gulp.src(NG_HTML_TEMPLATES_SRC)
        .pipe(html2js({
            outputModuleName: ANGULAR_MODULE_NAME,
            useStrict: true
        }))
        .pipe(concat('ng-template.js'))
        .pipe(gulp.dest('src/js'))
})
