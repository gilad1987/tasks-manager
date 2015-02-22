
(function (angular) {

    function GtTaskDirective()
    {

        return  {
            templateUrl: 'src/js/gt-components/tasks/gtTask.tpl.html',
            scope: {
                task: '=task'
            },
            controller:function(){

            },
            link:function(scope,element,attrs){
console.log(element)
            }
        };
    }

    angular.module('gt-tasks').directive('gtTask',[GtTaskDirective]);

})(angular);