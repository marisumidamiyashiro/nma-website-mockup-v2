var initPhotoSwipeFromDOM=function(e){for(var t=function(e){for(var t,n,r,i,o=e.childNodes,a=o.length,l=[],d=0;a>d;d++)t=o[d],1===t.nodeType&&(n=t.children[0],r=n.getAttribute("data-size").split("x"),i={src:n.getAttribute("href"),w:parseInt(r[0],10),h:parseInt(r[1],10)},t.children.length>1&&(i.title=t.children[1].innerHTML),n.children.length>0&&(i.msrc=n.children[0].getAttribute("src")),i.el=t,l.push(i));return l},n=function p(e,t){return e&&(t(e)?e:p(e.parentNode,t))},r=function(e){e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,r=n(t,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});if(r){for(var i,a=r.parentNode,l=r.parentNode.childNodes,d=l.length,u=0,p=0;d>p;p++)if(1===l[p].nodeType){if(l[p]===r){i=u;break}u++}return i>=0&&o(i,a),!1}},i=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),r=0;r<n.length;r++)if(n[r]){var i=n[r].split("=");i.length<2||(t[i[0]]=i[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t.hasOwnProperty("pid")?(t.pid=parseInt(t.pid,10),t):t},o=function(e,n,r){var i,o,a,l=document.querySelectorAll(".pswp")[0];a=t(n),o={index:e,galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=a[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,r=t.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}},r&&(o.showAnimationDuration=0),i=new PhotoSwipe(l,PhotoSwipeUI_Default,a,o),i.init()},a=document.querySelectorAll(e),l=0,d=a.length;d>l;l++)a[l].setAttribute("data-pswp-uid",l+1),a[l].onclick=r;var u=i();u.pid>0&&u.gid>0&&o(u.pid-1,a[u.gid-1],!0)};