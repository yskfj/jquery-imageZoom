jquery-imageZoom
================

シンプルな画像ズームjQueryプラグインです  
A simple, lightweight jQuery plugin for image zoom.

aタグで拡大画像を指定するタイプが多いので、画像自体にアクションを付けられるようにしました。  
そのため、元画像をaタグで囲ってもそのクリックを阻害しません。  

## Installation

かならずjQueryの読み込みのあとでこのライブラリを読み込むようにしてください  
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
#### zoomAreaId
Default value: 'imageZoom_zoomArea'  
マウスホバー時に表示されるズームエリアのIDです。もしズームエリアの表示をカスタマイズしたい場合は、このIDに合わせてCSSを記載してください  
The ID of created image zoom element. Of course you can use your own, but make sure you update the CSS accordingly.

#### zoomAreaWidth
Default value: false 
ズームアリアの幅です。 falseを指定した場合は元画像の表示サイズと同じサイズになります  
Width of created image zoom element. False is same as original image element width.

#### zoomAreaHeight
Default value: false  
ズームアリアの高さです。 falseを指定した場合は元画像の表示サイズと同じサイズになります  
Height of created image zoom element. False is same as original image element height.

#### zoomAreaZindex
Default value: 100  
ズームエリアのz-indexです。重なりがうまく調整できない場合に変更してください。  
z-index of created image zoom element.

#### zoomAreaOffsetX
Default value: 10  
ズームエリアの表示位置です。デフォルトでは元画像の表示場所の10px右側に表示されます。  
Created image zoom element X offset from the small image. (always positive to move the zoom element more on the right)

#### zoomAreaOffsetY
Default value: 0  
ズームエリアの表示位置です。デフォルトでは元画像の表示場所と同じ高さに表示されます。  
Created image zoom element Y offset from the small image. (always positive to move the zoom element more on the bottom)

#### zoomAreaBorderColor
Default value: '#ccc'  
ズームエリアの枠線の色です。色を付けたくない場合は 'transparent' としてください。  
Border Color of created image element.

#### lens
Default value: true  
ホバー時に表示されるオーバーレイの表示を制御します。falseの時には表示されません。  
if set to false,the small lens element over the original image won't show.

#### lensId
Default value: 'imageZoom_lensArea'
ホバー時に表示されるオーバーレイのIDです。カスタマイズしたい場合はそのIDに合わせてCSSを記載してください。  
The ID of small lens element. Of course you can use your own, but make sure you update the CSS accordingly.

#### lensOpacity
Default value: 0.3  
ホバー時に表示されるオーバーレイの透過度を指定します。  
Opacity of small lens element.

#### lensZindex
Default value: 200  
ホバー時に表示されるオーバーレイのz-indexの値です。重なりがうまく調整できない場合に指定します。  
z-index of small lens element.

#### lensColor
Default value: '#3695d7'  
ホバー時に表示されるオーバーレイの色です。  
Color of small lens element.

#### lensBorderColor
Default value: '#000'  
ホバー時に表示されるオーバーレイの枠線の色です。表示させたくない場合は'transparent'をセットします。
Border Color of small lens element. if won't show, set to 'transparent'.

#### parent
Default value: 'body'  
ズームエリアとオーバーレイのHTMLを挿入する親ノードを指定します。CSSのセレクタ形式で記載できます。  
デフォルトではbodyタグの直下に挿入されます。  
Image zoom element and Small lens element prepend to this object.
ex.  $(element).prependTo('body');

#### preloadMessage
Default value: 'Image Loading...'  
ズームエリアの画像の読み込み中に表示されるテキストです。日本語であれば'画像読み込み中'などとすると良いと思います。  
This message shows before image loading on zoom area.

#### errorMessage
Default value: 'Error while Loading Image.'  
ズームエリアの画像の読み込みに失敗した際に表示されるテキストです。  
This message shows on zoom area, if large image loading error occured.

#### largeImageUrl
Default value: false  
ズームエリアに表示される画像を元画像と異なるものにしたい場合に、その画像の画像パスを指定してください。  
if you want to show other large image, set this value.

#### zoomRatio
Default value: 3  
ズームエリアのズーム倍率となります。標準では3倍で表示されます。  
increse this value, zoom more up.

#### debugMode
Default value: false  
デバグ用の設定です。trueにすることで多くのメッセージがコンソールに表示されます。  
Set true to more infomation on browser console.


## Restrictions

このプラグインでは、1画面内に複数のズームをセットすることはできません。  
2つの画像にセットした際には2つめに指定したものが有効になり、1つめの指定はキャンセルされます。  
イメージギャラリーなどで画像を切り替えならがセットするような場合は、画像の切り替えタイミングで、都度セットするようにしてください。

タッチデバイスではホバーイベントが発生しないため、動作しません

## Author

[Yosuke Fujii](https://github.com/yskfj)

