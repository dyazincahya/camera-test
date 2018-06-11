import { ImageCacheItBase } from './image-cache-it.common';
export declare class ImageCacheIt extends ImageCacheItBase {
    picasso: com.squareup.picasso.Picasso;
    private builder;
    nativeView: org.nativescript.widgets.ImageView;
    constructor();
    createNativeView(): androidwidgetImageView;
    initNativeView(): void;
    private getResourceId(res?);
    private setPlaceHolder();
    private setErrorHolder();
    borderRadius: any;
    borderWidth: any;
    borderLeftWidth: any;
    borderRightWidth: any;
    borderBottomWidth: any;
    borderTopWidth: any;
    borderBottomLeftRadius: any;
    borderBottomRightRadius: any;
    borderTopLeftRadius: any;
    borderTopRightRadius: any;
    private getImage(src);
    clearItem(): void;
    private setBorderAndRadius();
    private setAspectResize();
    private resetImage(reload?);
}
