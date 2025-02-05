importScripts('https://cdn.cbd.int/workbox-sw@6.5.4/build/workbox-sw.js');
workbox.setConfig({ modulePathPrefix: 'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/' });

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      var validSets = ["is-sw-227e25","is-html-227e25","is-cbd_cdn-227e25","is-theme-227e25","is-json-227e25"];
      return Promise.all(
        names
          .filter(function (name) { return !~validSets.indexOf(name); })
          .map(function (name) {
            indexedDB && indexedDB.deleteDatabase(name);
            return caches.delete(name);
          })
      ).then(function() { self.skipWaiting() });
    })
  );
});

workbox.routing.registerRoute(new RegExp('sw\\.js'), workbox.strategies.networkOnly({
  cacheName: 'is-sw-227e25',
}));
workbox.routing.registerRoute(new RegExp('https://cdn\\.cbd\\.int'), workbox.strategies.staleWhileRevalidate({
  cacheName: 'is-cbd_cdn-227e25',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('/.*\\.(?:js|css|woff2|png|jpg|gif)l;/span>'), workbox.strategies.cacheFirst({
  cacheName: 'is-theme-227e25',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));
workbox.routing.registerRoute(new RegExp('your_data_prefix/.*\\.json'), workbox.strategies.cacheFirst({
  cacheName: 'is-json-227e25',
  plugins: [ new workbox.expiration.Plugin({ maxAgeSeconds: 14400 }) ],
}));

workbox.routing.registerRoute(new RegExp('/.*(:?/[^\\.]*/?)$'), function(context) {
  var url = context.url.pathname;
  if (!url.endsWith('/')) url += '/';
  return fetch(url);
});





// var script = document.createElement("script");
// script.type = "text/javascript";
// script.id = 'clustrmaps';
// script.src =  '//clustrmaps.com/map_v2.js?d=NN6CrFgiT6g5STfQdgu1v91lB8TY5dqmU7iLIxocfY0&cl=ffffff&w=a';
// document.body.appendChild(script);
// 12-22
// // 实例化 VConsole 对象
// var vConsole = new VConsole();
// // 启用 VConsole
// vConsole.show();

addMobileLive2dCss();
Jinx();
ipMap();

// app环境不添加网易云外链
// app环境网易云外链不支持，自动加载http的东西，和博客网站https冲突
if (isMobile()) {
  addMobileLive2dCss();
} else {
  musicBox();
  removeMusicBox();
}

// 写这里应该没人发现吧😃😃😃
function Jinx() {
  console.log(
    "%c Jinx天天开心哈哈哈哈哈哈 %c https://jinx66.gitee.io/",
    "color:#fff;font-size: 14px;font-family: serif;background:linear-gradient(90deg,#ff4d91,#ff4d91);padding:15px 10px;",
    "color:#000;background:linear-gradient(90deg,#ff4d91,#ffffff);padding:15px 10px;font-size: 14px;font-family: serif;"
  );
}

function ipMap() {
  //添加iframe标签
  var body = document.getElementsByTagName("body");
  var div = document.createElement("div");
  div.innerHTML =
    '<a href="https://clustrmaps.com/site/1bv4l" title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=NN6CrFgiT6g5STfQdgu1v91lB8TY5dqmU7iLIxocfY0&cl=ffffff"></a>';
  div.id = "ip-map";
  document.body.appendChild(div);
}
function addMobileLive2dCss() {
  console.log(123);
  if (isMobile()) {
    console.log(123);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/mobileLive2d.css"; // 替换为您CSS文件的路径
    document.head.appendChild(link);
  }
}
function musicBox() {
  //添加iframe标签
  var body = document.getElementsByTagName("body");
  var div = document.createElement("div");
  div.innerHTML =
    '<div id="drag" class="move"><iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=300 src="https://music.163.com/outchain/player?type=0&id=2327585234&auto=1&height=430"></iframe><div class="mask"></div><div class="close"></div></div>';
  document.body.appendChild(div);
  // 拖拽功能(主要是触发三个事件：onmousedown\onmousemove\onmouseup)
  var drag = document.getElementById("drag");
  var divMask = document.querySelector(".mask");

  // 点击某物体时，用drag对象即可，move和up是全局区域，也就是整个文档通用，应该使用document对象而不是drag对象(否则，采用drag对象时物体只能往右方或下方移动)
  drag.onmousedown = function (e) {
    var e = e || window.event; // 兼容ie浏览器
    var diffX = e.clientX - drag.offsetLeft; // 鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
    var diffY = e.clientY - drag.offsetTop;

    /* 低版本ie bug:物体被拖出浏览器可是窗口外部时，还会出现滚动条，
                      解决方法是采用ie浏览器独有的2个方法setCapture()\releaseCapture(),这两个方法，
                      可以让鼠标滑动到浏览器外部也可以捕获到事件，而我们的bug就是当鼠标移出浏览器的时候，
                      限制超过的功能就失效了。用这个方法，即可解决这个问题。注：这两个方法用于onmousedown和onmouseup中 */
    if (typeof drag.setCapture !== "undefined") {
      drag.setCapture();
    }

    divMask.style.width = "100%";
    divMask.style.height = "100%";
    document.onmousemove = function (e) {
      var e = e || window.event; // 兼容ie浏览器
      var left = e.clientX - diffX;
      var top = e.clientY - diffY;

      // 控制拖拽物体的范围只能在浏览器视窗内，不允许出现滚动条
      if (left < 0) {
        left = 0;
      } else if (left > window.innerWidth - drag.offsetWidth) {
        left = window.innerWidth - drag.offsetWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > window.innerHeight - drag.offsetHeight) {
        top = window.innerHeight - drag.offsetHeight;
      }

      // 移动时重新得到物体的距离，解决拖动时出现晃动的现象
      drag.style.left = left + "px";
      drag.style.top = top + "px";
    };
    document.onmouseup = function (e) {
      // 当鼠标弹起来的时候不再移动
      console.log("this", this);
      this.onmousemove = null;
      this.onmouseup = null; // 预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）

      // 修复低版本ie bug
      if (typeof drag.releaseCapture !== "undefined") {
        drag.releaseCapture();
      }

      divMask.style.width = "0";
      divMask.style.height = "0";
    };
  };
  const draggableElement = document.getElementById("drag");

  // 存储上一个触摸位置的坐标
  let lastTouchX = 0;
  let lastTouchY = 0;

  draggableElement.addEventListener("touchstart", function (event) {
    // 记录触摸开始时的位置
    const touch = event.touches[0];
    lastTouchX = touch.clientX;
    lastTouchY = touch.clientY;
  });

  draggableElement.addEventListener("touchmove", function (event) {
    // 阻止默认的滚动行为
    event.preventDefault();

    // 获取当前触摸的位置
    const touch = event.touches[0];
    const currentTouchX = touch.clientX;
    const currentTouchY = touch.clientY;

    // 计算移动距离
    const deltaX = currentTouchX - lastTouchX;
    const deltaY = currentTouchY - lastTouchY;

    // 获取元素当前的位置
    let elementX = parseFloat(draggableElement.style.left) || 0;
    let elementY = parseFloat(draggableElement.style.top) || 0;

    // 更新元素的位置
    draggableElement.style.left = elementX + deltaX + "px";
    draggableElement.style.top = elementY + deltaY + "px";

    // 更新上一个触摸位置的坐标
    lastTouchX = currentTouchX;
    lastTouchY = currentTouchY;
  });

  draggableElement.addEventListener("touchend", function (event) {
    // 触摸结束时的处理（可选）
  });
}

function removeMusicBox() {
  var myBtn = document.querySelector(".close");
  myBtn.addEventListener("click", function () {
    var musicBox = document.querySelector(".move");
    musicBox.style.display = "none";
    musicBox.remove();
  });
}
function isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}
