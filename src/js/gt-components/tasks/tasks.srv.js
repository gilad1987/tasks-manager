(function () {

    function TasksService()
    {
        var tasks = [];

        //this.setFormatTime = function(_boolean){
        //    params.format_time = _boolean;
        //};

        function Task(id,name,description,parent)
        {
            this.id = id ? id : null;
            this.name = name ? name : null;
            this.description = description ? description :null;
            this.done = false;
            this.parent = parent ? parent : null;
            this.tasks = [];
        }

        for(var i=0; i<50; i++){

        }

        this.$get = function(){
            return {
                get:function(){
                    return tasks;
                }
            };
        }
    }

    angular.module('gt-tasks').provider('TasksService',[TasksService]);

})();