(function(module) {
try { module = angular.module("bizbuzim"); }
catch(err) { module = angular.module("bizbuzim", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/js/components/gt.tabs/gt.tabs.tpl.html",
    "<div class=\"box gt-tabs\">\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"tab in GtTabsCtrl.tabs\"\n" +
    "            ng-class=\"{active:GtTabsCtrl.isActiveTab(tab.url)}\"\n" +
    "            ng-click=\"GtTabsCtrl.onClickTab(tab)\">{{tab.title}}</li>\n" +
    "    </ul>\n" +
    "    <div id=\"mainView\">\n" +
    "        <div ng-include=\"GtTabsCtrl.currentTab\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();
