(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=17)})({17:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});function formatColumn(column,cell,rowData,rowHeaders){if(loris.hiddenHeaders.indexOf(column)>-1){return null}var row={};rowHeaders.forEach(function(header,index){row[header]=rowData[index]},this);if(column==="Title"){var cellLinks=[];cellLinks.push(React.createElement("a",{href:loris.BaseURL+"/issue_tracker/issue/?issueID="+row["Issue ID"]},row.Title));return React.createElement("td",null,cellLinks)}if(column==="Issue ID"){var _cellLinks=[];_cellLinks.push(React.createElement("a",{href:loris.BaseURL+"/issue_tracker/issue/?issueID="+row["Issue ID"]},cell));return React.createElement("td",null,_cellLinks)}if(column==="Priority"){switch(cell){case"normal":return React.createElement("td",{style:{background:"#CCFFCC"}},"Normal");case"high":return React.createElement("td",{style:{background:"#EEEEAA"}},"High");case"urgent":return React.createElement("td",{style:{background:"#CC6600"}},"Urgent");case"immediate":return React.createElement("td",{style:{background:"#E4A09E"}},"Immediate");case"low":return React.createElement("td",{style:{background:"#99CCFF"}},"Low");default:return React.createElement("td",null,"None")}}if(column==="PSCID"&&row.PSCID!==null){var _cellLinks2=[];_cellLinks2.push(React.createElement("a",{href:loris.BaseURL+"/"+row.CandID+"/"},cell));return React.createElement("td",null,_cellLinks2)}if(column==="Visit Label"&&row["Visit Label"]!==null){var _cellLinks3=[];_cellLinks3.push(React.createElement("a",{href:loris.BaseURL+"/instrument_list/?candID="+row.CandID+"&sessionID="+row.SessionID},cell));return React.createElement("td",null,_cellLinks3)}return React.createElement("td",null,cell)}window.formatColumn=formatColumn;exports.default=formatColumn}});
//# sourceMappingURL=columnFormatter.js.map