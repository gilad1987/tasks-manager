
(function (angular) {


    function GtTaskDirective(RecursionHelper,TasksService,modal)
    {
        /**
         *
         * @param $scope
         * @param $element
         * @constructor
         */
        function GtTaskController($scope, $element){
            this.remove = $scope.api.remove;
            this.openModalToAddTask = $scope.api.openModalToAddTask;
        }

        return  {
            templateUrl: 'src/js/gt-tasks-manager/gt-task.tpl.html',
            scope: {
                task: '=task',
                api:'=api'
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

    angular.module('GtTasksManager').directive('gtTask',['RecursionHelper','TasksService','$modal',GtTaskDirective]);

})(angular);