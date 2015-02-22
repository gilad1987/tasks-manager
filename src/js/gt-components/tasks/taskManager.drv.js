
(function (angular) {

    function GtPlayerDirective()
    {

        return  {
            templateUrl: 'src/js/gt-components/tasks/taskDirective.tpl.html',
            scope: {
                tasks: '=tasks'
            },
            //controllerAs:'AudioCtrl',
            //controller: [GtPlayerDirectiveController],
            link:function(scope,element,attrs){
                console.log(scope.tasks);
            }
        };
    }

    angular.module('gt-tasks').directive('gtTaskManager',[GtPlayerDirective]);

})(angular);