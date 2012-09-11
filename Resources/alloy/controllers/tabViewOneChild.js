function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    exports.openMainWindow = function(_tab) {
        _tab.open($.child_window);
    }, $.__views.child_window = A$(Ti.UI.createWindow({
        id: "child_window",
        title: "Child Window"
    }), "Window", null), $.addTopLevelView($.__views.child_window), $.__views.__alloyId5 = A$(Ti.UI.createLabel({
        text: "Child Window Label",
        top: "20",
        id: "__alloyId5"
    }), "Label", $.__views.child_window), $.__views.child_window.add($.__views.__alloyId5), _.extend($, $.__views), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;