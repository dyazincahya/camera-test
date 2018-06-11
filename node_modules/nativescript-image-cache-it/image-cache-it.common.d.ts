import { View, Property } from 'tns-core-modules/ui/core/view';
export declare const imageUriProperty: Property<ImageCacheItBase, string>;
export declare const placeHolderProperty: Property<ImageCacheItBase, string>;
export declare const errorHolderProperty: Property<ImageCacheItBase, string>;
export declare const resizeProperty: Property<ImageCacheItBase, string>;
export declare const stretchProperty: Property<ImageCacheItBase, Stretch>;
export declare class ImageCacheItBase extends View {
    constructor();
    imageUri: string;
    placeHolder: string;
    errorHolder: string;
    resize: string;
    stretch: Stretch;
}
export declare type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';
