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
    "    <div\n" +
    "        ng-repeat=\"task in taskCategory.tasks\"\n" +
    "        ng-include=\"'src/js/gt-components/tasks/task.tpl.html'\">\n" +
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
  $templateCache.put("src/js/gt-components/tasks/task-wrapper.tpl.html",
    "<div class=\"box none-border\">\n" +
    "    <div class=\"box\"\n" +
    "         ng-include=\"'src/js/gt-components/tasks/task.tpl.html'\">\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"box child\"\n" +
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
