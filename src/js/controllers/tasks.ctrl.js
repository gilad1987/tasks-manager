(function () {


    function TasksController()
    {
        this.uniqueId = function(){
            var min,max;
            min=0; max=9999;

            return (Math.floor(Math.random() * (max - min + 1)) + min);

        };

        this.tasksCategories = [
            {
                name:'a'
            },
            {
                name:'b',
                tasks:[{
                    name:'b1',
                    tasks:[{
                        name:'bb1'
                    },{
                        name:'bb2'
                    }]
                },{
                    name:'b2'
                }]
            }
        ];
    }

    angular.module('TasksManager').controller('TasksController',[TasksController]);

})();