(function () {

    function TasksService()
    {
        var tasks = [];

        //this.setFormatTime = function(_boolean){
        //    params.format_time = _boolean;
        //};

        function Task(id,name,description)
        {
            this.id = id ? id : null;
            this.name = name ? name : null;
            this.description = description ? description :null;
        }

        this.$get = function(){
            return {};
        }
    }

    angular.module('tasks').provider('TasksService',[TasksService]);

})();