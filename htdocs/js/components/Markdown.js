(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=11)})({11:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Markdown=function(_React$Component){_inherits(Markdown,_React$Component);function Markdown(){_classCallCheck(this,Markdown);return _possibleConstructorReturn(this,(Markdown.__proto__||Object.getPrototypeOf(Markdown)).apply(this,arguments))}_createClass(Markdown,[{key:"htmlSpecialCharsDecode",value:function htmlSpecialCharsDecode(text){return text.replace(/&amp;/g,"&").replace(/&quot;/g,'"')}},{key:"render",value:function render(){var fixedNewLines=this.props.content.replace(/\r\n/g,"\n");fixedNewLines=this.htmlSpecialCharsDecode(fixedNewLines);var paragraphs=fixedNewLines.split("\n\n");var headersRe=/^(#+)\s+(.+)$/;var boldRe1=/(\*\*)(.+?)(\*\*)/g;var boldRe2=/(__)(.+?)(__)/g;function boldCallback(match,start,content,end,offset,val){return"<b>"+content+"</b>"}var italRe1=/(\*)(.+?)(\*)/g;var italRe2=/(_)(.+?)(_)/g;function italCallback(match,start,content,end,offset,val){return"<i>"+content+"</i>"}var linkRe=/\[(.+?)\]\((.+?)\)/g;function linkCallback(match,text,link,offset,val){return'<a href="'+link+'">'+text+"</a>"}var hlevel=1;function headerCallback(match,headerLevel,headerContent,offset,val){hlevel=headerLevel.length;return headerContent}for(var i=0;i<paragraphs.length;i++){if(paragraphs[i][0]==="#"){hlevel=1;paragraphs[i]=paragraphs[i].replace(headersRe,headerCallback);switch(hlevel){case 6:paragraphs[i]=React.createElement("h6",null,paragraphs[i]);break;case 5:paragraphs[i]=React.createElement("h5",null,paragraphs[i]);break;case 4:paragraphs[i]=React.createElement("h4",null,paragraphs[i]);break;case 3:paragraphs[i]=React.createElement("h3",null,paragraphs[i]);break;case 2:paragraphs[i]=React.createElement("h2",null,paragraphs[i]);break;case 1:default:paragraphs[i]=React.createElement("h1",null,paragraphs[i])}}else{var paramd=paragraphs[i];paramd=paramd.replace(boldRe1,boldCallback);paramd=paramd.replace(boldRe2,boldCallback);paramd=paramd.replace(italRe1,italCallback);paramd=paramd.replace(italRe2,italCallback);paramd=paramd.replace(linkRe,linkCallback);paragraphs[i]=React.createElement("p",{dangerouslySetInnerHTML:{__html:paramd}})}}return React.createElement("div",null,paragraphs)}}]);return Markdown}(React.Component);Markdown.propTypes={content:React.PropTypes.string.isRequired};var RMarkdown=React.createFactory(Markdown);window.Markdown=Markdown;window.RMarkdown=RMarkdown;exports.default=Markdown}});
//# sourceMappingURL=Markdown.js.map