(function () {

    function TasksService()
    {
        var tasks = [];

        /**
         *
         * @param id
         * @param name
         * @param description
         * @param parent
         * @constructor
         */
        function Task(id,name,description,parent)
        {
            this.id = id ? id : null;
            this.name = name ? name : null;
            this.description = description ? description :null;
            this.done = false;
            this.parent = parent ? parent : null;
            this.tasks = [];
        }

        function getNew(id,name,description,parent){
            return new Task(id,name,description,parent);
        }

        for(var i=0; i<50; i++){

        }

        function add(parentToAdd,newTask){
            if(!(parentToAdd.tasks instanceof Array)){
                parentToAdd.tasks = [];
            }
            parentToAdd.tasks.push(newTask);
            return newTask;
        }

        function remove(task){
            if(!task.parent){
                return false;
            }

            var i,parentTaskLength;
            parentTaskLength = task.parent.tasks.length;

            for(i=0; i<parentTaskLength; i++){
                if(task.parent.tasks[i] === task ){
                    delete parent.tasks[i];
                    break;
                }
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