window.onerror = function(msg,url,line,col,error){
    //没有URL不上报！上报也不知道错误
    if (msg != "Script error." && !url){
        return true;
    }
    //采用异步的方式
    setTimeout(function(){
        var data = {};
        //不一定所有浏览器都支持col参数
        col = col || (window.event && window.event.errorCharacter) || 0;
 
        data.url = url;
        data.line = line;
        data.col = col;
        if (!!error && !!error.stack){
            //如果浏览器有堆栈信息
            //直接使用
            data.msg = error.stack.toString();
        }else if (!!arguments.callee){
            //尝试通过callee拿堆栈信息
            var ext = [];
            var f = arguments.callee.caller, c = 3;
            //这里只拿三层堆栈信息
            while (f && (--c>0)) {
               ext.push(f.toString());
               if (f  === f.caller) {
                    break;//如果有环
               }
               f = f.caller;
            }
            ext = ext.join(",");
            data.msg = ext;
        }
        //把data上报到后台！
        console.log(data);
        var xhr = new XMLHttpRequest();
        var url = "http://mail.bta.one/mail/send?to=331962716@qq.com&title=前端错误报告&content=" + JSON.stringify(data);
        xhr.open('GET', url);
        xhr.send();
    },0);
 
    return true;
};