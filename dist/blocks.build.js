!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===N.call(e)}function o(e){return"[object ArrayBuffer]"===N.call(e)}function s(e){return"undefined"!==typeof FormData&&e instanceof FormData}function i(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"===typeof e}function c(e){return"number"===typeof e}function u(e){return"undefined"===typeof e}function p(e){return null!==e&&"object"===typeof e}function l(e){return"[object Date]"===N.call(e)}function f(e){return"[object File]"===N.call(e)}function d(e){return"[object Blob]"===N.call(e)}function h(e){return"[object Function]"===N.call(e)}function m(e){return p(e)&&h(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function v(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function b(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function S(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=S(t[n],e):t[n]="object"===typeof e?S({},e):e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function C(e,t,n){return v(t,function(t,r){e[r]=n&&"function"===typeof t?R(t,n):t}),e}var R=n(1),x=n(16),N=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:x,isFormData:s,isArrayBufferView:i,isString:a,isNumber:c,isObject:p,isUndefined:u,isDate:l,isFile:f,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:w,forEach:v,merge:b,deepMerge:S,extend:C,trim:g}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(0),s=n(22),i={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=n(5):"undefined"!==typeof XMLHttpRequest&&(e=n(5)),e}(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(i)}),e.exports=a}).call(t,n(21))},function(e,t,n){"use strict";var r=n(0),o=n(23),s=n(2),i=n(25),a=n(26),c=n(6);e.exports=function(e){return new Promise(function(t,u){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(f.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?i(f.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?f.response:f.responseText,s={data:r,status:f.status,statusText:f.statusText,headers:n,config:e,request:f};o(t,u,s),f=null}},f.onabort=function(){f&&(u(c("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){u(c("Network Error",e,null,f)),f=null},f.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var m=n(27),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in f&&r.forEach(l,function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete l[t]:f.setRequestHeader(t,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),u(e),f=null)}),void 0===p&&(p=null),f.send(p)})}},function(e,t,n){"use strict";var r=n(24);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(10)},function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(11),c=(n.n(a),n(12)),u=(n.n(c),n(13)),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=wp.i18n.__,f=wp.blocks.registerBlockType,d=wp.editor.InspectorControls,h=wp.components.SelectControl,m=wp.components.Button,y=wp.components.CheckboxControl,g=(wp.compose.withState,wp.element.Component),w=(wp.editor.RichText,wp.editor.AlignmentToolbar,wp.editor.BlockControls,wp.element.createElement),v=w("svg",{width:20,height:20,viewBox:"0 0 64 64"},w("path",{className:"cls-4",d:"M17.26-3.5S19-12.79,10.75-13.64C4.69-14.27-13.12-.44-14,20.17c-.33,7.39,1.51,15.66,6.84,24.44C13,77.89,72.43,80.35,59.62,109.75S103.7,87.69,56,67.51c0,0,18.4,4.94,20.74,17.31,0,0,.71-20.34-36.81-40C10.41,29.28,18,7.3,18,7.3Z"}),w("path",{className:"cls-4",d:"M-12.63,11a101.23,101.23,0,0,0-.86,24.91C-12.13,48.14,5.36,70.51,19.88,75s35.5,21.78,30.71,28.89S45,110.33,45,110.33s11.58-3,10.6-20.07S23.13,67.9,14.34,66.12-16.1,53.26-12.63,11Z"}),w("path",{className:"cls-5",d:"M-40.63,66.53c2.51,1.3,5.13,2.71,5.9,3.53,1.5,1.57,7.46,48.5,7.46,48.5L-9.35,92.65,7,84.15s-30.37,46.75-37,51.8-6.76-37.61-6.82-41-1.49-21.2-1.49-21.2c-1-1.74-10.41,1.2-16.12,4.1s-4,.8-4,.8l8.75-5-6.6-2.72a38.65,38.65,0,0,0,2.66-3.28c1.43-2,5.88-9.67,5.88-9.67.87,1.48-3.58,9.1-3.58,9.1l.28-.07c1.93-1.07,4.87-7.44,4.87-7.44.91,2.46-4.86,10-4.86,10l2.89,2.38,7.36-3.31s-1.17-.92-2.53-2"}),w("path",{className:"cls-6",d:"M31.84,44.89S28.43,66.32,24.29,66s-13-5.71-17.83,2.73-19,25.93-19,25.93l9.32,7.42L6.84,89.36l10.23,11.55,25.5,5.94,1.07,17.67,11.6-.38s1.58-42.4-2.14-47.58S38,74.7,38.48,63.36a114.23,114.23,0,0,1,2.28-19Z"}),w("path",{className:"cls-7",d:"M28.62,85.65c8.5,2.41,17.37-3,22.79-10.65C46.76,72,38,73.31,38.48,63.36a114.23,114.23,0,0,1,2.28-19l-8.92.5S28.43,66.32,24.29,66a56.62,56.62,0,0,1-6-1.45C17.92,70.86,19.31,83,28.62,85.65Z"}),w("path",{className:"cls-4",d:"M8.08-.93S-10.54,9.72,3.85,35.43c10.41,18.62,11.2-8.73,13.41-15S17.65.88,17.65.88Z"}),w("path",{className:"cls-8",d:"M8.7,46.37s-4.53-.93-6.37-4.87C-1.25,33.88,5,34.72,6.25,36.13S8.7,46.37,8.7,46.37Z"}),w("path",{className:"cls-9",d:"M6.72,43.48s-3.46-1.67-3.4-4.36,1.57,0,1.57,0l-.21-1.26S7.85,43.13,6.72,43.48Z"}),w("path",{className:"cls-8",d:"M56.88,39.75s4.37-1.51,5.71-5.65c2.58-8-3.51-6.38-4.57-4.82S56.88,39.75,56.88,39.75Z"}),w("path",{className:"cls-9",d:"M58.35,36.38s3.21-2.1,2.82-4.75-1.57.14-1.57.14l0-1.28S57.18,36.18,58.35,36.38Z"}),w("path",{className:"cls-8",d:"M58.37,13.72l-20-11.33L22,8.29S2.53,14.59,4,30.58C4.7,38.26,7,62.16,34.19,56c.21-.05,6.19-1.14,6.15-1.16C67,45.76,58.37,13.72,58.37,13.72Z"}),w("path",{className:"cls-10",d:"M39.21,23.22s4.46-5.1,8.87-4c.28.07.5,0,0-.23-1.29-.57-5-.07-6.56.86-2.4,1.44-4.15,2.72-3.43,3.23S39.21,23.22,39.21,23.22Z"}),w("path",{className:"cls-10",d:"M22,26.53s-6-3.08-9.69-.38c-.24.17-.46.18-.09-.21,1-1,4.63-1.93,6.4-1.64,2.76.46,4.86,1,4.39,1.73S22,26.53,22,26.53Z"}),w("path",{className:"cls-11",d:"M2,33.15Z"}),w("path",{className:"cls-12",d:"M30.29,39.26A2.7,2.7,0,0,0,33,41.6c2.52.15-3.24,1.19-3.33-.49S30.29,39.26,30.29,39.26Z"}),w("path",{className:"cls-13",d:"M25.75,48.43S29,52,32.81,50.84s8.86-4.53,6.6-4.84a18.28,18.28,0,0,0-4.57.06l-2,1.09-3.68.21Z"}),w("path",{className:"cls-14",d:"M26.13,48.37s4.51,2.41,13.21-2.06A5.35,5.35,0,0,0,37,45.84c-.78.19-2.77.91-2.77.91a22.24,22.24,0,0,1-3.6.5A29.32,29.32,0,0,0,26.13,48.37Z"}),w("path",{className:"cls-15",d:"M27,48.3S24.6,50,32.06,50.11c3.95-.45,7.54-2.5,7.47-4.56l1.2-.53s-.59,1.25-1,2.16a7.71,7.71,0,0,1-6.51,5.65C27.1,54,26.4,49.55,26.4,49.55a17.4,17.4,0,0,0-1.57-1.12A16.22,16.22,0,0,1,27,48.3Z"}),w("path",{className:"cls-15",d:"M24.9,48.5a11.69,11.69,0,0,0,4.11-2,3.48,3.48,0,0,1,3.22.14s.72-1.21,1.53-1.32,4.52.71,7.29-.56C41.05,44.77,38.29,47.62,24.9,48.5Z"}),w("path",{className:"cls-16",d:"M28.67,48.17A14.51,14.51,0,0,1,24,47.85S26.2,50.26,31,50.1C31,50.1,23.11,49,28.67,48.17Z"}),w("path",{className:"cls-16",d:"M36.56,46.74s3.8-1,5.35-2.69a11.06,11.06,0,0,1-5.87,5S42.05,45.37,36.56,46.74Z"}),w("path",{className:"cls-14",d:"M31.28,51.41a.38.38,0,0,1-.23.49.39.39,0,0,1-.48-.23.37.37,0,0,1,.22-.48A.38.38,0,0,1,31.28,51.41Z"}),w("path",{className:"cls-14",d:"M19.53,32.76C16,32.83,13,34,11.83,35.17c.07.1.3.6.42.74.95,1.09,3.22,2.75,4.75,3,4.19.53,8.48-3.16,8.42-4,0-.17-1.18-.84-1.26-1.25C23.31,32.74,22.53,32.71,19.53,32.76Z"}),w("path",{className:"cls-17",d:"M16.65,36.55a3.09,3.09,0,1,0,1.09-4.24A3.09,3.09,0,0,0,16.65,36.55Z"}),w("path",{className:"cls-18",d:"M17.45,36.08a2.15,2.15,0,0,0,3,.76,2.17,2.17,0,1,0-3-.76Z"}),w("path",{className:"cls-14",d:"M17.23,36.65a1,1,0,1,0,.35-1.38A1,1,0,0,0,17.23,36.65Z"}),w("path",{className:"cls-18",d:"M14.61,34.62a6,6,0,0,1-3.28.75c-1-.31-1.33-.91-2-1.86,0,0,2.12.69,3,.3,0,0-2-.26-2.19-1.91,0,0,2.39,1.35,3.68,1.18a4.22,4.22,0,0,1-1.59-1.37,10.41,10.41,0,0,0,2.89.49c.75-.1,4.78-2,8.58.89a8.69,8.69,0,0,1,1.64,1.63A11.18,11.18,0,0,0,14.61,34.62Z"}),w("path",{className:"cls-14",d:"M43,28.78c3.12-1.56,6.38-1.89,7.94-1.44,0,.12,0,.68,0,.86-.33,1.4-1.59,3.93-2.85,4.8-3.47,2.43-9,1.15-9.3.4-.06-.16.67-1.29.56-1.69C39.64,30.52,40.31,30.12,43,28.78Z"}),w("path",{className:"cls-17",d:"M47.29,30.81a3.08,3.08,0,1,1-2.9-3.25A3.08,3.08,0,0,1,47.29,30.81Z"}),w("path",{className:"cls-18",d:"M46.38,30.76a2.17,2.17,0,1,1-2-2.29A2.16,2.16,0,0,1,46.38,30.76Z"}),w("path",{className:"cls-14",d:"M46.84,31.16a1,1,0,1,1-1-1.06A1,1,0,0,1,46.84,31.16Z"}),w("path",{className:"cls-18",d:"M48.23,28.15a6,6,0,0,0,3.25-.86c.76-.74.75-1.42.93-2.58,0,0-1.56,1.6-2.56,1.67,0,0,1.63-1.15,1.07-2.71,0,0-1.49,2.31-2.73,2.76a4.28,4.28,0,0,0,.79-2,10.68,10.68,0,0,1-2.34,1.79c-.72.26-5.15.47-7.2,4.76a8.82,8.82,0,0,0-.71,2.21A11.2,11.2,0,0,1,48.23,28.15Z"}),w("path",{className:"cls-4",d:"M6.55.47S7.08,15,15.63,15.63s40-2.62,44.09,12.94c0,0,4.21-36.9-22.51-41.34S6.55.47,6.55.47Z"}),w("path",{className:"cls-19",d:"M23.64,143.23c1.32,0,2.62,0,3.93-.1a9.66,9.66,0,0,1-1.47-6.56c1-7,3.68-15.12,12.9-22.5,3.55-2.84,7.31-5.29,6.25-12.92l6.52-26.27-4.83-2.06s-2,26-12.17,26.33S10.18,95.55,11.33,87.1s8.21-22.51,8.21-22.51l-5.73-.78S6.88,89.1,4.12,93.15-.57,100.44,2.23,107,5.81,123.11-1,134.35a20.21,20.21,0,0,1-3.72,4A84.14,84.14,0,0,0,23.64,143.23Z"})),b=function(e){function t(){o(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state=e.constructor.getInitialState(e.props.attributes.id),e.getRecipes=e.getRecipes.bind(e),e.getRecipes(),e.getRecipeContent(e.props.attributes.id),e.getRecipeContent=e.getRecipeContent.bind(e),e.onChangeSelectRecipe=e.onChangeSelectRecipe.bind(e),e.onChangeShowUnLinkedRecipes=e.onChangeShowUnLinkedRecipes.bind(e),e.onChangeShowUnLinkedRecipes(!0),e.isRecipeSelected=e.isRecipeSelected.bind(e),e}return i(t,e),p(t,null,[{key:"getInitialState",value:function(e){return{recipes:[],id:e,showUnLinkedRecipes:!0,recipe:{},recipeContent:"",hasRecipes:!0}}}]),p(t,[{key:"getRecipes",value:function(){var e=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];u.b().then(function(t){var n=t.data;if(n&&0!==e.state.id){var r=n.find(function(t){return t.id===e.state.id});0===n.length&&(e.setState({hasRecipes:!1}),e.props.setAttributes({hasRecipes:!1})),e.setState({recipe:r,recipes:n})}else e.setState({recipes:n})})}},{key:"getRecipeContent",value:function(e){var t=this;u.a(e).then(function(e){var n=e.data;n&&t.setState({recipeContent:n})})}},{key:"getEditRecipeURL",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],this.props.attributes.id),t=wp.data.select("core/editor").getCurrentPostId();return zrdn.site_url+"/wp-admin/admin.php?page=zrdn-recipes&id="+e+"&post_id="+t}},{key:"getCreateRecipeURL",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],wp.data.select("core/editor").getCurrentPostId()),t=wp.data.select("core/editor").getCurrentPostType();return zrdn.site_url+"/wp-admin/?page=zrdn-recipes&action=new&post_id="+e+"&post_type="+t}},{key:"onChangeSelectRecipe",value:function(e){var t=this.state.recipes.find(function(t){return t.id===e});this.setState({id:e,recipe:t}),this.getRecipeContent(e),this.props.setAttributes({id:e})}},{key:"onChangeShowUnLinkedRecipes",value:function(e){this.setState({showUnLinkedRecipes:e}),this.props.setAttributes({showUnLinkedRecipes:e})}},{key:"isRecipeSelected",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return 0===this.props.attributes.id||!this.state.recipe||!this.state.recipe.hasOwnProperty("title")}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=t.attributes;o=void 0===o?{}:o,r(o);var s=[{value:0,label:l("Select a recipe","zip-recipes")}],i=l("Loading...","zip-recipes"),a="recipe-title";return this.props.attributes.hasRecipes||(i=l("No recipes found. Create a recipe first!","zip-recipes"),a="no-recipes"),this.state.recipes.length>0&&(i=this.props.isSelected?sprintf(l("%sCreate a new recipe%s, or select a recipe from the dropdownlist","zip-recipes"),'<a href="'+this.getCreateRecipeURL()+'">',"</a>"):l("No recipe selected. Click this block to show the recipe controls in the sidebar","zip-recipes"),this.state.recipes.forEach(function(t){e.props.attributes.showUnLinkedRecipes?0==t.post_id&&s.push({value:t.id,label:t.title}):s.push({value:t.id,label:t.title})})),0!==this.props.attributes.id&&this.state.recipe&&this.state.recipe.hasOwnProperty("title")&&(i=this.state.recipeContent.content,a=this.props.attributes.id),[!!this.props.isSelected&&wp.element.createElement(d,{key:"inspector"},wp.element.createElement(y,{label:l("Show only unlinked recipes","zip-recipes"),checked:this.props.attributes.showUnLinkedRecipes,onChange:this.onChangeShowUnLinkedRecipes}),wp.element.createElement(h,{onChange:this.onChangeSelectRecipe,value:this.props.attributes.id,label:l("Select a recipe","zip-recipes"),options:s}),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement(m,{isDefault:!0,disabled:this.isRecipeSelected(),href:this.getEditRecipeURL()},l("Edit recipe","zip-recipes")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement(m,{isDefault:!0,href:this.getCreateRecipeURL()},l("Create and insert recipe","zip-recipes"))))),wp.element.createElement("div",{key:a,className:n,dangerouslySetInnerHTML:{__html:i}})]}}]),t}(g);f("zip-recipes/recipe-block",{title:l("Zip Recipes","zip-recipes"),description:l("Create a recipe card.","zip-recipes"),icon:v,category:"widgets",keywords:[l("Recipe","zip-recipes"),l("Zip Recipes","zip-recipes"),l("Recipes","zip-recipes")],attributes:{hasRecipes:{type:"string",default:"false"},content:{type:"string",source:"children",selector:"p"},id:{type:"string",default:""},recipes:{type:"array"},recipe:{type:"array"},showUnLinkedRecipes:{type:"boolean"}},edit:b,save:function(){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return i});var r=n(14),o=n.n(r),s=function(){return o.a.get(zrdn.site_url+"/wp-json/zip-recipes/v1/recipes")},i=function(e){return o.a.get(zrdn.site_url+"/wp-json/zip-recipes/v2/recipe/"+e)}},function(e,t,n){e.exports=n(15)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(0),s=n(1),i=n(17),a=n(7),c=n(4),u=r(c);u.Axios=i,u.create=function(e){return r(a(u.defaults,e))},u.Cancel=n(8),u.CancelToken=n(30),u.isCancel=n(3),u.all=function(e){return Promise.all(e)},u.spread=n(31),e.exports=u,e.exports.default=u},function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(0),s=n(2),i=n(18),a=n(19),c=n(7);r.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=c(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=c(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(0),s=n(20),i=n(3),a=n(4),c=n(28),u=n(29);e.exports=function(e){return r(e),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(p===setTimeout)return setTimeout(e,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function s(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?h=d.concat(h):y=-1,h.length&&a())}function a(){if(!m){var e=o(i);m=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,m=!1,s(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var p,l,f=e.exports={};!function(){try{p="function"===typeof setTimeout?setTimeout:n}catch(e){p=n}try{l="function"===typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,h=[],m=!1,y=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||m||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(8);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}]);