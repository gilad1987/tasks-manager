(function () {

    function TasksService()
    {
        var tasks = [],
            counter = 0;

        /**
         *
         * @param id
         * @param name
         * @param description
         * @param isComplete
         * @param parent
         * @constructor
         */
        function Task(id,name,description,isComplete,parent)
        {
            this.id = id ? id : null;
            this.name = name ? name : null;
            this.description = description ? description :null;
            this.isComplete = isComplete ? isComplete :false;
            this.parent = parent ? parent : null;
            this.tasks = [];
        }

        /**
         *
         * @param name
         * @param description
         * @param isComplete
         * @param parent
         * @returns {TasksService.Task}
         */
        function getNew(name,description,isComplete,parent){
            return new Task(++counter,name,description,isComplete,parent);
        }

        /**
         *
         * @param parentToAdd
         * @param newTask
         * @returns newTask
         */
        function add(parentToAdd,newTask){
            if(!(parentToAdd.tasks instanceof Array)){
                parentToAdd.tasks = [];
            }
            parentToAdd.tasks.push(newTask);
            return newTask;
        }

        /**
         *
         * @param task
         * @returns {boolean}
         */
        function remove(task){

            if(!task.parent || (task.parent && !task.parent.tasks)){
                return false;
            }

            var taskIndex = task.parent.tasks.indexOf(task);
            if (taskIndex > -1) {
                task.parent.tasks.splice(taskIndex, 1);
            }

            return true;
        }

        this.$get = function(){
            return {
                get:function(){
                    return tasks;
                },
                getNew:getNew,
                add:add,
                remove:remove
            };
        }
    }

    angular.module('GtTasksManager').provider('TasksService',[TasksService]);

})();