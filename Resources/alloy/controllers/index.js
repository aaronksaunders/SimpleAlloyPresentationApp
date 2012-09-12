function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createTabGroup({
        id: "index"
    }), "TabGroup", null), $.__views.__alloyId1 = Alloy.getController("tabViewOne", {
        id: "__alloyId1"
    }), $.__views.index.addTab($.__views.__alloyId1.getViewEx({
        recurse: !0
    })), $.__views.__alloyId2 = Alloy.getController("tabViewTwo", {
        id: "__alloyId2"
    }), $.__views.index.addTab($.__views.__alloyId2.getViewEx({
        recurse: !0
    })), $.addTopLevelView($.__views.index), _.extend($, $.__views), $.index.open(), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;