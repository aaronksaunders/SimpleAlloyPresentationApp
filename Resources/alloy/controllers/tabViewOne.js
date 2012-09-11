function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.__alloyId4 = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Tab View One",
        id: "__alloyId4"
    }), "Window", null), $.__views.open_button = A$(Ti.UI.createButton({
        title: "Open Child Window",
        id: "open_button"
    }), "Button", $.__views.__alloyId4), $.__views.__alloyId4.add($.__views.open_button), $.__views.tab_one = A$(Ti.UI.createTab({
        window: $.__views.__alloyId4,
        id: "tab_one",
        title: "Tab View One"
    }), "Tab", null), $.addTopLevelView($.__views.tab_one), _.extend($, $.__views), $.open_button.addEventListener("click", function(e) {
        console.debug("in open_button click event handler");
        var tabViewOneChildController = Alloy.getController("tabViewOneChild");
        tabViewOneChildController.openMainWindow($.tab_one);
    }), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;