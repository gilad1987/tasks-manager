(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-components/tasks/gtTask.tpl.html",
    "<div class=\"box none-border\">\n" +
    "    <div class=\"box\">\n" +
    "        {{task.name}}\n" +
    "        <span ng-click=\"task.add(task)\">add</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div class=\"box child none-border\"-->\n" +
    "         <!--ng-repeat=\"task in task.tasks\"-->\n" +
    "         <!--gt-task task=\"task\">-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "    <div class=\"box child none-border\"\n" +
    "         ng-repeat=\"task in task.tasks\"\n" +
    "         ng-include=\"'src/js/gt-components/tasks/gtTask.tpl.html'\">\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/gt-components/tasks/gtTasksManager.tpl.html",
    "<div\n" +
    "    ng-repeat=\"data in tasks track by $index\" gt-task task=\"data\">\n" +
    "</div>");
}]);
})();
