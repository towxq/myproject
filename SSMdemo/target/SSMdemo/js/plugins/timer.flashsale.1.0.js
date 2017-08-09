(function ($, window, document, undefined) {

  var pluginName = "observeTimer";
  var defaults = {
	nowTime:0,
	endTime:0
  };

  function Plugin(elem, options) {
    this.$field = $(elem);
    this.arrowTimer = true;
    this.options = $.extend(true, {}, defaults, options); //we want deep extend
    this._defaults = defaults;
    this.init();
  }

  Plugin.prototype = {
    init: function () {
    	if(!(this.options.id)){
    		return false;
    	}
    	var nowtime = Number(this.options.nowTime) + 1000; //当前时间
    	this._timechange(this.options.id,nowtime);
    	this.$field.show();
    },
    _timechange:function(id,nowTime){
  		var theDays = Number(this.options.endTime*1000);
  	    var seconds = (theDays - nowTime) / 1000;
  	    var minutes = Math.floor(seconds / 60);
  	    var hours = Math.floor(minutes / 60);
  	    var days = Math.floor(hours / 24);
  	    var CDay = days;
  	    var CHour = hours % 24;
  	    var CMinute = minutes % 60;
  	    var CSecond = parseInt(seconds % 60);
  	    //console.log(CDay+","+CHour+","+CMinute+","+CSecond);
  	    if (CMinute < 10) {
  	        CMinute = "0" + CMinute;
  	    }
  	    if (CHour < 10) {
  	        CHour = "0" + CHour;
  	    }
  	    if (CSecond < 10) {
  	        CSecond = "0" + CSecond;
  	    }
  		if(nowTime>=this.options.endTime*1000){
  			CDay = 0;
  			CHour = 00;
  			CMinute = 00;
  			CSecond = 00;
  		}
  	    //显示倒计时
  	    $("#flash-day-" + id).html(CDay);
  	    $("#flash-hour-" + id).html(CHour);
  	    $("#flash-min-" + id).html(CMinute);
  	    $("#flash-sec-" + id).html(CSecond);
  	    if (CHour == '00' && CMinute == '00' && CSecond == '00') {
  	    	if(this.options.flag == "start"){
  	    		this.$field.html('<span style="color:red;">已开始</span>');
  	    	}
  	    	if(this.options.flag == "end"){
  	    		this.$field.html('<span style="color:red;">已结束</span>');
  	    	}
  	    } else{
  	    	var obj = this;
  	        setTimeout(function(){
  	        	obj._timechange( id, nowTime+1000);
  	        }, 1000);
  	    }
  	},
  	
  	_reset:function(){
		 this.options.totalCount = this.originalTotalCount;
		 console.log(this.options);
	},
  	
  	_destory:function(){
  		delete this;
  	}
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "yz_" + pluginName)) {
        $.data(this, "yz_" + pluginName, new Plugin(this, options));
      }
    });
  };

})(jQuery, window, document);