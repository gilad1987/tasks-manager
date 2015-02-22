
(function (angular) {


    function GtTaskDirective(RecursionHelper)
    {

        return  {
            templateUrl: 'src/js/gt-tasks-manager/gt-task.tpl.html',
            scope: {
                task: '=task'
            },
            controller:function(){

            },
            compile: function(element) {
                element.css('background','#' + (function co(lor){   return (lor +=
                    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
                && (lor.length == 6) ?  lor : co(lor); })(''));
                return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){

                    // Define your normal link function here.
                    // Alternative: instead of passing a function,
                    // you can also pass an object with
                    // a 'pre'- and 'post'-link function.
                });
            }
        };
    }

    angular.module('GtTasksManager').directive('gtTask',['RecursionHelper',GtTaskDirective]);

})(angular);