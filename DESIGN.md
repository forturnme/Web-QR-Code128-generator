# 结构
```
index.html
    |----script.js
    |----qrcodewriter(zxing-ts)
    |----JsBarcode
```
因为html+js做这个功能很快，所以我选择了html。<br>
为了做得尽量简单，用了不需要class的`water.css`来做美化，标签也尽量使用原生的，js DOM操作也使用的自带接口实现。<br>
整个页面的结构就是一个文本框加一个按钮，另有一个`div`预备存放二维码（svg格式），一个`canvas`存放条形码（svg格式）。点击按钮，调用相关接口，完成绘制。<br>
须知：code128标准不支持cjk字符，故输入中文只能得到二维码。
