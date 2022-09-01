"use strict";(self["webpackChunkJCU"]=self["webpackChunkJCU"]||[]).push([[990,515],{515:function(t,e,r){r.r(e),r.d(e,{GESTURE_CONTROLLER:function(){return n.G},createGesture:function(){return d}});var n=r(350);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=(t,e,r,n)=>{const o=s(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;let c,a;return t["__zone_symbol__addEventListener"]?(c="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(c="addEventListener",a="removeEventListener"),t[c](e,r,o),()=>{t[a](e,r,o)}},s=t=>{if(void 0===c)try{const e=Object.defineProperty({},"passive",{get:()=>{c=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){c=!1}return!!c};let c;const a=2e3,i=(t,e,r,n,s)=>{let c,i,l,d,v,m,p,h=0;const X=n=>{h=Date.now()+a,e(n)&&(!i&&r&&(i=o(t,"touchmove",r,s)),l||(l=o(n.target,"touchend",f,s)),d||(d=o(n.target,"touchcancel",f,s)))},y=n=>{h>Date.now()||e(n)&&(!m&&r&&(m=o(u(t),"mousemove",r,s)),p||(p=o(u(t),"mouseup",Y,s)))},f=t=>{b(),n&&n(t)},Y=t=>{g(),n&&n(t)},b=()=>{i&&i(),l&&l(),d&&d(),i=l=d=void 0},g=()=>{m&&m(),p&&p(),m=p=void 0},_=()=>{b(),g()},E=(e=!0)=>{e?(c||(c=o(t,"touchstart",X,s)),v||(v=o(t,"mousedown",y,s))):(c&&c(),v&&v(),c=v=void 0,_())},S=()=>{E(!1),n=r=e=void 0};return{enable:E,stop:_,destroy:S}},u=t=>t instanceof Document?t:t.ownerDocument,l=(t,e,r)=>{const n=r*(Math.PI/180),o="x"===t,s=Math.cos(n),c=e*e;let a=0,i=0,u=!1,l=0;return{start(t,e){a=t,i=e,l=0,u=!0},detect(t,e){if(!u)return!1;const r=t-a,n=e-i,d=r*r+n*n;if(d<c)return!1;const v=Math.sqrt(d),m=(o?r:n)/v;return l=m>s?1:m<-s?-1:0,u=!1,!0},isGesture(){return 0!==l},getDirection(){return l}}},d=t=>{let e=!1,r=!1,o=!0,s=!1;const c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),a=c.canStart,u=c.onWillStart,d=c.onStart,h=c.onEnd,X=c.notCaptured,y=c.onMove,f=c.threshold,Y=c.passive,b=c.blurOnStart,g={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},_=l(c.direction,c.threshold,c.maxAngle),E=n.G.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=t=>{const e=p(t);return!(r||!o)&&(m(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!a||!1!==a(g))&&(E.release(),!!E.start()&&(r=!0,0===f?G():(_.start(g.startX,g.startY),!0))))},T=t=>{e?!s&&o&&(s=!0,v(g,t),requestAnimationFrame(w)):(v(g,t),_.detect(g.currentX,g.currentY)&&(_.isGesture()&&G()||O()))},w=()=>{e&&(s=!1,y&&y(g))},G=()=>!(E&&!E.capture())&&(e=!0,o=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime,u?u(g).then(D):D(),!0),L=()=>{if("undefined"!==typeof document){const t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}},D=()=>{b&&L(),d&&d(g),o=!0},M=()=>{e=!1,r=!1,s=!1,o=!0,E.release()},k=t=>{const r=e,n=o;M(),n&&(v(g,t),r?h&&h(g):X&&X(g))},C=i(c.el,S,T,k,{capture:!1,passive:Y}),O=()=>{M(),C.stop(),X&&X(g)};return{enable(t=!0){t||(e&&k(void 0),M()),C.enable(t)},destroy(){E.destroy(),C.destroy()}}},v=(t,e)=>{if(!e)return;const r=t.currentX,n=t.currentY,o=t.currentTime;m(e,t);const s=t.currentX,c=t.currentY,a=t.currentTime=p(e),i=a-o;if(i>0&&i<100){const e=(s-r)/i,o=(c-n)/i;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=c-t.startY,t.event=e},m=(t,e)=>{let r=0,n=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,n=t.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},p=t=>t.timeStamp||Date.now()},990:function(t,e,r){r.r(e),r.d(e,{createSwipeBackGesture:function(){return c}});var n=r(587),o=r(545),s=r(515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,r,c,a)=>{const i=t.ownerDocument.defaultView,u=(0,o.i)(t),l=t=>{const e=50,{startX:r}=t;return u?r>=i.innerWidth-e:r<=e},d=t=>u?-t.deltaX:t.deltaX,v=t=>u?-t.velocityX:t.velocityX,m=t=>l(t)&&e(),p=t=>{const e=d(t),r=e/i.innerWidth;c(r)},h=t=>{const e=d(t),r=i.innerWidth,o=e/r,s=v(t),c=r/2,u=s>=0&&(s>.2||e>c),l=u?1-o:o,m=l*r;let p=0;if(m>5){const t=m/Math.abs(s);p=Math.min(t,540)}a(u,o<=0?.01:(0,n.j)(0,o,.9999),p)};return(0,s.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:m,onStart:r,onMove:p,onEnd:h})}}}]);
//# sourceMappingURL=990.d197df37.js.map