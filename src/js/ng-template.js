(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-tasks-manager/add-task.tpl.html",
    "<div class=\"add-task-modal-wrapper ltr\">\n" +
    "    <h2>Add New Task</h2>\n" +
    "    <label>Name:</label>\n" +
    "    <input name=\"name\" value=\"\">\n" +
    "\n" +
    "\n" +
    "</div>");
}]);
})();

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
    "        <button class=\"btn btn-primary glyphicon glyphicon-plus btn-xs add-task-btn\" ng-click=\"GtTaskCtrl.openModalToAddTask(task)\"></button>\n" +
    "        <button class=\"btn btn-danger glyphicon glyphicon-minus btn-xs add-task-btn\" ng-click=\"GtTaskCtrl.remove(task)\"></button>\n" +
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
