(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{207:function(e,t,n){e.exports=n(432)},304:function(e,t,n){e.exports=n(247)},431:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(677),{page:e.exports.default}})},432:function(e,t,n){"use strict";var r=n(76),o=n(27);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=O,t.Container=t.default=void 0;var a=o(n(122)),i=o(n(123)),c=o(n(433)),u=o(n(34)),l=o(n(35)),s=o(n(68)),f=o(n(69)),p=o(n(70)),b=o(n(57)),y=r(n(1)),d=o(n(0)),g=n(81),h=n(126),v=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,h.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=O(t);return y.default.createElement(m,null,y.default.createElement(n,(0,c.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,i.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,g.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(y.Component);t.default=v,(0,b.default)(v,"childContextTypes",{headManager:d.default.object,router:d.default.object});var m=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(y.Component);t.Container=m;var w=(0,g.execOnce)(function(){0});function O(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},433:function(e,t,n){var r=n(182);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},677:function(e,t,n){"use strict";n.r(t);var r=n(207),o=n.n(r),a=n(304),i=n.n(a),c=n(1),u=n.n(c),l=n(5),s=n(0),f=n.n(s);n(206);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var y,d="__EMOTION_THEMING__",g=((y={})[d]=f.a.object,y),h=function(e){return"[object Object]"===Object.prototype.toString.call(e)};function v(e,t){if("function"==typeof e){var n=e(t);if(!h(n))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return n}if(!h(e))throw new Error("[ThemeProvider] Please make your theme prop a plain object");return void 0===t?e:p({},t,e)}var m=function(e){function t(){return e.apply(this,arguments)||this}b(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this;void 0!==this.context[d]&&(this.unsubscribeToOuterId=this.context[d].subscribe(function(t){e.outerTheme=t,void 0!==e.broadcast&&e.publish(e.props.theme)})),this.broadcast=function(e){var t={},n=0,r=e;return{publish:function(e){for(var n in r=e,t){var o=t[n];void 0!==o&&o(r)}},subscribe:function(e){var o=n;return t[o]=e,n+=1,e(r),o},unsubscribe:function(e){t[e]=void 0}}}(v(this.props.theme,this.outerTheme))},n.getChildContext=function(){var e;return(e={})[d]={subscribe:this.broadcast.subscribe,unsubscribe:this.broadcast.unsubscribe},e},n.componentWillReceiveProps=function(e){this.props.theme!==e.theme&&this.publish(e.theme)},n.componentWillUnmount=function(){var e=this.context[d];void 0!==e&&e.unsubscribe(this.unsubscribeToOuterId)},n.publish=function(e){this.broadcast.publish(v(e,this.outerTheme))},n.render=function(){return this.props.children?c.Children.only(this.props.children):null},t.childContextTypes=g,t.contextTypes=g,t}(c.Component);function w(e){return e.replace(/^\s+|\s+$/g,"")}var O=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function j(e){console.warn("[react-ga]",e)}var k="REDACTED (Potential Email Address)";function T(e,t){return function(e){return/[^@]+@[^@]+/.test(e)}(e)?(j("This arg looks like an email address, redacting."),k):t?w(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(O)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var E=function(e){var t,n,r,o,a,i,c,u="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?u=e.gaAddress:e&&e.debug&&(u="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=u,a="ga",t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),c=n.getElementsByTagName(r)[0],i.async=1,i.src=o,c.parentNode.insertBefore(i,c)};function A(e){console.info("[react-ga]",e)}var P=[],S={calls:P,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];P.push(t.concat())}};function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L="_blank",M=1,G=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,o=(e=I(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==_(o)&&"function"!=typeof o?q(r):o,D(q(q(n)),"handleClick",function(e){var r=n.props,o=r.target,a=r.eventLabel,i=r.to,c=r.onClick,u={label:a},l=o!==L,s=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===M);l&&s?(e.preventDefault(),t.trackLink(u,function(){window.location.href=i})):t.trackLink(u,function(){}),c&&c(e)}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,c["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){D(e,t,n[t])})}return e}({},C(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===L&&(n.rel="noopener noreferrer"),delete n.eventLabel,u.a.createElement("a",n)}}])&&x(n.prototype,r),o&&x(n,o),t}();function J(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}D(G,"trackLink",function(){j("ga tracking not enabled")}),D(G,"propTypes",{eventLabel:f.a.string.isRequired,target:f.a.string,to:f.a.string,onClick:f.a.func}),D(G,"defaultProps",{target:null,to:null,onClick:null});var H=!1,V=!0,Z=!1,B=!0,F=function(){var e;return Z?S.ga.apply(S,arguments):"undefined"!=typeof window&&(window.ga?(e=window).ga.apply(e,arguments):j("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function K(e){return T(e,V)}function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"==typeof F){if("string"!=typeof o)return void j("ga command must be a string");!B&&Array.isArray(e)||F.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){F.apply(void 0,U(["".concat(e,".").concat(o)].concat(n.slice(1))))})}}function X(e,t){e?(t&&(t.debug&&!0===t.debug&&(H=!0),!1===t.titleCase&&(V=!1)),t&&t.gaOptions?F("create",e,t.gaOptions):F("create",e,"auto")):j("gaTrackingID is required in initialize()")}function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(F.apply(void 0,t),H&&(A("called ga('arguments');"),A("with arguments: ".concat(JSON.stringify(t))))),window.ga}function Q(e,t){W(t,"send",e),H&&(A("called ga('send', fieldObject);"),A("with fieldObject: ".concat(JSON.stringify(e))),A("with trackers: ".concat(JSON.stringify(t))))}var Y={require:function(e,t){if(e){var n=w(e);if(""!==n)if(t){if("object"!==z(t))return void j("Expected `options` arg to be an Object");0===Object.keys(t).length&&j("Empty `options` given to .require()"),$("require",n,t),H&&A("called ga('require', '".concat(n,"', ").concat(JSON.stringify(t)))}else $("require",n),H&&A("called ga('require', '".concat(n,"');"));else j("`name` cannot be an empty string in .require()")}else j("`name` is required in .require()")},execute:function(e,t){var n,r;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)j("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)j("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?($(o,r,n),H&&(A("called ga('".concat(o,"');")),A('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?($(o,n),H&&(A("called ga('".concat(o,"');")),A("with payload: ".concat(JSON.stringify(n))))):($(o),H&&A("called ga('".concat(o,"');")))}}};function ee(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:K(e.label)},o=!1,a=setTimeout(function(){o=!0,t()},250);r.hitCallback=function(){clearTimeout(a),o||t()},Q(r,n)}else j("args.label is required in outboundLink()");else j("hitCallback function is required")}G.origTrackLink=G.trackLink,G.trackLink=ee;var te={initialize:function(e,t){if(t&&!0===t.testMode)Z=!0;else{if("undefined"==typeof window)return!1;E(t)}return B=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===z(e)?X(e.trackingId,e):j("All configs must be an object")}):X(e,t),!0},ga:$,set:function(e,t){e?"object"===z(e)?(0===Object.keys(e).length&&j("empty `fieldsObject` given to .set()"),W(t,"set",e),H&&(A("called ga('set', fieldsObject);"),A("with fieldsObject: ".concat(JSON.stringify(e))))):j("Expected `fieldsObject` arg to be an Object"):j("`fieldsObject` is required in .set()")},send:Q,pageview:function(e,t,n){if(e){var r=w(e);if(""!==r){var o={};if(n&&(o.title=n),W(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){R(e,t,n[t])})}return e}({hitType:"pageview",page:r},o)),H){A("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),A("with path: ".concat(r).concat(a))}}else j("path cannot be an empty string in .pageview()")}else j("path is required in .pageview()")},modalview:function(e,t){if(e){var n,r="/"===(n=w(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);W(t,"send","pageview",o),H&&(A("called ga('send', 'pageview', path);"),A("with path: ".concat(o)))}else j("modalName cannot be an empty string or a single / in .modalview()")}else j("modalName is required in .modalview(modalName)")},timing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"==typeof r){var i={hitType:"timing",timingCategory:K(t),timingVar:K(n),timingValue:r};o&&(i.timingLabel=K(o)),Q(i,a)}else j("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=J(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:K(t),eventAction:K(n)};r&&(l.eventLabel=K(r)),void 0!==o&&("number"!=typeof o?j("Expected `args.value` arg to be a Number."):l.eventValue=o),void 0!==a&&("boolean"!=typeof a?j("`args.nonInteraction` must be a boolean."):l.nonInteraction=a),void 0!==i&&("string"!=typeof i?j("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&j("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=i)),Object.keys(c).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){l[e]=c[e]}),Object.keys(c).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){l[e]=c[e]}),Q(l,u)}else j("args.category AND args.action are required in event()")},exception:function(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=K(n)),void 0!==r&&("boolean"!=typeof r?j("`args.fatal` must be a boolean."):o.exFatal=r),Q(o,t)},plugin:Y,outboundLink:ee,OutboundLink:G,testModeAPI:S},ne=n(22);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return ue}),"undefined"!=typeof window&&Object(l.b)(window.__NEXT_DATA__.ids),Object(l.c)("body{margin:0;font-family:",ne.a.font.sansSerif,";background-color:",ne.a.colors.gray[9],";}");var ue=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ae(this,ie(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(t,o.a),n=t,(a=[{key:"componentDidMount",value:function(){window.GA_INITIALIZED||(te.initialize("UA-10218544-27"),window.GA_INITIALIZED=!0),te.set({page:window.location.pathname}),te.pageview(window.location.pathname)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return u.a.createElement(r.Container,null,u.a.createElement(i.a,null,u.a.createElement("title",null,"Colors - Cloudflare.design")),u.a.createElement(m,{theme:ne.a},u.a.createElement(t,n)))}}])&&oe(n.prototype,a),c&&oe(n,c),t}()}},[[431,0,1]]]);