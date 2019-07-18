(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(23),__webpack_require__(24),__webpack_require__(30),__webpack_require__(19),__webpack_require__(1),__webpack_require__(219),__webpack_require__(220),__webpack_require__(17),__webpack_require__(31),__webpack_require__(27);var react=__webpack_require__(33),react_default=__webpack_require__.n(react),fullstory_script=function(){return m=window,n=document,e=window._fs_namespace,t="script",l="user",e in m?void(m.console&&m.console.log&&m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].')):((g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s)}).q=[],(o=n.createElement(t)).async=1,o.crossOrigin="anonymous",o.src="https://"+_fs_host+"/s/fs.js",(y=n.getElementsByTagName(t)[0]).parentNode.insertBefore(o,y),g.identify=function(i,v,s){g(l,{uid:i},s),v&&g(l,v,s)},g.setUserVars=function(v,s){g(l,v,s)},g.event=function(i,v,s){g("event",{n:i,p:v},s)},g.shutdown=function(){g("rec",!1)},g.restart=function(){g("rec",!0)},g.log=function(a,b){g("log",[a,b])},g.consent=function(a){g("consent",!arguments.length||a)},g.identifyAccount=function(i,v){o="account",(v=v||{}).acctId=i,g(o,v)},void(g.clearUserCookie=function(){}));var m,n,e,t,l,o,g,y};function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}__webpack_require__.d(__webpack_exports__,"a",function(){return FullStoryAPI}),__webpack_require__.d(__webpack_exports__,"b",function(){return src_FullStory});var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),getWindowFullStory=function(){return window[window._fs_namespace]},FullStoryAPI=function(fn){if(canUseDOM&&getWindowFullStory()){for(var _len=arguments.length,args=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];getWindowFullStory()[fn].apply(null,args)}else console.warn("FullStory not initialized yet")},src_FullStory=function(_React$Component){function FullStory(props){var _this;(function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")})(this,FullStory),_this=_possibleConstructorReturn(this,_getPrototypeOf(FullStory).call(this,props));var org=props.org,debug=props.debug,host=props.host,namespace=props.namespace;return org&&canUseDOM?(getWindowFullStory()||(window._fs_debug=debug||!1,window._fs_host=host||"fullstory.com",window._fs_org=org,window._fs_namespace=namespace||"FS",fullstory_script()),_this):_possibleConstructorReturn(_this)}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(FullStory,react_default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(FullStory,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(){return!1}},{key:"componentWillUnmount",value:function componentWillUnmount(){return!(!canUseDOM||!getWindowFullStory())&&(getWindowFullStory().shutdown(),void getWindowFullStory())}},{key:"render",value:function render(){return!1}}]),FullStory}();src_FullStory.displayName="FullStory",src_FullStory.__docgenInfo={description:"",methods:[],displayName:"FullStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.js"]={name:"FullStory",docgenInfo:src_FullStory.__docgenInfo,path:"src/index.js"})},230:function(module,exports,__webpack_require__){__webpack_require__(231),__webpack_require__(334),module.exports=__webpack_require__(335)},335:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(25),__webpack_require__(19),__webpack_require__(17),__webpack_require__(26),__webpack_require__(27);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(73);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{panelPosition:"right"}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){var req=__webpack_require__(491);req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(173)(module))},491:function(module,exports,__webpack_require__){var map={"./index.stories.js":492};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=491},492:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(99),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(145),stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("React Fullstory",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),stories.add("default",function(){var org=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Org ID","XXXXX"),userId=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Sample user id (FS.identify)","abc123");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__.b,{org:org}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:function onClick(){return function(userId,data){Object(___WEBPACK_IMPORTED_MODULE_3__.a)("identify",userId,data)}(userId,{havingFun:!0})}},"Identify user ",userId))})}.call(this,__webpack_require__(173)(module))}},[[230,1,2]]]);
//# sourceMappingURL=main.d2eb726f6ddf2e4f4d38.bundle.js.map