

function requestMethod(par1,par2,par3,callback) {

    //第一步：创建一个请求对象(负责向后端要数据)
    var xhr = new XMLHttpRequest();      //使用JS获取浏览器的AJAX引擎（就是XMLHttpRequest对象）

    //第二步：建立与服务端的连接（找那个服务器去要数据）
    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2);

    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //第三步：向服务端发送请求
    xhr.send(par3);

    //第四步：接收服务端返回的数据
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            //JSON.parse()方法用于将JSON字符串转换为JSON对象
            //相反的是JSON.stringify（）
            var responseData = JSON.parse(xhr.responseText);

            var returnStr = responseData.data;

            // return returnStr;

            callback(returnStr);      //AJAX引擎获得服务器响应的数据，通过执行JS的回调函数将数据更新到浏览器页面的具体位置

        }
    }
    
}