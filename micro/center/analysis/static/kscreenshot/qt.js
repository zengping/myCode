var domToImg = (function () {
  // 转png需要的canvas对象及其上下文
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  // canvas绘制图片元素方法
  var draw = function (img) {
    var width = img.width,
      height = img.height;
    // canvas绘制
    canvas.width = width;
    canvas.height = height;
    // 画布清除
    context.clearRect(0, 0, width, height);
    // 绘制图片到canvas
    context.drawImage(img, 0, 0);
  };

  // canvas画布绘制的原图片
  var img = new Image();
  // 回调
  var callback = function () {};

  // 图片回调
  img.onload = function () {
    draw(this);
    // 回调方法
    callback();
  };

  var exports = {
    dom: null,
    // DOM变成svg，并作为图片显示
    dom2Svg: function () {
      var dom = document.body;
      if (!dom) {
        return this;
      }

      // 复制DOM节点
      var cloneDom = dom.cloneNode(true);
      cloneDom.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');

      // 如果有图片，变成base64
      var imgDom = null;
      if (cloneDom.tagName.toLowerCase() == 'img') {
        imgDom = cloneDom;
      } else {
        // 这里就假设一个图片，多图自己遍历转换下就好了
        imgDom = cloneDom.querySelector('img');
      }

      if (imgDom) {
        draw(imgDom);
        imgDom.src = canvas.toDataURL();
      }

      // 图片地址显示为DOM转换的svg
      img.src = 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="' + dom.offsetWidth + '" height="' + dom.offsetHeight + '"><foreignObject x="0" y="0" width="100%" height="100%">' +
        new XMLSerializer().serializeToString(cloneDom).replace(/#/g, '%23').replace(/\n/g, '%0A') +
        document.querySelector('style').outerHTML +
        '</foreignObject></svg>';

      return this;
    },
    // 作为图片下载，JS前端下载可参考这篇文章：
    // JS前端创建html或json文件并浏览器导出下载 - http://www.zhangxinxu.com/wordpress/?p=6252
    download: function () {
      // 创建隐藏的可下载链接
      var eleLink = document.createElement('a');
      // 下载图片文件名就按照时间戳来
      eleLink.download = 'zxx_png-' + (+new Date() + '').slice(1, 9) + '.png';
      eleLink.style.display = 'none';

      // 触发图片onload是个异步过程，因此，需要在回调中处理
      callback = function () {
        eleLink.href = canvas.toDataURL();
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
      };

      // dom变图片
      this.dom2Svg();
    }
  };

  return exports;
})();

// 实例页面的交互代码
var eleBox = document.getElementById('cmBox');
// hover outline
eleBox.addEventListener('mouseover', function (event) {
  if (event.target !== this) {
    event.target.classList.add('outline');
  }
});
eleBox.addEventListener('mouseout', function (event) {
  var eleOutline = eleBox.querySelector('.outline');
  if (eleOutline) {
    eleOutline.classList.remove('outline');
  }
});
// 点击并下载图片
eleBox.addEventListener('click', function (event) {
  var eleTarget = event.target;
  if (eleTarget !== this) {
    domToImg.dom = eleTarget;
    domToImg.download();
  }
});