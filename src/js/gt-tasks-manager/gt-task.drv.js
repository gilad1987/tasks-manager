
(function (angular) {


    function GtTaskDirective(RecursionHelper,TasksService,modal)
    {

        /**
         *
         * @param $scope
         * @param $modalInstance
         * @param parentTask
         * @constructor
         */
        function TaskModalController($scope, $modalInstance, parentTask){

        }



        /**
         *
         * @param $scope
         * @param $element
         * @constructor
         */
        function GtTaskController($scope, $element){

            var _this = this;

            this.openModalToAddTask = function(parentTask){

                modal.open({
                    templateUrl: 'src/js/gt-tasks-manager/add-task.tpl.html',
                    controller: ['$scope','$modalInstance','parentTask',TaskModalController],
                    //controllerAs: 'TaskModalController',
                    resolve: {
                        parentTask : function(){
                            return parentTask;
                        }

                    }
                });

            };

            /**
             *
             * @param parentTask
             * @param callbacks
             */
            this.add = function(parentTask, callbacks){
                var newTask;

                newTask = TasksService.getNew(null,'na1123123123123123123me','de123sc',parentTask);
                TasksService.add(parentTask,newTask);
            };

            /**
             *
             * @param task
             * @param callbacks
             */
            this.remove = function(task, callbacks){
                TasksService.remove(task);
            };

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

    angular.module('GtTasksManager').directive('gtTask',['RecursionHelper','TasksService','$modal',GtTaskDirective]);

})(angular);