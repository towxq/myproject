/**
 * 支付宝解决微信内支付屏蔽问题
 * 基于阿里提供的ap.js
 */
function doAlipayInWechat(evt){
	
	e = evt || window.event;
    
	e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
	var queryParam = '';

    Array.prototype.slice.call(document.querySelectorAll("input[type=hidden]")).forEach(function (ele) {
        if(ele.name === 'req_data') {
            queryParam += ele.name + "=" + ele.value + '&';
        } else {
            queryParam += ele.name + "=" + encodeURIComponent(ele.value) + '&';
        }
    });
    var urlAction = document.querySelector("#alipaysubmit").getAttribute('action');
    if(urlAction.indexOf("?", 0) < 0){
    	urlAction += "?";
    }else{
    	urlAction += "&";
    }
    var gotoUrl = urlAction + queryParam;
    _AP.pay(gotoUrl);

    return false;
}