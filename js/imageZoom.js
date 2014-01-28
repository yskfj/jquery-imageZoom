/*
 *  Image Zoom 1.0 - jQuery plugin
 *  written by Yosuke Fujii
 *
 *  Copyright (c) 2014 Yosuke Fujii
 *  Licensed under the MIT (MIT-LICENSE.txt)
 *
 *  Built for jQuery library
 *  http://jquery.com
 *
 */
;(function($){
	$.fn.imageZoom = function(options){

		// if touch device returns false ( do nothing );
		if(window.ontouchstart !== undefined) return false;

		// valuables
		var obj;
		var img = new Image();
		var imageLoaded = false;
		var imageFound = true;
		var visible = false;
		var timeout;                 // setTImeout object
		var obj_l=0, obj_t=0;        // original view area offset left top
		var obj_x=0, obj_y=0;        // original view area width width height
		var curObj_l=0, curObj_t=0;  // lens area offset left top
		var curObj_x=0, curObj_y=0;  // lens area width height
		var zoom_l=0, zoom_t=0;      // zoom view image offset left top
		var zoom_x=0, zoom_y=0;      // zoom view image width height
		var zoom_ax=0, zoom_ay=0;    // zoom area size width height
		var over = false;            // mouse over mode
		var cur_l=0, cur_t=0;        // cursor position left top

		// load options
		options = $.extend({}, $.fn.imageZoom.defaults, options);

		return this.each(function(){

			obj = this;

			// works only for images
			var tagName = obj.tagName.toLowerCase();
			if(tagName == 'img'){
				var p = $(obj).offset();
				obj_l = p.left;
				obj_t = p.top;
				obj_x = $(obj).width();
				obj_y = $(obj).height();
				zoom_x = obj_x * options.zoomRatio;
				zoom_y = obj_y * options.zoomRatio;
				zoom_l = obj_l + obj_x + options.zoomAreaOffsetX;
				zoom_t = obj_t + options.zoomAreaOffsetY;
				zoom_ax = options.zoomAreaWidth ? options.zoomAreaWidth : obj_x;
				zoom_ay = options.zoomAreaHeight ? options.zoomAreaHeight : obj_y;
				curObj_x = zoom_ax / options.zoomRatio;
				curObj_y = zoom_ay / options.zoomRatio;
				log(obj);
				log('obj_lt: '+obj_l+','+obj_t+'  obj_xy: '+obj_x+','+obj_y+'  zoom_xy: '+zoom_x+','+zoom_y+'  curObj_xy: '+curObj_x+','+curObj_y);

				if(options.largeImageUrl){
					img.src = options.largeImageUrl;
				}else{
					img.src = $(obj).attr('src');
				}
				img.width = zoom_x;
				img.height = zoom_y;
				$(img).error(function(){ imageFound = false; });
				img.onload = function(){ imageLoaded = true; };
				$('body').off('.imageZoom');
				$('body').on('mousemove.imageZoom',function(event){move(event);});
			}else{
				log('Object tagname must be img.');
			}
		}); // elements.each

		// private mothods
		function log(str){
			if(options.debugMode) console.log('jQuery imageZoom: '+ str);
		}
		function hide(){
			over = false;
			visible = false;
			$('#'+ options.zoomAreaId).remove();
			$('#'+ options.lensId).remove();
		}
		function check(event){
			if(!imageFound){
				$('#'+ options.zoomAreaId+' div').html(options.errorMessage);
			} else {
				if(imageLoaded){
					$('#'+ options.zoomAreaId).html('').append(img);
					clearTimeout(timeout);
				} else {
					timeout = setTimeout(function(event){check(event);},200);
				}
			}
		}
		function show(event){
			visible = true;
			var html = '<div id="'+ options.zoomAreaId +'" style="position:absolute;overflow:hidden;border:1px solid '+options.zoomAreaBorderColor+';background-color:#fff;left:'+zoom_l+'px;top:'+zoom_t+'px;width:'+(zoom_ax -2)+'px;height:'+(zoom_ay -2)+'px;z-index:'+options.zoomAreaZindex+';"><div style="padding:45% 20%;text-align:center;font-size:'+(zoom_ax/20)+'px;color:#777;font-weight:bold;">'+ options.preloadMessage +'</div></div>';
			if(options.lens) html += '<div id="'+ options.lensId +'" style="position:absolute;overflow:hidden;content:\'\';cursor:move;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity='+(options.lensOpacity *100)+');opacity:'+options.lensOpacity+';width:'+(curObj_x -2)+'px;height:'+(curObj_y -2)+'px;border:1px solid '+options.lensBorderColor+';background-color:'+options.lensColor+';z-index:'+options.lensZindex+';"></div>';
			$(html).prependTo(options.parent);
			$(img).css({'position':'absolute','top':'0','left':'0'});
			check();
		} // show
		function move(event){
			cur_l = event ? event.pageX - obj_l : 0;
			cur_t = event ? event.pageY - obj_t : 0;

			if( cur_l < 0 || cur_t < 0 || cur_l > obj_x || cur_t > obj_y ){
				// cursor position out area
				over = false;
				hide();
			}else{
				over = true;
				if(!visible) show();
				// target image movement
				fpl = ( cur_l - (curObj_x / 2) ) < 0 ? 0 : cur_l - (curObj_x / 2);
				fpt = ( cur_t - (curObj_y / 2) ) < 0 ? 0 : cur_t - (curObj_y / 2);
				fpl = fpl > ( obj_x - curObj_x ) ? obj_x - curObj_x : fpl;
				fpt = fpt > ( obj_y - curObj_y ) ? obj_y - curObj_y : fpt;
				zxl = fpl / obj_x * zoom_x;
				zyt = fpt / obj_y * zoom_y;
				$('#'+options.zoomAreaId+' img').css({'left':zxl*(-1),'top':zyt*(-1)});
				if(options.lens) $('#'+options.lensId).css({'left':obj_l+fpl,'top':obj_t+fpt});
				log('fpl,fpt: '+fpl+','+fpt+'  zxl,zyt: '+zxl+','+zyt);
			}

		} // move

	}; // $.fn.imageZoom

	// public methods
	$.imageZoom = {};
	$.imageZoom.destroy = function(){
		// remove event listener
	};

	// default
	$.fn.imageZoom.defaults = {
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

})(jQuery);