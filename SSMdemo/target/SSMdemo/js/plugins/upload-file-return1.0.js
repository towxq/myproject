var imgSize = 0;
var imgMb = 0;
$(function(){
	
	$(document).on("click","#pingjia-input-form .ui-delScore",function(){
		$("#pingjia-input-form input[name='images']").eq($(this).parent("span").index()).remove();
		$(this).parent("span").remove();
		imgSize--;
	});
});
function toFixed2 (num) {
    return parseFloat(+num.toFixed(2));
}

function filePrevImg(files){
	
    //检测浏览器是否支持FileReader对象
    if(typeof FileReader == "undefined"){
//        alert("您的浏览器不支持FileReader对象！");
    	$.mobile.loading( "show", {
			  text: "您的浏览器不支持FileReader对象！",
			  textVisible: true,
			  theme: "b",
			  html: ""
		});
		setTimeout(function(){
			$.mobile.loading( "hide");
		},2000);
    }
    var oFiles = this.files.length;
	if((imgSize)>= 3){
//		alert("您最多只能上传3个文件");
		$.mobile.loading( "show", {
			  text: "您最多只能上传3个文件",
			  textVisible: true,
			  theme: "b",
			  html: ""
		});
		setTimeout(function(){
			$.mobile.loading( "hide");
		},2000);
		return false;
	}
	
    for(var intI=0;intI<files.length;intI++){
    	if(intI>2){
//    		alert("您最多只能上传3个文件");
    		$.mobile.loading( "show", {
  			  text: "您的浏览器不支持FileReader对象！",
  			  textVisible: true,
  			  theme: "b",
  			  html: ""
  		});
  		setTimeout(function(){
  			$.mobile.loading( "hide");
  		},2000);
    		return false;
    	}
        var tmpFile = files[intI];
        var reader = new FileReader();//每循环一次都要重新new一个FileReader实例
        var fileType="image/jpeg"; 
        var fileName=tmpFile.name;
        var type ="jpg";
      
        if(fileName.toLowerCase().indexOf(".png")<0&&fileName.toLowerCase().indexOf(".jpg")<0 &&fileName.toLowerCase().indexOf(".jpeg")<0){
//        	alert("只支持png,jpg格式文件");
        	$.mobile.loading( "show", {
  			  text: "只支持png,jpg格式文件",
  			  textVisible: true,
  			  theme: "b",
  			  html: ""
  		});
  		setTimeout(function(){
  			$.mobile.loading( "hide");
  		},2000);
        	return false;
        }
        if(fileName.toLowerCase().indexOf(".png")>0){
        	fileType ="image/png";
        	type ="png";
        }
     
        
        var img = document.createElement("img");
	    img.file = tmpFile;
	    $(img).wrap("<span style=\"float:left;\"/>").parent("span").appendTo("#files").append("<a href='javascript:deleteImg("+imgSize+")' class='icon1 delImg ui-delScore' id='num_"+imgSize+"'></a>");
		
		
		lrz(img.file, {
			width: 800
		})
		.then(function (rst) {
               
                sourceSize = toFixed2(img.file.size / 1024),
                resultSize = toFixed2(rst.fileLen / 1024),
                scale = parseInt(100 - (resultSize / sourceSize * 100));
            
			
			div = document.createElement('div'),
            p = document.createElement('p');
            p.style.fontSize = 13 + 'px';
            p.innerHTML      = '源文件：<span class="text-danger">' +
                sourceSize + 'KB' +
                '</span> <br />' +
                '压缩后传输大小：<span class="text-success">' +
                resultSize + 'KB (省' + scale + '%)' +
                '</span> ';


            img.src = rst.base64;
            if(sourceSize>5120){
    			alert("文件过大,只能上传5MB文件");
    			deleteImg(imgSize);
    			$("#num_"+imgSize).parent().remove();
    			return false;
    		}
            var filebs64 =  img.src ;
            if( filebs64.indexOf("image/")>=0){
	    		if(type=="jpg"){
	    			filebs64 = filebs64.substring(23);
	    		}else if(type=="png"){
	    			filebs64 = filebs64.substring(23);
	    		}
    		}else{
    			filebs64 = filebs64.substring(12);
    		}
            var input = document.createElement("input");
    		$(input).attr("name","img").attr("size",resultSize).attr("id","num_content_"+imgSize).attr("type","hidden").val(filebs64).appendTo("#pingjia-input-form");
            
    		var begin =e.target.result.substr(0,5);
    		if(info.indexOf("image/")>=0){
    			content =e.target.result;
    		}else{
    			content =e.target.result.substr(5,e.target.result.length);
    			content =begin+fileType+";"+content;
    		}
    		img.src= content;

    		
    		
            return rst;
        });
		imgSize++;
    }
}

function deleteImg(id){
	imgSize--;
	$("#num_content_"+id).remove();
}

function post(URL, PARAMS){        
    var temp = document.createElement("form");        
    temp.action = URL;        
    temp.method = "post";        
    temp.style.display = "none";        
    for (var x in PARAMS) {        
        var opt = document.createElement("input");        
        opt.name = x;        
        opt.value = PARAMS[x];        
        temp.appendChild(opt);        
    }        
    document.body.appendChild(temp);        
    temp.submit();        
    return temp;        
}

//是否符合期望长度内
function isExceptLen(val,minLen,maxLen){
	if(!minLen && !maxLen) return false;
	if(minLen){
		if(val.length<minLen) return false;
	}
	if(maxLen){
		if(val.length>maxLen) return false;
	}
	return true;
}

function isNull(val){
	if(val == null) return false;
}
/**
 * a标签clcik不会跳转，做简单处理
 * @param {} element
 */
function invokeClick(element){
	var span = $("<span>");
	element.append(span);
	span.click();
}

function selectPhotos(){
	$("#fileupload").click();
}

function accAdd(arg1,arg2){ 
	var r1,r2,m; 
	try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;} 
	try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;} 
	m=Math.pow(10,Math.max(r1,r2)); 
	return (arg1*m+arg2*m)/m ;
} 

function accMul(arg1,arg2) 
{ 
var m=0,s1=arg1.toString(),s2=arg2.toString(); 
try{m+=s1.split(".")[1].length;}catch(e){} 
try{m+=s2.split(".")[1].length;}catch(e){} 
return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m) ;
} 
