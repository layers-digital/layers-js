!function(){"use strict";var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};function t(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{d(r.next(e))}catch(e){s(e)}}function a(e){try{d(r.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}d((r=r.apply(e,t||[])).next())}))}function r(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}var o=function(){function e(){var e=this;this.listeners=[];var t,n,r,o,s=(t=function(){e.updateHistory()},n=0,o=0,function(){var e=this,s=arguments,i=function(){o=null,r||t.apply(e,s)},a=r&&!o;clearTimeout(o),o=setTimeout(i,n),a&&t.apply(e,s)});this.monkeyPatchHistory(),window.addEventListener("locationchange",s,!1),window.addEventListener("hashchange",s,!1),window.addEventListener("popstate",s,!1),window.addEventListener("pushState",s,!1),window.addEventListener("replaceState",s,!1)}return e.prototype.addListener=function(e){this.listeners.push(e)},e.prototype.destroy=function(){},e.prototype.monkeyPatchHistory=function(){var e=function(e){var t=history[e];return function(){var n=t.apply(this,arguments),r=new Event(e);return r.arguments=arguments,window.dispatchEvent(r),n}};history.pushState=e("pushState"),history.replaceState=e("replaceState")},e.prototype.updateHistory=function(){for(var e,t=window.location.href,n=null===(e=null===window||void 0===window?void 0:window.history)||void 0===e?void 0:e.state,r=0,o=this.listeners;r<o.length;r++){(0,o[r])({url:t,state:n})}},e}(),s=function(){function e(){var e=this;this.listeners=[],document.querySelector("title")?this.setup():setTimeout((function(){return e.setup()}),0)}return e.prototype.setup=function(){var e=this;this.observer=new MutationObserver((function(){return e.updateTitle()}));var t=document.querySelector("title");t&&this.observer.observe(t,{subtree:!0,characterData:!0,childList:!0})},e.prototype.addListener=function(e){this.listeners.push(e)},e.prototype.destroy=function(){this.observer&&this.observer.disconnect()},e.prototype.updateTitle=function(){for(var e=this.getTitle(),t=0,n=this.listeners;t<n.length;t++){(0,n[t])(e)}},e.prototype.getTitle=function(){return document.title},e}(),i=function(){function e(){this.requestHandlers=new Map,this.ready=!1}return e.prototype.addRequestHandler=function(e,t){this.requestHandlers.set(e,t)},e.prototype.download=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,this.send("download",e)];case 1:return[2,t.sent()]}}))}))},e.prototype.setup=function(e){return n(this,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:if(this.ready)throw new Error("LayersSDK already set up!");return this.options=e.options,[4,this.send("setup",e)];case 1:if(!(t=n.sent()).success)throw new Error("Handshake failed!");return this.ready=!0,[2,{bridgeConnected:!0,platform:this.getPlatform(),payload:t.payload,session:t.session,userId:t.userId,communityId:t.communityId,accountId:t.accountId}]}}))}))},e}();function a(e){for(var t=0,n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t|=0}return t.toString(16)}var d=/^LAYERS:(-?[0-9a-f]+):(.+)$/,u=new(function(){function e(){}return e.prototype.serialize=function(e){var t=JSON.stringify(e);return"LAYERS:"+a(t)+":"+t},e.prototype.deserialize=function(e){var t=d.exec(e);if(!t)throw new Error("Malformed message");var n=t[1],r=t[2];if(a(r)!==n)throw new Error("Corrupted message");return JSON.parse(r)},e}()),c=function(e){function o(t){var n=e.call(this)||this;return n.pendingMessages={},n.targetWindow=t.targetWindow,n.targetOrigin=t.targetOrigin,n.version="1.0.5",n._bindedEventHandler=n._eventHandler.bind(n),window.addEventListener("message",n._bindedEventHandler,!1),n}return t(o,e),o.prototype.getPlatform=function(){return"iframe"},o.prototype.getLastOrigin=function(){return this.lastOrigin},o.prototype.setup=function(t){var o,s;return n(this,void 0,void 0,(function(){var n,i=this;return r(this,(function(r){switch(r.label){case 0:if(window===this.targetWindow)throw new Error("Target must be a different Window");return[4,e.prototype.setup.call(this,t)];case 1:return n=r.sent(),this.layersPortalLocation=null===(o=n.payload)||void 0===o?void 0:o.layersPortalLocation,this.layersPortalInnerLocationBase=null===(s=n.payload)||void 0===s?void 0:s.layersPortalInnerLocationBase,window.addEventListener("focus",(function(){return i.setLocalStorage()})),this.setLocalStorage(),[2,n]}}))}))},o.prototype.setLocalStorage=function(){this.layersPortalLocation&&(localStorage.__layers_portal_location__=this.layersPortalLocation),this.layersPortalInnerLocationBase&&(localStorage.__layers_portal_inner_location_base__=this.layersPortalInnerLocationBase)},o.prototype.destroy=function(){this._bindedEventHandler&&(window.removeEventListener("message",this._bindedEventHandler,!1),this._bindedEventHandler=null),this.ready=!1},o.prototype.send=function(e,t,n){var r=this;return void 0===n&&(n=3e4),new Promise((function(o,s){var i=~~(Math.random()*(1<<30)),a=setTimeout((function(){s(new Error("Message "+i+" timed out!"))}),n);r.pendingMessages[i]={resolve:o,reject:s,timeoutId:a};var d={id:i,method:e,payload:t,version:r.version,type:"request"};try{r._postMessage(r.targetWindow,d,r.targetOrigin)}catch(e){return s(e)}}))},o.prototype.dispatch=function(e,t){if(this.requestHandlers.has(e))return this.requestHandlers.get(e)(t)},o.prototype._postMessage=function(e,t,n){var r=u.serialize(t);e.postMessage(r,n)},o.prototype._eventHandler=function(e){if(e.source===this.targetWindow){var t;this.lastOrigin=e.origin;try{t=u.deserialize(e.data)}catch(e){return}if(t.id)switch(t.type){case"response":return void this._handleResponseMessage(t);case"error":return void this._handleErrorMessage(t);case"request":return void this._handleRequestMessage(t,e.source);default:this.dispatch("error",new Error('Message received with unknown type "'+t.type+'"!'))}else this.dispatch("error",new Error("Message received without id!"))}},o.prototype._handleResponseMessage=function(e){var t=e.id,n=e.payload;if(t in this.pendingMessages){var r=this.pendingMessages[t],o=r.resolve,s=r.timeoutId;clearTimeout(s),delete this.pendingMessages[t],o(n)}},o.prototype._handleErrorMessage=function(e){var t=e.id,n=new Error(e.payload);if(t in this.pendingMessages){var r=this.pendingMessages[t],o=r.reject,s=r.timeoutId;clearTimeout(s),delete this.pendingMessages[t],o(n)}},o.prototype._handleRequestMessage=function(e,t){var n=this,r=e.id,o=e.method,s=e.payload,i=this.dispatch(o,s);Promise.resolve(i).then((function(e){n._postMessage(t,{id:r,payload:e,version:n.version,type:"response"},"*")})).catch((function(e){n._postMessage(t,{id:r,payload:e.message,version:n.version,type:"error"},"*")}))},o}(i);var l=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return t(o,e),o.prototype.setup=function(e){return n(this,void 0,void 0,(function(){var t,n,o;return r(this,(function(r){return e.options.insidePortalOnly?(t=localStorage.__layers_portal_location__,n=localStorage.__layers_portal_inner_location_base__,t?window.location.href.startsWith(n)?(o=window.location.href.substring(n.length),window.location.href=""+t+o):window.location.href=t:window.location.href="https://id.layers.digital/",[2]):(this.ready=!1,[2,{bridgeConnected:!1,accountId:null,communityId:null,session:null,userId:null}])}))}))},o.prototype.getPlatform=function(){return null},o.prototype.send=function(e,t,o){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("App has no bridge to Layers "+e)}))}))},o.prototype.download=function(e){return n(this,void 0,void 0,(function(){var t,n,o;return r(this,(function(r){return t=e.url,n=e.filename,(o=document.createElement("a")).download=n,o.href=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),[2]}))}))},o}(i),p=function(e){function n(){var t=e.call(this)||this;return t.pendingMessages={},t.version="1.0.5",t._bindedEventHandler=t._eventHandler.bind(t),window.addEventListener("layers:android",t._bindedEventHandler,!1),t}return t(n,e),n.prototype.getPlatform=function(){return"android"},n.prototype.destroy=function(){this._bindedEventHandler&&(window.removeEventListener("layers:android",this._bindedEventHandler,!1),this._bindedEventHandler=null),this.ready=!1},n.prototype.send=function(e,t,n){var r=this;return void 0===n&&(n=3e4),new Promise((function(o,s){var i=~~(Math.random()*(1<<30)),a=setTimeout((function(){s(new Error("Message "+i+" timed out!"))}),n);r.pendingMessages[i]={resolve:o,reject:s,timeoutId:a};var d={layers:!0,id:i,method:e,payload:t,version:r.version,type:"request",success:!0};try{r._postMessage(d)}catch(e){return s(e)}}))},n.prototype.dispatch=function(e,t){if(this.requestHandlers.has(e))return this.requestHandlers.get(e)(t)},n.prototype._postMessage=function(e){window.LayersAndroidBridge.send(JSON.stringify(e))},n.prototype._eventHandler=function(e){var t=e.detail;if(t.id)switch(t.type){case"response":return void this._handleResponseMessage(t);case"request":return void this._handleRequestMessage(t);default:this.dispatch("error",new Error('Message received with unknown type "'+t.type+'"!'))}else this.dispatch("error",new Error("Message received without id!"))},n.prototype._handleResponseMessage=function(e){var t=e.id,n=e.payload;if(t in this.pendingMessages){var r=this.pendingMessages[t],o=r.timeoutId;if(clearTimeout(o),delete this.pendingMessages[t],e.success)(0,r.resolve)(n);else(0,r.reject)(n)}},n.prototype._handleRequestMessage=function(e){var t=this,n=e.id,r=e.method,o=e.payload,s=this.dispatch(r,o);Promise.resolve(s).then((function(e){t._postMessage({layers:!0,id:n,payload:e,version:t.version,type:"response",success:!0})})).catch((function(e){t._postMessage({layers:!0,id:n,payload:e.message,version:t.version,type:"error",success:!1})}))},n}(i);var h=function(e){function n(){var t=e.call(this)||this;return t.pendingMessages={},t.version="1.0.5",t._bindedEventHandler=t._eventHandler.bind(t),window.addEventListener("layers:ios",t._bindedEventHandler,!1),t}return t(n,e),n.prototype.getPlatform=function(){return"ios"},n.prototype.destroy=function(){this._bindedEventHandler&&(window.removeEventListener("layers:ios",this._bindedEventHandler,!1),this._bindedEventHandler=null),this.ready=!1},n.prototype.send=function(e,t,n){var r=this;return void 0===n&&(n=3e4),new Promise((function(o,s){var i=~~(Math.random()*(1<<30)),a=setTimeout((function(){s(new Error("Message "+i+" timed out!"))}),n);r.pendingMessages[i]={resolve:o,reject:s,timeoutId:a};var d={layers:!0,id:i,method:e,payload:t,version:r.version,type:"request",success:!0};try{r._postMessage(d)}catch(e){return s(e)}}))},n.prototype.dispatch=function(e,t){if(this.requestHandlers.has(e))return this.requestHandlers.get(e)(t)},n.prototype._postMessage=function(e){window.webkit.messageHandlers.LayersIosBridge.postMessage(e)},n.prototype._eventHandler=function(e){var t=e.detail;if(t.id)switch(t.type){case"response":return void this._handleResponseMessage(t);case"request":return void this._handleRequestMessage(t);default:this.dispatch("error",new Error('Message received with unknown type "'+t.type+'"!'))}else this.dispatch("error",new Error("Message received without id!"))},n.prototype._handleResponseMessage=function(e){var t=e.id,n=e.payload;if(t in this.pendingMessages){var r=this.pendingMessages[t],o=r.timeoutId;if(clearTimeout(o),delete this.pendingMessages[t],e.success)(0,r.resolve)(n);else(0,r.reject)(n)}},n.prototype._handleRequestMessage=function(e){var t=this,n=e.id,r=e.method,o=e.payload,s=this.dispatch(r,o);Promise.resolve(s).then((function(e){t._postMessage({layers:!0,id:n,payload:e,version:t.version,type:"response",success:!0})})).catch((function(e){t._postMessage({layers:!0,id:n,payload:e.message,version:t.version,type:"error",success:!1})}))},n}(i);window.LayersPortal=function(){var e,t,i,a,d=this,u=document.createElement("div"),f=new o,v=new s,y=((e={setup:function(e){return n(this,void 0,void 0,(function(){var t,n=this;return r(this,(function(r){switch(r.label){case 0:if(this.ready)throw new Error("LayersPortalSDK already set up!");return this.options=e,(a=function(){var e,t;return window.LayersAndroidBridge?new p:(null===(t=null===(e=window.webkit)||void 0===e?void 0:e.messageHandlers)||void 0===t?void 0:t.LayersIosBridge)?new h:window.frameElement||window.parent!==window?new c({targetOrigin:"*",targetWindow:window.parent}):new l}()).addRequestHandler("ping",(function(){return"pong"})),t=this,[4,a.setup({options:e,url:window.location.href,state:null===history||void 0===history?void 0:history.state,title:v.getTitle()})];case 1:return t.setupResult=r.sent(),this.ready=!0,this.platform=this.setupResult.platform,u.dispatchEvent(new CustomEvent("ready",{detail:this.setupResult})),this.setupResult.bridgeConnected?(this.connected=!0,this.session=this.setupResult.session,this.accountId=this.setupResult.accountId,this.userId=this.setupResult.userId,this.communityId=this.setupResult.communityId,u.dispatchEvent(new CustomEvent("connected",{detail:this.setupResult})),f.addListener((function(e){n("update",e)})),v.addListener((function(e){n("update",{title:e})})),f.updateHistory(),v.updateTitle(),[2]):[2]}}))}))},ping:function(){return a.send("ping")},getAccountToken:function(){return a.send("getAccountToken")},getCommunity:function(){return a.send("getCommunity")},ready:function(){return a.send("ready")},update:function(e){return a.send("update",e)},download:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,a.download(e)];case 1:return[2,t.sent()]}}))}))},close:function(e){try{a.send("close",e)}catch(e){}try{window.close()}catch(e){}}})["layers-id:callback"]=function(e){return a.send("layers-id:callback",e)},e),w=function(e,t){return n(d,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:if(!(n=y[e]))throw new Error("Method "+e+" not found.");return[4,n.bind(w)(t)];case 1:return[2,r.sent()]}}))}))};w.ready=!1,w.connected=!1,w.setupResult=null,w.platform=this,w.session=null,w.userId=null,w.communityId=null,w.accountId=null,w.on=function(e,t){u.addEventListener(e,(function(e){t(e.detail)}))};var g=null===(t=window.LayersPortal)||void 0===t?void 0:t.q;if(g)for(var m=0,_=g;m<_.length;m++){var b=_[m],M=b[0],E=b[1],L=b[2],H=b[3];w(L,H).then(M).catch(E)}var P=null===(i=window.LayersPortal)||void 0===i?void 0:i.eh;if(P)for(var I in P)for(var R=0,q=P[I];R<q.length;R++){var S=q[R];w.on(I,S)}return w}(),window.LayersPortalOptions&&window.LayersPortal("setup",window.LayersPortalOptions)}();
//# sourceMappingURL=LayersPortal.js.map
