$(function() {
	$("img.lazy").lazyload({ 
	    effect: "fadeIn",
	    threshold : 100,
    	onerror:function(obj,settings){
    		obj.lazyload(settings);
        }
	}).removeClass("lazy");
	$(document).ajaxStop(function(){
	    $("img.lazy").lazyload({ 
	        effect: "fadeIn",
	        threshold : 100,
	        onerror:function(obj,settings){
	        	obj.lazyload(settings);
	        }
	    }).removeClass("lazy");
	});
	$(document).ajaxError(function(event, jqxhr, settings, exception){
		var page = $('#itemPage').val();
		var productNum = $('#productNum').val();
		$(window).unbind('.jscroll').removeData('jscroll'); 
		$(".jscroll-next").parent().remove();
		if(page < 1){
		  var img = _ctx+'/images/fresh/sfj2_icon2.png';
		  $(".jscroll-loading").html('<div class="load-more server_exce" id="no_product_id"><a href="javascript:void(0);"><img src="'+img+'"></a></div><div class="nostore_con"><div class="nostore_contop">正在马不停蹄的为您上架商品</div></div>');
		}else if(page >= 1 && productNum >0){
			$('.jscroll-loading').css('text-align','center').css('padding','10px').html('<a href="javascript:void(0);" id="click-load" style="color:#000000;">没有更多</a>');
		}
		$('.load-more').hide();
		//$('.nostore_con').hide();
		
	});
	$(".jscroll").jscroll({
	    loadingHtml: '<div class="load-more" style="text-align: center;font-size:0.554em;color:#969696;margin-top:0.5em;padding-bottom:1em;">努力加载中...</div>',
	    nextSelector: 'a.jscroll-next:last',
	    autoTrigger:true,
	    callback:function(obj){
	    	$(".jscroll-next").parent().remove();
	    }
	});
});	
