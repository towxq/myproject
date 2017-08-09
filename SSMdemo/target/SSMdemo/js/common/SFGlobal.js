/*！
 * SFGlobal v1.0.2
 * Author xyh
 * Last Update : 16-12-29
 */
var _sf = null;
(function() {
	try {
		if(window.console && window.console.log) {
			console.log("%cSFGlobal v1.0.3", "color:green");
			console.log("%cAuthor xyh", "color:green");
			console.log("%cLast Update : 17-03-22", "color:green");
		}
	} catch(e) {}
})();
(function($, window, document) {
	"use strict";
	var _valid = function(opts) {
		this.init(opts);
	};
	_valid.prototype = {
		_regexs: new Array(),
		_clear: function() {
			this._regexs = new Array();
		},
		_removeByKey: function(_key) {
			var bln = false;
			try {
				for(var iy = 0; iy < this._regexs.length; iy++) {
					if(this._regexs[iy].key == _key) {
						this._regexs.splice(iy, 1);
						return true;
					}
				}
			} catch(e) {
				bln = false;
			}
			return bln;
		},
		_put: function(_key, _value) {
			if(this._regexs.length > 0) {
				this._removeByKey(_key);
			}
			this._regexs.push({
				key: _key,
				value: _value
			});
		},
		_get: function(_key) {
			try {
				for(var iy = 0; iy < this._regexs.length; iy++) {
					if(this._regexs[iy].key == _key) {
						return this._regexs[iy].value;
					}
				}
			} catch(e) {
				return false;
			}
			return false;
		},
		init: function(opts) {
			var _self = this;
			_self._put("digits", [/^\d+$/, "请填写数字"]);
			//纯字母
			_self._put("letters", [/^[a-z]+$/i, "请填写字母"]);
			_self._put("date", [/^\d{4}-\d{2}-\d{2}$/, "请填写有效的日期，格式:yyyy-mm-dd"]);
			_self._put("time", [/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, "请填写有效的时间，00:00到23:59之间"]);
			_self._put("email", [/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i, '请填写有效的邮箱']);
			_self._put("url", [/^(https?|s?ftp):\/\/\S+$/i, "请填写有效的网址"]);
			_self._put("qq", [/^[1-9]\d{4,}$/, "请填写有效的QQ号"]);
			_self._put("IDcard", [/^\d{6}(19|2\d)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)?$/, "请填写正确的身份证号码"]);
			//办公或家庭电话
			_self._put("tel", [/^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/, "请填写有效的电话号码"]);
			//移动电话
			_self._put("mobile", [/^1[34578]\d{9}$/, "请填写有效的手机号"]);
			_self._put("zipcode", [/^\d{6}$/, "请检查邮政编码格式"]);
			_self._put("chinese", [/^[\u0391-\uFFE5]+$/, "请填写中文字符"]);
			//用户名
			_self._put("username", [/^\w{3,12}$/, "请填写3-12位数字、字母、下划线"]);
			_self._put("realName", [/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/, "请填写真实姓名"]);
			//密码
			_self._put("password", [/^[\S]{6,16}$/, "请填写6-16位字符，不能包含空格"]);
		}
	};
	var _util = function(opts) {
		this.init(opts);
	};
	_util.prototype = {
		storage: {
			get: function(key) {
				if(window.sessionStorage) {
					var v = sessionStorage.getItem(key);
					return v;
				} else {
					var arg = key + "=";
					var alen = arg.length;
					var clen = document.cookie.length;
					var i = 0;
					while(i < clen) {
						var j = i + alen;
						if(document.cookie.substring(i, j) == arg)
							return getCookieVal(j);
						i = document.cookie.indexOf(" ", i) + 1;
						if(i == 0)
							break;
					}
					return null;
				}
			},
			set: function(key, value) {
				if(window.sessionStorage) {
					sessionStorage.setItem(key, value);
				} else {
					var today = new Date();
					var expiry = new Date(today.getTime() + 100000 * 24 * 60 * 60 * 1000);
					var curCookie = key + "=" + escape(value) +
						("; expires=" + expiry.toGMTString()) +
						("; path=/");
					document.cookie = curCookie;
				}
			},
			clear: function(key) {
				if(window.sessionStorage) {
					if(key) {
						sessionStorage.removeItem(key);
					} else {
						sessionStorage.clear();
					}
				} else {
					if(key) {
						var curCookie = key + "=1" +
							("; expires=-1") +
							("; path=/");
						document.cookie = curCookie;
					} else {
						var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
						if(keys) {
							for(var i = keys.length; i--;) {
								document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
							}
						}
					}
				}
			}
		},
		init: function(opts) {
			String.prototype.trim = function() {
				return this.replace(/(^\s*)|(\s*$)/g, "");
			};

			String.prototype.FormatTime = function() {
				return this.substring(0, 4) + "/" + this.substring(4, 6) + "/" + this.substring(6, 8) + " " + this.substring(8, 10) + ":" + this.substring(10, 12) + ":" + this.substring(12, 14);
			};

			Date.prototype.Format = function(fmt) { //author: meizz 
				var o = {
					"M+": this.getMonth() + 1, //月份 
					"d+": this.getDate(), //日 
					"h+": this.getHours(), //小时 
					"m+": this.getMinutes(), //分 
					"s+": this.getSeconds(), //秒 
					"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
					"S": this.getMilliseconds() //毫秒 
				};
				if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
				for(var k in o)
					if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				return fmt;
			};

			String.prototype.replaceAll = function(str, substr, replacement) {
				if(replacement === null) {
					replacement = '';
				}
				str = str.replace(new RegExp(substr, 'gm'), replacement);
				return str;
			};

			Number.prototype.add = function(arg) {
				var r1, r2, m, c, arg2 = this;
				try {
					r1 = arg.toString().split(".")[1].length;
				} catch(e) {
					r1 = 0;
				}
				try {
					r2 = arg2.toString().split(".")[1].length;
				} catch(e) {
					r2 = 0;
				}
				c = Math.abs(r1 - r2);
				m = Math.pow(10, Math.max(r1, r2));
				if(c > 0) {
					var cm = Math.pow(10, c);
					if(r1 > r2) {
						arg = Number(arg.toString().replace(".", ""));
						arg2 = Number(arg2.toString().replace(".", "")) * cm;
					} else {
						arg = Number(arg.toString().replace(".", "")) * cm;
						arg2 = Number(arg2.toString().replace(".", ""));
					}
				} else {
					arg = Number(arg.toString().replace(".", ""));
					arg2 = Number(arg2.toString().replace(".", ""));
				}
				return(arg + arg2) / m;
			};

			Number.prototype.sub = function(arg) {
				var r1, r2, m, n;
				try {
					r1 = arg.toString().split(".")[1].length;
				} catch(e) {
					r1 = 0;
				}
				try {
					r2 = this.toString().split(".")[1].length;
				} catch(e) {
					r2 = 0;
				}
				m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
				n = (r1 >= r2) ? r1 : r2;
				return((arg * m - this * m) / m).toFixed(n);
			};

			Number.prototype.mul = function(arg) {
				var m = 0,
					s1 = this.toString(),
					s2 = arg.toString();
				try {
					m += s1.split(".")[1].length;
				} catch(e) {}
				try {
					m += s2.split(".")[1].length;
				} catch(e) {}
				return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
			};

			Number.prototype.div = function(arg) {
				var t1 = 0,
					t2 = 0,
					r1, r2;
				try {
					t1 = this.toString().split(".")[1].length;
				} catch(e) {}
				try {
					t2 = arg.toString().split(".")[1].length;
				} catch(e) {}
				r1 = Number(this.toString().replace(".", ""));
				r2 = Number(arg.toString().replace(".", ""));
				return(r1 / r2) * Math.pow(10, t2 - t1);
			};
		}
	};
	_sf = function(opts) {
		this.init(opts);
	};
	_sf.prototype = {
		debug: false,
		path: "",
		ua: "",
		os: {
			ios: false,
			iphone: false,
			ipad: false,
			android: false,
			isBadAndroid: false,
			version: 0,
			height: 0,
			width: 0,
			wechat: {
				is: false,
				version: 0
			}
		},
		isWechat: function() {
			var wechat = this.ua.match(/(MicroMessenger)\/([\d\.]+)/i);
			if(wechat) { //wechat
				this.os.wechat = {
					is: true,
					version: wechat[2].replace(/_/g, '.')
				};
			}
			return false;
		},
		isAndroid: function() {
			var android = this.ua.match(/(Android);?[\s\/]+([\d.]+)?/);
			if(android) {
				this.os.android = true;
				this.os.version = android[2];

				this.os.isBadAndroid = !(/Chrome\/\d/.test(window.navigator.appVersion));
			}
			return this.os.android === true;
		},
		isIOS: function() {
			var iphone = this.ua.match(/(iPhone\sOS)\s([\d_]+)/);
			if(iphone) { //iphone
				this.os.ios = this.os.iphone = true;
				this.os.version = iphone[2].replace(/_/g, '.');
			} else {
				var ipad = this.ua.match(/(iPad).*OS\s([\d_]+)/);
				if(ipad) { //ipad
					this.os.ios = this.os.ipad = true;
					this.os.version = ipad[2].replace(/_/g, '.');
				}
			}
			return this.os.ios === true;
		},
		debugMsg: function(lab, msg, isError) {
			var _self = this;
			if(_self.debug) {
				if(!isError) {
					console.log(lab + "----" + msg);
				} else {
					console.log("%c" + lab + "----" + msg, "color:red");
				}
			}
		},
		stopClick: function(event) {
			var e = window.event || event;
			if(e.stopPropagation) {
				e.stopPropagation();
				e.preventDefault();
			} else {
				e.cancelBubble = true;
				window.event.returnValue = false;
			}
		},
		toastFlag: true,
		toastTimer: 0,
		toastInpBlurGo: true,
		showToast: function(opts) {
			var _self = this;
			if(_self.toastFlag) {
				_self.toastFlag = false;
				if(typeof(opts) == "undefined" || typeof(opts.msg) == "undefined") {
					_self.debugMsg("bind", "没有传提示消息：{msg:'xxxx'}", true);
					return false;
				}
				var type = opts.type || 0;
				var el = "";
				if(type == 0) {
					el = $('<div class="sf-toast"><div id="SFToast" class="sf-loader"><h1></h1></div></div>');
					el.find("h1").html(opts.msg);
				} else if(type == 1) {
					el = $('<div class="sf-toast"><div id="SFToast" class="sf-loader"><span class="sf-icon-loading" style="width: 1.216rem;"></span><h1></h1></div></div>');
					el.find("h1").html(opts.msg);
					if(opts.icon) {
						el.find(".sf-icon-loading").css("background", opts.icon);
					}
				} else {
					el = $('<div class="sf-toast"><div id="SFToast" class="sf-loader"><span class="sf-icon-loading"  style="width: 1.216rem;"></span></div></div>');
					el.css("width", "auto").css("margin-left", "-0.5867rem");
					el.find(".sf-icon-loading").css("margin", "0");
					if(opts.icon) {
						el.find(".sf-icon-loading").css("background", opts.icon);
					}
				}
				_self.hideToast();
				_self.showMask("background-color: transparent;");

				//控制所有input失去焦点
				if(_self.toastInpBlurGo){
					$("body input").blur();
				}

				$("body").append(el);

				//保证居中
				//$("#SFToast").css("width","auto");
				//var toastML = ($("#SFToast").width() + parseInt($("#SFToast").css("padding-left")) * 2) / 2;
				//$("#SFToast").css("margin-left","-" + toastML + "px");

				if(type == 0) {
					var t = opts.t || 3000;
					if(_self.toastTimer != 0) {
						clearTimeout(_self.toastTimer);
					}
					_self.toastTimer = setTimeout(function() {
						_self.hideToast();
					}, t);
				}
			}
		},
		hideToast: function(opts) {
			var _self = this;
			_self.toastFlag = true;
			_self.hideMask();
			var SFToast = $("#SFToast");
			if(SFToast.length > 0) {
				SFToast.remove();
			}
		},
		showMask: function(bg) {
			var mask = $("#mask")
			if(mask.length > 0) {
				mask.remove();
			}
			bg = bg || "background-color: #000;opacity: 0.4;";
			$("body").append("<div id=\"mask\" style=\"position: fixed;top: 0;bottom: 0;right: 0;left: 0;" + bg + "z-index: 9998;\"></div>");
		},
		hideMask: function() {
			var mask = $("#mask")
			if(mask.length > 0) {
				mask.remove();
			}
		},
		goPageBack: function(url) {
			var _self = this;
			var oldPage = $(".sf-page-old");
			if(oldPage.length > 0) {
				var curPage = $(".sf-page-active");
				var getTransition = function() {
					var curPageTransition = curPage.attr("page-animate");
					if(curPageTransition == "left") {
						return "right";
					} else if(curPageTransition == "right") {
						return "left";
					} else if(curPageTransition == "bottom") {
						return "top";
					} else {
						return "bottom";
					}
				}
				SF.goPage("", {
					id: oldPage.attr("id"),
					transition: getTransition(),
					cache: true
				});
			} else {
				window.location.href = this.path + url;
			}
		},
		goPage: function(url, opts) {
			if(typeof(opts) == "undefined") {
				window.location.href = this.path + url;
			} else {
				var _self = this;

				var buildPageHtml = function(page) {
					var tmpPage = $("#" + opts.id);
					if(tmpPage.length > 0) {
						tmpPage.remove();
					}
					var html = $('<div id="' + opts.id + '" class="sf-page"></div>');
					html.html(page);
					return html;
				}

				var animateJq = function(page, pageDefault, activeAnimate, pageAnimate) {
					var pageActive = $(".sf-page-active");

					var animateCss = {
						"position": "fixed",
						"z-index": "6",
						"display": "block"
					};
					pageActive.css(animateCss);
					page.css(animateCss);

					page.css(pageDefault);
					if($("#" + opts.id).length <= 0) {
						$("body").append(page);
					}

					var speed = opts.speed || 500;
					$(".sf-page").removeClass("sf-page-old").removeClass("sf-page-active");
					pageActive.animate(activeAnimate, speed, function() {
						pageActive.addClass("sf-page-old").removeClass("sf-page-active").removeAttr("style");
					});
					page.animate(pageAnimate, speed, function() {
						page.attr("page-animate", opts.transition).addClass("sf-page-active").removeAttr("style");
						if(opts.callback) {
							opts.callback();
						}
					});
				}

				var slideTop = function(page) {
					animateJq(page, {
						"top": $(window).height() + "px"
					}, {
						top: "-" + $(window).height() + "px"
					}, {
						top: "0px"
					});
				}
				var slideBottom = function(page) {
					animateJq(page, {
						"top": "-" + $(window).height() + "px"
					}, {
						top: $(window).height() + "px"
					}, {
						top: "0px"
					});
				}
				var slideLeft = function(page) {
					animateJq(page, {
						"left": $(window).width() + "px",
						"top": "0px"
					}, {
						left: "-" + $(window).width() + "px",
						top: "0px"
					}, {
						left: "0px",
						top: "0px"
					});
				}
				var slideRight = function(page) {
					animateJq(page, {
						"left": "-" + $(window).width() + "px",
						"top": "0px"
					}, {
						left: $(window).width() + "px",
						top: "0px"
					}, {
						left: "0px",
						top: "0px"
					});
				}

				var success = function(page) {
					if(opts.transition == "bottom") {
						slideBottom(page);
					} else if(opts.transition == "left") {
						slideLeft(page);
					} else if(opts.transition == "right") {
						slideRight(page);
					} else {
						slideTop(page);
					}
				}

				var goAjax = function() {
					_self.ajax({
						url: url,
						dataType: "html",
						type: "get",
						beforeSend_callback: function() {

						},
						success_callback: function(response) {
							var page = buildPageHtml(response);
							success(page);
						}
					});
				}
				if(typeof(opts.cache) == "undefined" || !opts.cache) {
					goAjax();
				} else {
					var page = $("#" + opts.id);
					if(page.length > 0) {
						success(page);
					} else {
						goAjax();
					}
				}
			}
		},
		/**
		 * @description 封装jq绑定事件
		 * @param {Document} el
		 * @param {String} handle
		 * @param {Function} handleback
		 */
		bind: function(el, handle, handleback) {
			var _self = this;
			if(typeof(el) == "undefined") {
				_self.debugMsg("bind", "没有传需要绑定的dom元素：el", true);
				return false;
			}
			if(typeof(handle) == "undefined") {
				_self.debugMsg("bind", "没有传需要绑定事件名称", true);
				return false;
			}
			if(typeof(handleback) == "undefined") {
				_self.debugMsg("bind", "没有传需要绑定事件回调函数", true);
				return false;
			}
			el = $(el);
			if(el.length > 0) {
				if(handle === "click" || handle.indexOf("tap") !== -1 || handle.indexOf("pan") !== -1 || handle.indexOf("pinch") !== -1 || handle.indexOf("press") !== -1 || handle.indexOf("rotate") !== -1 || handle.indexOf("swipe") !== -1) {
					handle = handle === "click" ? "tap" : handle;
					el.unbind(handle).hammer().bind(handle, function(event) {
						_self.stopClick(event);
						if(event.target == this) {
							handleback($(this), event);
						}
					});
				} else {
					el.unbind(handle).bind(handle, function(event) {
						_self.stopClick(event);
						if(event.target == this) {
							handleback($(this), event);
						}
					});
				}
			}
		},
		ajaxMap: {
			_ajaxs: new Array(),
			_clear: function() {
				this._ajaxs = new Array();
			},
			_removeByKey: function(_key) {
				var bln = false;
				try {
					for(var iy = 0; iy < this._ajaxs.length; iy++) {
						if(this._ajaxs[iy].key == _key) {
							this._ajaxs.splice(iy, 1);
							return true;
						}
					}
				} catch(e) {
					bln = false;
				}
				return bln;
			},
			_put: function(_key, _value) {
				if(this._ajaxs.length > 0) {
					this._removeByKey(_key);
				}
				this._ajaxs.push({
					key: _key,
					value: _value
				});
			},
			_get: function(_key) {
				try {
					for(var iy = 0; iy < this._ajaxs.length; iy++) {
						if(this._ajaxs[iy].key == _key) {
							return this._ajaxs[iy].value;
						}
					}
				} catch(e) {
					return false;
				}
				return false;
			}
		},
		/**
		 * @description 封装ajax绑定事件
		 * @param {Object} opts
		 * @param {String} opts.url 请求地址,必填
		 * @param {JSON} opts.data 请求参数，可选
		 * @param {String} opts.dataType 返回的数据类型，可选，默认json
		 * @param {String} opts.type 请求方式，可选，默认post
		 * @param {Boolean} opts.async 是否同步请求，可选，默认异步false
		 * @param {Boolean} opts.cache 是否缓存，可选，默认异步false
		 * @param {Function} opts.success_callback 请求成功的回调函数,必填
		 * @param {Function} opts.error_callback 请求失败的回调函数，可选
		 * @param {Function} opts.before_callback 请求代码开始的回调函数，可选
		 * @param {Function} opts.beforeSend_callback ajax before请求代码开始的回调函数，可选
		 * @param {Function} opts.after_callback 请求代码结束的回调函数，可选
		 * @param {String} opts.beforeTip 请求开始的提示Toast，可选
		 * @param {String} opts.successTip 请求成功时显示的Toast,可选
		 * @param {String} opts.errorTip 请求失败时显示的Toast,可选
		 * @param {Number} opts.ajaxToast 是否提示错误信息，可选，默认显示，1：不显示
		 */
		ajax: function(opts) {
			var _self = this;
			if(navigator.onLine){
				if(opts && opts.url) {
					if(typeof(opts.success_callback) == "undefined") {
						_self.debugMsg("ajax", "没有成功回调函数：success_callback", true);
						return false;
					}
					if(!_self.ajaxMap._get(opts.url)) {
						_self.ajaxMap._put(opts.url, "has");
						var timeout = opts.timeout || 5000;
						var url = opts.url || "";
						var data = opts.data || {
								v: 0
							};
						var dataType = opts.dataType || "json";
						var type = opts.type || "post";
						var ajaxToast = opts.ajaxToast || 0;
						var async = true;
						if(typeof(opts.async) == "undefined") {
							async = true;
						} else {
							async = opts.async;
						}
						var cache = false;
						if(typeof(opts.cache) == "undefined") {
							cache = false;
						} else {
							cache = opts.cache;
						}
						var successCallback = function(response) {
							var isCall = true;
							if(dataType == "json" && typeof(response.code) != "undefined" && response.code === -1) {
								_self.showToast({
									msg: response.msg
								});
								isCall = false;
							}
							if(isCall && typeof(opts.successTip) != "undefined" && typeof(opts.successTip) == "string") {
								_self.showToast({
									msg: opts.successTip
								});
							} else if(isCall && typeof(opts.successTip) != "undefined") {
								_self.showToast(opts.successTip);
							} else {
								_self.hideToast();
							}
							if(isCall && opts.success_callback) {
								opts.success_callback(response);
							}
							_self.ajaxMap._removeByKey(opts.url);
						};
						var errorCallback = function(xhr, type, errorThrown) {
							// && navigator.onLine && xhr.status !== 0
							if(ajaxToast === 0 && typeof(opts.errorTip) === "undefined") {
								if(xhr.statusText == "timeout") {
									_self.showToast({
										msg: "请求超时请您稍后再试!"
									});
								} else {
									_self.showToast({
										msg: "请求出现异常请您稍后再试!"
									});
								}
							}
							_self.debugMsg("ajax-error-xhr", JSON.stringify(xhr) + "----" + new Date().getTime(), true);
							_self.debugMsg("ajax-error-type", type + "----" + new Date().getTime(), true);
							_self.debugMsg("ajax-error-errorThrown", JSON.stringify(errorThrown) + "----" + new Date().getTime(), true);
							if(typeof(opts.errorTip) != "undefined" && typeof(opts.errorTip) == "string") {
								_self.showToast({
									msg: opts.errorTip
								});
							} else if(typeof(opts.errorTip) != "undefined") {
								_self.showToast(opts.errorTip);
							} else {
								_self.hideToast();
							}
							if(opts.error_callback) {
								opts.error_callback(xhr, type, errorThrown);
							}
							_self.ajaxMap._removeByKey(opts.url);
						};
						if(opts.before_callback) {
							opts.before_callback();
						}
						var jqAjax = $.ajax({
							type: type,
							url: opts.url,
							async: async,
							timeout: timeout,
							dataType: dataType,
							data: data,
							beforeSend: function() {
								if(opts.beforeTip) {
									_self.showToast({
										msg: opts.beforeTip,
										type: 1
									});
								}
								if(opts.beforeSend_callback) {
									opts.beforeSend_callback();
								}
							},
							success: successCallback,
							error: errorCallback
						});
						if(opts.after_callback) {
							opts.after_callback();
						}
					}
				} else {
					_self.debugMsg("ajax-error", "url=undefined----" + new Date().getTime(), true);
					_self.ajaxFlag = true;
					_self.ajaxUrl = "";
				}
			}else{
				_self.showToast({
					msg: "网络不给力呀"
				});
			}
		},
		valid: null,
		/**
		 * @description 验证
		 * @param {String} type 验证类型
		 * @param {String} val 需要验证的值
		 * @param {String} msg 提示信息,可选
		 */
		isTest: function(type, val, msg) {
			var _self = this;
			if(typeof(type) == "undefined" || typeof(val) == "undefined") {
				_self.debugMsg("isTest", "验证类型或要验证的值没有传！", true);
				return false;
			}
			if(type == "isNullStr") {
				var resu = false;
				if(typeof(val) == "undefined" || val == null || val == "" || val == '') {
					resu = true;
				}
				msg = "";
				return resu;
			} else {
				var regex = _self.valid._get(type);
				var resu = (regex[0].test(type));
				msg = msg || regex[1];
				if(!resu && msg) {
					_self.showToast({
						msg: msg
					});
				}
				return resu;
			}
		},
		util: null,
		/**
		 * @description 懒加载
		 * @param {Function} ajax_error
		 * @param {String} className 绑定的图片className,可选,默认img.lazy
		 */
		lazyload: function(ajax_error, className) {
			var _self = this;
			if(typeof($.fn.lazyload) == "undefined" || $.fn.lazyload == null) {
				_self.debugMsg("lazyload", "没有引入依赖JQuery.lazyload!", true);
				return false;
			}
			if(typeof(ajax_error) == "undefined") {
				_self.debugMsg("lazyload", "失败回调ajax_error必填!", true);
				return false;
			}
			className = className || "img.lazy";
			$(className).lazyload({
				effect: "fadeIn",
				threshold: 1000,
				failurelimit: 50,
				onerror: function(obj, settings) {
					obj.lazyload(settings);
				}
			});
			$(document).ajaxStop(function() {});
			$(document).ajaxError(function(event, jqxhr, settings, exception) {
				if(ajax_error) {
					ajax_error(event, jqxhr, settings, exception);
				}
			});
		},
		wxInit: false,
		wxReady: false,
		wxTimer: 0,
		wxResponse: null,
		initWX: function(readyCallback) {
			var _self = this;
			if(_self.os.wechat.is) {
				var _wxFun = function(readyCallback) {
					this.init(readyCallback);
				}
				_wxFun.prototype = {
					init: function(readyCallback) {
						var data_url = location.href.split('#')[0].toString();
						_self.ajax({
							url: _self.path + '/weixin/share',
							data: "url=" + encodeURIComponent(data_url),
							success_callback: function(response) {
								wx.config({
									debug: false,
									appId: response.appid,
									timestamp: response.signMap.timestamp,
									nonceStr: response.signMap.nonceStr,
									signature: response.signMap.signature,
									jsApiList: [
										'checkJsApi',
										'onMenuShareTimeline',
										'onMenuShareAppMessage',
										'getLocation'
									]
								});
								wx.ready(function() {
									if(readyCallback) {
										readyCallback(response);
									}
									wx.error(function(res) {
										_self.debugMsg("initWX-error", res.errMsg, true);
									});
									_self.wxReady = true;
								});
								_self.wxResponse = response;
							}
						});
						_self.wxInit = true;
					}
				}
				if(!_self.wxInit) {
					var wxFun = new _wxFun(readyCallback);
				} else {
					var wxTimeFun = function(readyback) {
						if(_self.wxTimer != 0) {
							clearTimeout(_self.wxTimer);
							_self.wxTimer = 0;
						}
						if(_self.wxReady) {
							if(readyback) {
								readyback(_self.wxResponse);
							}
						} else {
							_self.wxTimer = setTimeout(function() {
								wxTimeFun(readyback);
							}, 5);
						}
					}
					wxTimeFun(readyCallback);
				}
			}
		},
		wxShare:function(opts){
			var _self = this;
			_self.initWX(function(ajaxresponse) {
				var _link = "";
				if(typeof(opts) != "undefined"){
					if(typeof(opts._link) != "undefined"){
						_link = opts._link;

					}else{
						_link = ajaxresponse.signMap.url;

						if(_link.indexOf('fromheikewechat') < 0) {
							if(_link.indexOf("?") > 0|| _link.indexOf("%3F") > 0){
								_link = _link + '&fromheikewechat=1';
							}else{
								_link = _link + '?fromheikewechat=1';
							}
						}
					}
					wx.onMenuShareTimeline({
						title: opts._title,
						link: _link,
						imgUrl: opts._imgUrl
					});

					wx.onMenuShareAppMessage({
						title: opts._title,
						desc: opts._desc,
						link: _link,
						imgUrl: opts._imgUrl
					});
				}
			});
		},
		geoloc: {
			SF: null,
			AMapKey: "",
			wxLoc: function(success_callback, error_callback) {
				SF.initWX(function(ajaxresponse) {
					wx.getLocation({
						success: function(res) {
							success_callback(res);
						},
						fail: function(res) {
							error_callback(res);
						}
					});
				});
			},
			AMapLoc: function(success_callback, error_callback) {
				AMap.service('AMap.Geolocation', function() {
					var amapLocObj = new AMap.Geolocation({
						enableHighAccuracy: true, //是否使用高精度定位，默认:true
						timeout: 10000, //超过6秒后停止定位，默认：无穷大
						convert: true,
						noIpLocate: true,
						maximumAge: 0

					});
					amapLocObj.getCurrentPosition();
					AMap.event.addListener(amapLocObj, 'complete', success_callback); //返回定位信息
					AMap.event.addListener(amapLocObj, 'error', error_callback); //返回定位出错信息
				});
			},
			AMapGetAddress: function(lat, lng, callback) {
				AMap.service('AMap.Geocoder', function() {
					var geocoder = new AMap.Geocoder({
						radius: 1000,
						extensions: "all"
					});
					geocoder.getAddress(lng + ',' + lat, function(status, result) {
						if(status === 'complete' && result.info === 'OK') {
							var resu_component = result.regeocode.addressComponent;
							var building = resu_component.building;
							if(building == null || building == "") {
								if(result.regeocode.pois != null && result.regeocode.pois.length >= 1) {
									building = result.regeocode.pois[0].name;
								}
							}
							callback({
								lat: lat,
								lng: lng,
								building: building,
								cityCode: resu_component.citycode,
								province: resu_component.province,
								city: resu_component.city,
								district: resu_component.district,
								adcode: resu_component.adcode
							});
						}
					});
				});
			},
			getCurPosition: function(success_callback, error_callback) {
				var _self = this;
				if(_self.SF.os.wechat.is) {
					var success = function(res) {
						var latitude = res.latitude;
						var longitude = res.longitude;
						_self.SF.ajax({
							url: "https://restapi.amap.com/v3/assistant/coordinate/convert?locations=" + longitude + "," + latitude + "&coordsys=gps&output=json&key=" + _self.AMapKey,
							cache: true,
							async: true,
							success_callback: function(response) {
								//if(response.status == 1) {
								//	locations = response.locations;
								//	var loc = locations.split(",");
								//	lati = loc[1];
								//	longi = loc[0];
								//	_self.AMapGetAddress(loc[1], loc[0], function(maps) {
								//		success_callback(maps);
								//	});
								//}
							}
						});
					}
					_self.wxLoc(success, error_callback);
				} else {
					var success = function(res) {
						var positions = data.position;
						_self.AMapGetAddress(positions.getLat(), positions.getLng(), function(maps) {
							success_callback(maps);
						});
					}
					_self.AMapLoc(success, error_callback);
				}
			}
		},
		scrollStep: 0,
		scrollFlag: true,
		/**
		 * @description Scroll5 下拉刷新 上拉加载
		 * @param {String} opts.scrollId 容器id
		 * @param {Function} opts.pullDownMore 下拉刷新动画回调
		 * @param {Function} opts.pullUpMore 上拉加载动画回调
		 * @param {Function} opts.pullDownAction 下拉刷新回调
		 * @param {Function} opts.pullUpAction 上拉加载回调
		 * @param {Function} opts.scrolling 混动中回调
		 * @param {Function} opts.scrollEnd 混动结束回调
		 */
		scroll: function(opts) {
			var _self = this;
			var scroll = new IScroll(opts.scrollId, {
				probeType: 2,
				scrollbars: false,
				mouseWheel: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				fadeScrollbars: true,
				bounce: true, //边界反弹
				deceleration: 0.001,
				cancelable: true,
				useTransform:true,
				useTransition:true,
				momentum:true,
				HWCompositing:true,
			});
			scroll.on('scroll', function() {
				if(_self.scrollStep == 0) {
					if(this.y > 5) {
						//下拉刷新效果
						_self.scrollFlag = false;
						_self.scrollStep = 1;
						if(opts.pullDownMore) {
							opts.pullDownMore();
						}
					} else if(this.y < (this.maxScrollY - 5)) {
						//上拉加载效果  
						_self.scrollFlag = true;
						_self.scrollStep = 1;
						if(opts.pullUpMore) {
							opts.pullUpMore();
						}
					}
				}
				if(opts.scrolling) {
					opts.scrolling();
				}
			});
			//滚动完毕  
			scroll.on('scrollEnd', function() {
				if(_self.scrollStep == 1) {
					if(_self.scrollFlag) {
						_self.scrollStep = 2;
						// 加载新数据
						if(opts.pullUpAction) {
							opts.pullUpAction();
						}
						_self.scrollStep = 0;
					} else {
						_self.scrollStep = 2;
						if(opts.pullDownAction) {
							opts.pullDownAction();
						}
						_self.scrollStep = 0;
					}
				}
				if(opts.scrollEnd) {
					opts.scrollEnd();
				}
			});
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			return scroll;
		},
		goTop: function() {
			var _self = this;
			var html = '<a style="display: none;" href="javascript:void(0)" id="go-top" class="go-top"></a>';
			if($("#go-top").length > 0) {
				$("#go-top").remove();
			}
			$("body").append(html);
			var scrollH = _self.os.height * 2;
			$(window).scroll(function() {
				if($(document).scrollTop() > scrollH) {
					$("#go-top").show();
				} else {
					$("#go-top").hide();
				}
			});

			SF.bind("#go-top", "click", function(el, event) {
				$('body,html').animate({scrollTop:0},300)
				el.hide();
			});
		},
		init: function(opts) {
			var _self = this;
			_self.debug = opts.debug;
			_self.path = opts.path;
			_self.valid = new _valid();
			_self.util = new _util();
			_self.geoloc.SF = _self;
			_self.geoloc.AMapKey = opts.AMapKey;
			_self.ua = navigator.userAgent;
			_self.isAndroid();
			_self.isIOS();
			_self.isWechat();
			_self.os.height = $(window).height();
			_self.os.width = $(window).width();
		}
	}
})(jQuery, window, document);
window.SF = new _sf({
	debug: true,
	path: _app_path,
	AMapKey: _gaode_key
});