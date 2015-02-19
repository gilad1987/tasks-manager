(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-components/tasks/category.tpl.html",
    "<div class=\"box none-border\">\n" +
    "    <div class=\"box\">new task</div>\n" +
    "    <div class=\"box child\">child task</div>\n" +
    "\n" +
    "    <div\n" +
    "            ng-include=\"'src/js/gt-components/tasks/task.tpl.html'\">\n" +
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
    "    תת משימה\n" +
    "</div>");
}]);
})();
