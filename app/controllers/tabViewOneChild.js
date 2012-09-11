// this is the exported function that opens the controller and displays
// the main window
exports.openMainWindow = function(_tab) {
  _tab.open($.child_window);
}