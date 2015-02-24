
(function (angular) {

    function GtTasksManagerDirective($timeout,modal,TasksService)
    {
        /**
         *
         * @param $scope
         * @param $modalInstance
         * @param parentTask
         * @constructor
         */
        function TaskModalController($scope, $modalInstance, parentTask, GtTaskDrvController){

            this.add = function(form){

                var formData = {};

                formData.name = form.name.$modelValue;
                formData.description = form.description.$modelValue;
                formData.isComplete = form.done.$modelValue;

                GtTaskDrvController.add(parentTask, formData);

            }


        }

        function GtTaskManagerController($scope, $element){

            var _this = this;

            this.openModalToAddTask = function(parentTask){

                modal.open({
                    templateUrl: 'src/js/gt-tasks-manager/add-task.tpl.html',
                    controller: ['$scope','$modalInstance','parentTask','GtTaskDrvController',TaskModalController],
                    controllerAs: 'TaskModalController',
                    resolve: {
                        parentTask : function(){
                            return parentTask;
                        },
                        GtTaskDrvController:function(){
                            return _this;
                        }

                    }
                });

            };


            /**
             *
             * @param parentTask
             * @param data
             * @param callbacks
             */
            this.add = function(parentTask, data, callbacks){
                var newTask;


                newTask = TasksService.getNew(data.name,data.description,data.isComplete,parentTask);
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

            if(typeof $scope.api == 'undefined'){
                $scope.api = {};
            }
            $scope.api.openModalToAddTask = this.openModalToAddTask;
            $scope.api.remove = this.remove;
        }






        return  {
            templateUrl: 'src/js/gt-tasks-manager/gt-tasks-manager.tpl.html',
            scope: {
                tasks: '=tasks',
                api: '=api'
            },
            controller: ['$scope','$element',GtTaskManagerController],
            controllerAs: 'GtTaskManagerCtrl',
            link:function(scope,element,attrs){}
        };
    }

    angular.module('GtTasksManager').directive('gtTasksManager',['$timeout','$modal','TasksService',GtTasksManagerDirective]);

})(angular);