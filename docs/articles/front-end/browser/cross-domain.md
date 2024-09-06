# 浏览器请求跨域
一直想给自己的静态网站解决跨域问题，服务器不支持CORS，自己也没有代理服务器的那种，结果发现是寸步难行，无一不是需要服务器的支持。想来也是，要是随随便便就跨域了，浏览器的同源策略就成笑话了。  

前端目前已知的跨域处理方式有以下几种

## JSONP（JSON with Padding）  

适用场景：仅适用于GET请求。  
实现方法：在客户端创建一个全局函数，用于接收服务器端返回的数据。
服务器端返回的数据格式为callbackName(data)。
客户端通过`<script>`标签加载这个URL。
```html
<script src="https://example.com/data?callback=handleResponse"></script>
<script>
function handleResponse(data) {
  console.log(data);
}
</script>
```
## CORS（Cross-Origin Resource Sharing）
适用场景：适用于所有HTTP方法（GET、POST、PUT、DELETE等）。  

实现方法：在客户端设置请求头。服务器端需要设置响应头`Access-Control-Allow-Origin`和其他相关CORS头。
使用Fetch API
```javascript
fetch('https://example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token-here'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
使用XMLHttpRequest
javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/data', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Authorization', 'Bearer your-token-here');
xhr.send();

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Failed to load resource.');
  }
};
```
## 设置crossorigin属性
适用场景：适用于`<img>`、`<script>`、`<link>`等标签。
实现方法：
给标签添加crossorigin属性，可以设置为anonymous或use-credentials。
```html
<img src="https://example.com/image.jpg" crossorigin="anonymous">
或者
<img src="https://example.com/image.jpg" crossorigin="use-credentials">
```
## 使用代理服务
适用场景：适用于任何HTTP请求。
实现方法：
在自己的服务器上设置一个代理服务，常用的是`nginx`，通过这个代理服务来请求跨域资源。
客户端向代理服务发送请求，代理服务再向目标服务器发送请求，并将结果返回给客户端。
示例代码
```javascript
const img = new Image();
img.src = 'http://localhost:3000/proxy?url=https://example.com/image.jpg';
```
## Base64 编码
适用场景：适用于静态资源，如图片。  

实现方法：将图片转换为Base64编码，并直接嵌入到HTML中。
```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" alt="Embedded Image" />
```
## 总结
JSONP：适用于GET请求。  
CORS：适用于所有HTTP方法。  
crossorigin属性：适用于特定标签（如`<img>`、`<script>`）。  
代理服务：适用于任何HTTP请求。  
Base64编码：适用于静态资源，但会增加页面大小。  