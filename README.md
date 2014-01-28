jquery-imageZoom
================

A simple, lightweight jQuery plugin for image zoom.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.imageZoom.js"></script>
```

## Simple Usage

```javascript
$('.imageObjectClass').imageZoom();
```

## Configuration

```javascript
var options = {
    zoomAreaId: 'imageZoom_zoomArea',
    zoomAreaWidth: false,
    zoomAreaHeight: false,
    zoomAreaZindex: 100,
    zoomAreaOffsetX: 10,
    zoomAreaOffsetY: 0,
    zoomAreaBorderColor: '#ccc',
    lens: true,
    lensId: 'imageZoom_lensArea',
    lensOpacity: 0.3,
    lensZindex: 200,
    lensColor: '#3695d7',
    lensBorderColor: '#000',
    parent: 'body',
    preloadMessage: 'Image Loading...',
    errorMessage: 'Error while Loading Image.',
    largeImageUrl: false,
    zoomRatio: 3,
    debugMode: false
};
$('.imageObjectClass').imageZoom(options);
```
** zoomAreaId
Default value: 'imageZoom_zoomArea'
The ID of created image zoom element. Of course you can use your own, but make sure you update the CSS accordingly.

** zoomAreaWidth
Default value: false
Width of created image zoom element. False is same as original image element width.

** zoomAreaHeight
Default value: false
Height of created image zoom element. False is same as original image element height.

** zoomAreaZindex
Default value: 100
z-index of created image zoom element.

** zoomAreaOffsetX
Default value: 10
Created image zoom element X offset from the small image. (always positive to move the zoom element more on the right)

** zoomAreaOffsetY
Default value: 0
Created image zoom element Y offset from the small image. (always positive to move the zoom element more on the bottom)

** zoomAreaBorderColor
Default value: '#ccc'
Border Color of created image element.

** lens
Default value: true
if set to false,the small lens element over the original image won't show.

** lensId
Default value: 'imageZoom_lensArea'
The ID of small lens element. Of course you can use your own, but make sure you update the CSS accordingly.

** lensOpacity
Default value: 0.3
Opacity of small lens element.

** lensZindex
Default value: 200
z-index of small lens element.

** lensColor
Default value: '#3695d7'
Color of small lens element.

** lensBorderColor
Default value: '#000'
Border Color of small lens element. if won't show, set to 'transparent'.

** parent
Default value: 'body'
Image zoom element and Small lens element prepend to this object.
ex.  $(element).prependTo('body');

** preloadMessage
Default value: 'Image Loading...'
This message shows before image loading on zoom area.

** errorMessage
Default value: 'Error while Loading Image.'
This message shows on zoom area, if large image loading error occured.

** largeImageUrl
Default value: false
if you want to show other large image, set this value.

** zoomRatio
Default value: 3
increse this value, zoom more up.

** debugMode
Default value: false
Set true to more infomation on browser console.




## Author

[Yosuke Fujii](https://github.com/yskfj)

