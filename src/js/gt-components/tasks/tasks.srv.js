(function () {

    function TasksService()
    {
        var tasks = [];

        //this.setFormatTime = function(_boolean){
        //    params.format_time = _boolean;
        //};


        this.$get = function(){
            return {
                get: function(){
                    return tasks;
                }
            };
        }
    }

    angular.module('tasks').provider('TasksService',[TasksService]);

})();