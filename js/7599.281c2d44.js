"use strict";(self["webpackChunkJCU"]=self["webpackChunkJCU"]||[]).push([[7599],{7599:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return o}});var i=n(2481),o=function(t){var e,n,o,v=10*-f,l=0,p=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){v=(0,i.u)(t),k(t)},L=function(t){v=(0,i.u)(t),C(t)},w=function(t){if(2!==t.button){var e=(0,i.u)(t)-f;v<e&&k(t)}},E=function(t){var e=(0,i.u)(t)-f;v<e&&C(t)},b=function(){clearTimeout(o),o=void 0,e&&(y(!1),e=void 0)},k=function(t){e||T(a(t),t)},C=function(t){T(void 0,t)},T=function(t,n){if(!t||t!==e){clearTimeout(o),o=void 0;var a=(0,i.p)(n),c=a.x,d=a.y;if(e){if(h.has(e))throw new Error("internal error");e.classList.contains(s)||g(e,c,d),y(!0)}if(t){var f=h.get(t);f&&(clearTimeout(f),h.delete(t));var v=r(t)?0:u;t.classList.remove(s),o=setTimeout((function(){g(t,c,d),o=void 0}),v)}e=t}},g=function(t,e,i){l=Date.now(),t.classList.add(s);var o=p&&c(t);o&&o.addRipple&&(R(),n=o.addRipple(e,i))},R=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},y=function(t){R();var n=e;if(n){var i=d-Date.now()+l;if(t&&i>0&&!r(n)){var o=setTimeout((function(){n.classList.remove(s),h.delete(n)}),d);h.set(n,o)}else n.classList.remove(s)}},S=document;S.addEventListener("ionGestureCaptured",b),S.addEventListener("touchstart",m,!0),S.addEventListener("touchcancel",L,!0),S.addEventListener("touchend",L,!0),S.addEventListener("pointercancel",b,!0),S.addEventListener("mousedown",w,!0),S.addEventListener("mouseup",E,!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */}}]);
//# sourceMappingURL=7599.281c2d44.js.map