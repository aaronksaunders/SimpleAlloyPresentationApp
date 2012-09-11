function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.__alloyId6 = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Tab View Two",
        id: "__alloyId6"
    }), "Window", null), $.__views.tabViewTwo = A$(Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Tab View Two",
        id: "tabViewTwo"
    }), "Tab", null), $.addTopLevelView($.__views.tabViewTwo), _.extend($, $.__views), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;