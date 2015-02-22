
(function (angular) {

    function GtTasksManagerDirective()
    {

        return  {
            templateUrl: 'src/js/gt-components/tasks/gtTasksManager.tpl.html',
            scope: {
                tasks: '=tasks'
            },
            link:function(scope,element,attrs){

            }
        };
    }

    angular.module('gt-tasks').directive('gtTasksManager',[GtTasksManagerDirective]);

})(angular);