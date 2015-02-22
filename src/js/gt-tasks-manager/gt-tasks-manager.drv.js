
(function (angular) {

    function GtTasksManagerDirective()
    {

        return  {
            templateUrl: 'src/js/gt-tasks-manager/gt-tasks-manager.tpl.html',
            scope: {
                tasks: '=tasks'
            },
            link:function(scope,element,attrs){

            }
        };
    }

    angular.module('GtTasksManager').directive('gtTasksManager',[GtTasksManagerDirective]);

})(angular);