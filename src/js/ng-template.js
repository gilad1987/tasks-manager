(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-components/tasks/task.tpl.html",
    "<div class=\"box none-border\">\n" +
    "    <div class=\"box\">\n" +
    "        {{data.name}}\n" +
    "        <span ng-click=\"data.add(data)\">add</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"box child none-border\"\n" +
    "         ng-repeat=\"data in data.tasks\"\n" +
    "         ng-include=\"'src/js/gt-components/tasks/task.tpl.html'\">\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-components/tasks/taskDirective.tpl.html",
    "<div\n" +
    "    ng-repeat=\"data in tasks track by $index\"\n" +
    "    ng-include=\"'src/js/gt-components/tasks/task.tpl.html'\">\n" +
    "</div>");
}]);
})();
