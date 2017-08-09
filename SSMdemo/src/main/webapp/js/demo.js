$.ajax({
    type: "get",
    url: "http://www.cnblogs.com/rss",
    dataType:"json",
    //预期服务器返回的数据类型。如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息返回 responseXML 或 responseText，并作为回调函数参数传递，可用值:
    //"xml": 返回 XML 文档，可用 jQuery 处理。
    //"html": 返回纯文本 HTML 信息；包含 script 元素。
    //"script": 返回纯文本 JavaScript 代码。不会自动缓存结果。
    //"json": 返回 JSON 数据 。
    timeout:3000,
    async:true,//(默认: true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
    cache:true,//(默认: true) jQuery 1.2 新功能，设置为 false 将不会从浏览器缓存中加载请求信息。
    beforeSend: function(XMLHttpRequest){
        //发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。XMLHttpRequest 对象是唯一的参数。
    },
    success: function(data, textStatus){
        //请求成功后回调函数。这个方法有两个参数：服务器返回数据，返回状态
    },
    complete: function(XMLHttpRequest, textStatus){
        //请求完成后回调函数 (请求成功或失败时均调用)。参数： XMLHttpRequest 对象，成功信息字符串。
    },
    error: function(){
        //默认: 自动判断 (xml 或 html)) 请求失败时将调用此方法。这个方法有三个参数：XMLHttpRequest 对象，错误信息，（可能）捕获的错误对象。
    }
});


$.ajax({
    url: "http://www.hzhuti.com",    //请求的url地址
    dataType: "json",   //返回格式为json
    async: true, //请求是否异步，默认为异步，这也是ajax重要特性
    data: { "id": "value" },    //参数值
    type: "GET",   //请求方式
    beforeSend: function() {
        //请求前的处理
    },
    success: function(req) {
        //请求成功时处理
    },
    complete: function() {
        //请求完成的处理
    },
    error: function() {
        //请求出错处理
    }
});