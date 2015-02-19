(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-components/tasks/category.tpl.html",
    "<div class=\"box none-border\">\n" +
    "    <div class=\"box\">new task - cat</div>\n" +
    "    <div class=\"box child\">child task - cat</div>\n" +
    "\n" +
    "\n" +
    "    <div\n" +
    "            ng-repeat=\"task in taskCategory.tasks\"\n" +
    "            ng-include=\"'src/js/gt-components/tasks/task.tpl.html'\">\n" +
    "\n" +
    "\n" +
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
  $templateCache.put("src/js/gt-components/tasks/task.tpl.html",
    "<div class=\"box\" ng-class=\"{child:isChild()}\">\n" +
    "New task template {{task.name}}\n" +
    "</div>");
}]);
})();
