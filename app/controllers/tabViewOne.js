$.open_button.addEventListener("click", function(e) {
  console.debug("in open_button click event handler");

  // load the tabViewOneChild controller and call the index method
  var tabViewOneChildController = Alloy.getController('tabViewOneChild');

  // pass in the tab to give navigation and back button
  tabViewOneChildController.openMainWindow($.tab_one);

}); 