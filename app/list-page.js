var gv                  = require("./gVar");
var observable          = require("data/observable");
var frame               = require("ui/frame");

var context = new observable.Observable(), page;

exports.onLoaded = function (args) {
    page = args.object;

    context.set("totalPic", gv.data.length);
    context.set("itms", gv.data);

    page.bindingContext = context;
}; 

exports.goBack = function() {
    frame.topmost().navigate("main-page");
}