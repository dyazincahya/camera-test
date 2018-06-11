"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
exports.imageUriProperty = new view_1.Property({
    name: 'imageUri'
});
exports.placeHolderProperty = new view_1.Property({
    name: 'placeHolder'
});
exports.errorHolderProperty = new view_1.Property({
    name: 'errorHolder'
});
exports.resizeProperty = new view_1.Property({
    name: 'resize'
});
exports.stretchProperty = new view_1.Property({
    name: 'stretch'
});
var ImageCacheItBase = (function (_super) {
    __extends(ImageCacheItBase, _super);
    function ImageCacheItBase() {
        return _super.call(this) || this;
    }
    return ImageCacheItBase;
}(view_1.View));
exports.ImageCacheItBase = ImageCacheItBase;
exports.imageUriProperty.register(ImageCacheItBase);
exports.placeHolderProperty.register(ImageCacheItBase);
exports.errorHolderProperty.register(ImageCacheItBase);
exports.resizeProperty.register(ImageCacheItBase);
exports.stretchProperty.register(ImageCacheItBase);
//# sourceMappingURL=image-cache-it.common.js.map