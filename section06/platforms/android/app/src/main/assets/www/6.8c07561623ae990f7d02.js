(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8ehP":function(t,n,e){"use strict";e.r(n),e.d(n,"startInputShims",function(){return v});var o=e("JvIM"),r=new WeakMap;function i(t,n,e,o){void 0===o&&(o=0),r.has(t)!==e&&(e?function(t,n,e){var o=n.parentNode,i=n.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(t,i);var a="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",n.style.transform="translate3d("+a+"px,"+e+"px,0) scale(0)"}(t,n,o):function(t,n){var e=r.get(t);e&&(r.delete(t),e.remove()),t.style.pointerEvents="",n.style.transform=""}(t,n))}function a(t){return t===t.getRootNode().activeElement}var u="input, textarea, [no-blur]",c=.3;var s="$ionPaddingTimer";function l(t,n){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var e=t.closest("ion-content");if(null!==e){var o=e[s];o&&clearTimeout(o),n>0?e.style.setProperty("--keyboard-offset",n+"px"):e[s]=setTimeout(function(){e.style.setProperty("--keyboard-offset","0px")},120)}}}var d=!0,f=!0;function v(t,n){var e=n.getNumber("keyboardHeight",290),r=n.getBoolean("scrollAssist",!0),s=n.getBoolean("hideCaretOnScroll",!0),v=n.getBoolean("inputBlurring",!0),p=n.getBoolean("scrollPadding",!0),m=new WeakMap,g=new WeakMap;function h(t){var n=(t.shadowRoot||t).querySelector("input"),u=t.closest("ion-content");if(n){if(u&&s&&!m.has(t)){var l=function(t,n,e){if(!e||!n)return function(){};var o=function(e){a(n)&&i(t,n,e)},r=function(){return i(t,n,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return e.addEventListener("ionScrollStart",u),e.addEventListener("ionScrollEnd",c),n.addEventListener("blur",r),function(){e.removeEventListener("ionScrollStart",u),e.removeEventListener("ionScrollEnd",c),n.addEventListener("ionBlur",r)}}(t,n,u);m.set(t,l)}u&&r&&!g.has(t)&&(l=function(t,n,e,r){var u,s=function(t){u=Object(o.j)(t)},l=function(s){if(u){var l=Object(o.j)(s);(function(t,n,e){if(n&&l){var o=n.x-l.x,r=n.y-l.y;return o*o+r*r>36}return!1})(0,u)||a(n)||(s.preventDefault(),s.stopPropagation(),function(t,n,e,o){var r=function(t,n,e){return function(t,n,e,o){var r=t.top,i=t.bottom,a=n.top+15,u=.5*Math.min(n.bottom,o-e)-i,s=a-r,l=Math.round(u<0?-u:s>0?-s:0),d=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,d/c)),scrollPadding:e,inputSafeY:4-(r-a)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),n.getBoundingClientRect(),e,t.ownerDocument.defaultView.innerHeight)}(t,e,o);Math.abs(r.scrollAmount)<4?n.focus():(i(t,n,!0,r.inputSafeY),n.focus(),e.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){i(t,n,!1,r.inputSafeY),n.focus()}))}(t,n,e,r))}};return t.addEventListener("touchstart",s,!0),t.addEventListener("touchend",l,!0),function(){t.removeEventListener("touchstart",s,!0),t.removeEventListener("touchend",l,!0)}}(t,n,u,e),g.set(t,l))}}v&&d&&function(t){var n=!0,e=!1;t.addEventListener("ionScrollStart",function(){e=!0}),t.addEventListener("focusin",function(){n=!0},!0),t.addEventListener("touchend",function(o){if(e)e=!1;else{var r=t.activeElement;if(r&&!r.matches(u)){var i=o.target;i!==r&&(i.matches(u)||i.closest(u)||(n=!1,setTimeout(function(){n||r.blur()},50)))}}},!1)}(t),p&&f&&function(t,n){t.addEventListener("focusin",function(t){l(t.target,n)}),t.addEventListener("focusout",function(t){l(t.target,0)})}(t,e);for(var E=0,y=Array.from(t.querySelectorAll("ion-input"));E<y.length;E++)h(y[E]);t.body.addEventListener("ionInputDidLoad",function(t){h(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){var n,e;n=t.target,s&&((e=m.get(n))&&e(),m.delete(n)),r&&((e=g.get(n))&&e(),g.delete(n))})}}}]);