(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-tasks-manager/gt-task.tpl.html",
    "<div class=\"box none-border\">\n" +
    "\n" +
    "    <div class=\"box\">\n" +
    "        {{task.name}}\n" +
    "        <span class=\"btn btn-primary glyphicon glyphicon-plus btn-xs add-task-btn\" ng-click=\"GtTaskCtrl.add(task)\"></span>\n" +
    "        <span class=\"btn btn-danger glyphicon glyphicon-minus btn-xs add-task-btn\" ng-click=\"GtTaskCtrl.delete(task)\"></span>\n" +
    "        <div class=\"clearfix\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"box child none-border\"\n" +
    "         ng-repeat=\"task in task.tasks\"\n" +
    "         gt-task task=\"task\">\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-tasks-manager/gt-tasks-manager.tpl.html",
    "<div\n" +
    "    ng-repeat=\"task in tasks track by $index\" gt-task task=\"task\">\n" +
    "</div>");
}]);
})();
