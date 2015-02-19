(function () {

    function CategoriesTaskService()
    {
        var categories,Category;

        //this.setFormatTime = function(_boolean){
        //    params.format_time = _boolean;
        //};

        function Category(){
            console.log(this);
            this.id = null;
            this.parent_id = null;
            this.name = null;
            this.parent = null;
            this.childrens = [];
        }

        function getNew(){
            return new Category();
        }

        this.$get = function(){
            return {
                get:function(key){

                },
                set:function(parent,new_category){

                },
                getNew:getNew
            };
        }
    }

    angular.module('tasks').provider('CategoriesTaskService',[CategoriesTaskService]);

})();