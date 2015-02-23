
(function (angular) {


    function GtTaskDirective(RecursionHelper,TasksService)
    {

        function GtTaskController($scope, $element){

            this.add = function(parentTask){
                var newTask;

                newTask = TasksService.getNew(null,'na1123123123123123123me','de123sc',parentTask);
                TasksService.add(parentTask,newTask);
            }

            this.delete = function(task){
                TasksService.remove(task);

            }

        }

        return  {
            templateUrl: 'src/js/gt-tasks-manager/gt-task.tpl.html',
            scope: {
                task: '=task'
            },
            controller: ['$scope','$element',GtTaskController],
            controllerAs: 'GtTaskCtrl',
            compile: function(element) {
                //element.css('background-color','#'+Math.floor(Math.random()*16777215).toString(16));
                return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){

                    // Define your normal link function here.
                    // Alternative: instead of passing a function,
                    // you can also pass an object with
                    // a 'pre'- and 'post'-link function.
                });
            }
        };
    }

    angular.module('GtTasksManager').directive('gtTask',['RecursionHelper','TasksService',GtTaskDirective]);

})(angular);