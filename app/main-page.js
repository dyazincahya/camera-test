var gv                  = require("./gVar");

var observable          = require("data/observable");
var enums               = require("ui/enums");
var imageSource         = require("image-source");
var fs                  = require("tns-core-modules/file-system");

var camera              = require("nativescript-camera");
var bitmapFactory       = require("nativescript-bitmap-factory");

var fresco              = require("nativescript-fresco");
var imagePipeLine       = fresco.getImagePipeline();

var frame               = require("ui/frame");

var 
    context = new observable.Observable(),
    data =[], 
    page, 
    listView;

function resizeImage(imgS)
{
    /*let bmp = bitmapFactory.create(imgS.width, imgS.height);
    bmp.dispose(function(b) {
        b.insert(imgS);
        let preSized = b.resizeMax(800); //1024
        let sbmp = bitmapFactory.create(preSized.size.width, preSized.size.height);
        sbmp.dispose(function(s) {
            s.insert(imgS);
            let resizedImageSource = s.toImageSource();
            let saved = resizedImageSource.saveToFile(path, enums.ImageFormat.jpeg);
            console.log(saved);
        });
    });*/

    var folder = fs.knownFolders.documents();
    var path = fs.path.join(folder.path, "notification_img.png");

    var image = imgS; // some imageSource
    // console.dir(image);
    var bmp = bitmapFactory.create(400, 400);
    // console.dir(bmp); //ok
    const tes = imageSource.fromFile(image.android);
    bmp.asBitmap(bitmapFactory.makeMutable(imageSource)).dispose(function(b) {
        // console.dir(b); //ok
        b.insert(image.android);
        
        // ## Max dimension. Respects aspect ratio.
        var b2 = b.resizeMax(800);
        console.dir(b2);
        var thumb_image = b2.toImageSource();
        console.log("thumb_image");
        console.log(thumb_image);

        let saved = thumb_image.saveToFile(path,enums.ImageFormat.jpeg);
        cosnole.log("saved");
        cosnole.log(saved);
        if (saved) {
            console.log("tersimpan");
            /*// ## Use resized image
            var item = new Observable();
            item.set("thumb", thumb_image);
            item.set("uri", "notification_img_" + counter + ".png");
            imageItems.push(item);*/
        }
    });
}

exports.onLoaded = function (args) {
    page = args.object;

    context.set("totalPic", gv.data.length);
    console.dir(gv.data.length);
    listView = page.getViewById("img-list");

    page.bindingContext = context;
}; 

exports.takeNow = function()
{
    var isAvailable = camera.isAvailable();
    camera.requestPermissions();
    camera.takePicture({ 
        width: 500, 
        height: 500, 
        keepAspectRatio: true, 
        saveToGallery: true 
    }).then(function (imageAsset) {
        gv.data.push({img : imageAsset.android});
        frame.topmost().navigate("list-page");
    }).catch(function (err) {
        console.log("Error -> " + err.message);
    });

    /*context.set("totalPic", data.length);
    console.dir(data);*/
};

exports.abc = function() {
    frame.topmost().navigate("list-page");
}