(function () {


    function TasksController()
    {
        this.uniqueId = function(){
            var min,max;
            min=0; max=9999;

            return (Math.floor(Math.random() * (max - min + 1)) + min);

        };

        this.tasksCategories = [
            {},
            {}
        ];
    }

    angular.module('TasksManager').controller('TasksController',[TasksController]);

})();