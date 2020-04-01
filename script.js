window.addEventListener('load', () => {
  const codeWriter = new ZXing.BrowserQRCodeSvgWriter('qr')
  const qr = document.getElementById('qr');
  let svgElement;
  
  document.getElementById('writeButton').addEventListener('click', () => {
    const input = document.getElementById('textInput').value
    if(input) {
      qr.innerHTML = ''
      svgElement = codeWriter.write(input, 300, 300)
      JsBarcode("#bar", input)
    }
    else {
      qr.innerHTML = '（请输入内容）'
      document.getElementById('bar').innerHTML = ''
    }
  })
})
