"use strict";(self["webpackChunkJCU"]=self["webpackChunkJCU"]||[]).push([[990],{8990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return o}});var r=n(6587),c=n(545),i=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(t,e,n,o,s)=>{const a=t.ownerDocument.defaultView,u=(0,c.i)(t),h=t=>{const e=50,{startX:n}=t;return u?n>=a.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,f=t=>h(t)&&e(),k=t=>{const e=l(t),n=e/a.innerWidth;o(n)},w=t=>{const e=l(t),n=a.innerWidth,c=e/n,i=d(t),o=n/2,u=i>=0&&(i>.2||e>o),h=u?1-c:c,f=h*n;let k=0;if(f>5){const t=f/Math.abs(i);k=Math.min(t,540)}s(u,c<=0?.01:(0,r.j)(0,c,.9999),k)};return(0,i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:f,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990.295dcc63.js.map