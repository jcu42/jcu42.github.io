"use strict";(self["webpackChunkJCU"]=self["webpackChunkJCU"]||[]).push([[5930],{5930:function(t,n,i){i.r(n),i.d(n,{a:function(){return a},b:function(){return o},c:function(){return c},d:function(){return r},h:function(){return s}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var e={getEngine:function(){var t,n=window;return n.TapticEngine||(null===(t=n.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){var t=window;return!!t.Capacitor},impact:function(t){var n=this.getEngine();if(n){var i=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:i})}},notification:function(t){var n=this.getEngine();if(n){var i=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:i})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},c=function(){e.selection()},a=function(){e.selectionStart()},o=function(){e.selectionChanged()},s=function(){e.selectionEnd()},r=function(t){e.impact(t)}}}]);
//# sourceMappingURL=5930.6c6a6f94.js.map