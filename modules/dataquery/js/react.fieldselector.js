(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=37)})({37:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});
/**
 *  The following file contains the components used for the field select tab
 *
 *  @author   Jordan Stirling <jstirling91@gmail.com>
 *  @author   Dave MacFarlane <david.macfarlane2@mcgill.ca>
 *  @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 *  @link     https://github.com/mohadesz/Loris-Trunk
 */var CategoryItem=React.createClass({displayName:"CategoryItem",render:function render(){var classList="list-group-item",badge="";if(this.props.selected){classList+=" active"}if(this.props.count>=0){badge=React.createElement("span",{className:"badge"},this.props.count)}return React.createElement("a",{href:"#",className:classList,onClick:this.props.onClick},this.props.name,badge)}});var CategoryList=React.createClass({displayName:"CategoryList",getInitialState:function getInitialState(){return{selectedCategory:""}},selectCategoryHandler:function selectCategoryHandler(category){var that=this;return function(evt){if(that.props.onCategorySelect){that.props.onCategorySelect(category)}that.setState({selectedCategory:category})}},render:function render(){var items=[],selectClosure=function selectClosure(name){return this.selectCategory(name)};for(i=0;i<this.props.items.length;i+=1){selected=false;if(this.props.items[i].category==this.state.selectedCategory){selected=true}items.push(React.createElement(CategoryItem,{key:this.props.items[i].category,name:this.props.items[i].category,count:this.props.items[i].numFields,selected,onClick:this.selectCategoryHandler(this.props.items[i].category)}))}return React.createElement("div",{className:"list-group col-md-3 col-sm-12"},items)}});var FieldItem=React.createClass({displayName:"FieldItem",visitSelect:function visitSelect(evt){var field={instrument:this.props.Category,field:this.props.FieldName};if(evt.target.checked){this.props.fieldVisitSelect("check",evt.target.value,field)}else{this.props.fieldVisitSelect("uncheck",evt.target.value,field)}},render:function render(){var classList="list-group-item row",downloadIcon="",criteria,multiselect,that=this;if(this.props.selected){classList+=" active";multiselect=Object.keys(this.props.Visits).map(function(visit){var checked=false;if(that.props.selectedVisits[visit]){checked=true}return React.createElement("div",{class:"checkbox"},React.createElement("label",null,React.createElement("input",{type:"checkbox",value:visit,checked,onChange:that.visitSelect})," ",visit))})}if(this.props.downloadable){downloadIcon=React.createElement("span",{className:"glyphicon glyphicon-download-alt pull-right",title:"Downloadable File"})}var displayName=this.props.FieldName;return React.createElement("div",{className:classList},React.createElement("div",{className:"col-xs-8",onClick:this.props.onClick},React.createElement("h4",{className:"list-group-item-heading col-xs-12"},displayName,criteria,downloadIcon),React.createElement("span",{className:"col-xs-12"},this.props.Description)),React.createElement("div",{className:"col-xs-4"},multiselect))}});var FieldList=React.createClass({displayName:"FieldList",onFieldClick:function onFieldClick(fieldName,downloadable){this.props.onFieldSelect(fieldName,this.props.category,downloadable)},render:function render(){var fields=[];var items=this.props.items||[];var fieldName,desc,isFile,type,selected;var rowsPerPage=this.props.FieldsPerPage||20;var start=(this.props.PageNumber-1)*rowsPerPage;var filter=this.props.Filter.toLowerCase();var selectedFields;if(filter>0){start=0}for(var i=start;i<items.length;i+=1){fieldName=items[i].key[1];desc=items[i].value.Description;type=items[i].value.Type||"varchar(255)";if(fieldName.toLowerCase().indexOf(filter)==-1&&desc.toLowerCase().indexOf(filter)==-1){continue}isFile=false;if(items[i].value.IsFile){isFile=true}selected=false;if(this.props.selected&&this.props.selected[fieldName]){selected=true}if(this.props.selected&&this.props.selected[fieldName]){selectedFields=this.props.selected[fieldName]}else{selectedFields={}}fields.push(React.createElement(FieldItem,{FieldName:fieldName,Category:this.props.category,Description:desc,ValueType:type,onClick:this.onFieldClick.bind(this,fieldName,isFile),selected,downloadable:isFile,Visits:this.props.Visits,selectedVisits:selectedFields,fieldVisitSelect:this.props.fieldVisitSelect}));if(fields.length>rowsPerPage){break}}return React.createElement("div",{className:"list-group col-md-9 col-sm-12"},fields,React.createElement(PaginationLinks,{Total:items.length,Active:this.props.PageNumber,onChangePage:this.props.changePage,RowsPerPage:rowsPerPage}))}});var FieldSelector=React.createClass({displayName:"FieldSelector",propTypes:{selectedFields:React.PropTypes.array},getInitialState:function getInitialState(){var instruments={};for(var i=0;i<this.props.items.length;i++){instruments[this.props.items[i].category]=this.props.items[i].category}return{filter:"",selectedCategory:"",categoryFields:{},instruments,PageNumber:1}},onFieldSelect:function onFieldSelect(fieldName,category,downloadable){this.props.onFieldChange(fieldName,category,downloadable)},onCategorySelect:function onCategorySelect(category){var that=this;if(this.state.categoryFields[category]){}else{$.get(loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script=datadictionary.php",{category},function(data){var cf=that.state.categoryFields;cf[category]=data;that.setState({categoryFields:cf})},"json")}this.setState({selectedCategory:category,PageNumber:1})},filterChange:function filterChange(evt){this.setState({filter:evt.currentTarget.value})},addAll:function addAll(){var i,isFile,fieldName,category;for(i in this.state.categoryFields[this.state.selectedCategory]){fieldName=this.state.categoryFields[this.state.selectedCategory][i].key[1];category=this.state.categoryFields[this.state.selectedCategory][i].key[0];if(this.props.selectedFields[category]&&this.props.selectedFields[category][fieldName]){}else{isFile=this.state.categoryFields[category][i].value.isFile?true:false;this.props.onFieldChange(fieldName,category,isFile)}}},deleteAll:function deleteAll(){var i,index,fieldName;for(i in this.state.categoryFields[this.state.selectedCategory]){fieldName=this.state.categoryFields[this.state.selectedCategory][i].key[1];category=this.state.categoryFields[this.state.selectedCategory][i].key[0];if(this.props.selectedFields[category]&&this.props.selectedFields[category][fieldName]){isFile=this.state.categoryFields[category][i].value.isFile?true:false;this.props.onFieldChange(fieldName,category,isFile)}}},modifyCategoryFieldVists:function modifyCategoryFieldVists(visit,action){if(this.state.selectedCategory&&this.props.selectedFields[this.state.selectedCategory]){for(var field in this.props.selectedFields[this.state.selectedCategory]){if(field=="allVisits"){continue}if(action=="check"&&!this.props.selectedFields[this.state.selectedCategory][field][visit]){this.props.fieldVisitSelect(action,visit,{instrument:this.state.selectedCategory,field})}else if(action=="uncheck"&&this.props.selectedFields[this.state.selectedCategory][field][visit]){this.props.fieldVisitSelect(action,visit,{instrument:this.state.selectedCategory,field})}}}},changePage:function changePage(i){this.setState({PageNumber:i})},render:function render(){var categoryVisits={},selectedFieldsCount;if(this.state.selectedCategory!=""){if(this.props.selectedFields[this.state.selectedCategory]){selectedFieldsCount=Object.keys(this.props.selectedFields[this.state.selectedCategory]).length-1}for(var key in this.props.Visits){if(this.props.selectedFields[this.state.selectedCategory]&&this.props.selectedFields[this.state.selectedCategory].allVisits[key]&&this.props.selectedFields[this.state.selectedCategory].allVisits[key]==selectedFieldsCount){categoryVisits[key]=true}else{categoryVisits[key]=false}}}return React.createElement("div",null,React.createElement("div",{className:"row"},React.createElement("h1",{className:"col-md-8"},this.props.title),React.createElement("div",{className:"form-group col-sm-4 search"},React.createElement("label",{className:"col-sm-12 col-md-4"},"Search within instrument:"),React.createElement("div",{className:"col-sm-12 col-md-8"},React.createElement("input",{type:"text",onChange:this.filterChange,className:"form-control input-sm"})))),React.createElement("div",{className:"row form-group"},React.createElement("div",{className:"col-md-8"},React.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addAll},"Add All"),React.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.deleteAll},"Remove All"))),React.createElement("div",{className:"row form-group"},React.createElement("div",{className:"form-group col-sm-8 search"},React.createElement("label",{className:"col-sm-12 col-md-2"},"Instrument:"),React.createElement("div",{className:"col-sm-12 col-md-8"},React.createElement(SelectDropdown,{multi:false,options:this.state.instruments,onFieldClick:this.onCategorySelect,selectedCategory:this.state.selectedCategory}))),React.createElement("div",{className:"form-group col-sm-4 search"},React.createElement("label",{className:"col-sm-12 col-md-4"},"Visits:"),React.createElement("div",{className:"col-sm-12 col-md-8"},React.createElement(SelectDropdown,{multi:true,options:categoryVisits,onFieldClick:this.modifyCategoryFieldVists})))),React.createElement("div",{className:"row"},React.createElement(FieldList,{items:this.state.categoryFields[this.state.selectedCategory],category:this.state.selectedCategory,Criteria:this.props.Criteria,onFieldSelect:this.onFieldSelect,FieldsPerPage:"15",selected:this.props.selectedFields[this.state.selectedCategory],Filter:this.state.filter,Visits:this.props.Visits,fieldVisitSelect:this.props.fieldVisitSelect,changePage:this.changePage,PageNumber:this.state.PageNumber})))}});window.CategoryItem=CategoryItem;window.CategoryList=CategoryList;window.FieldItem=FieldItem;window.FieldList=FieldList;window.FieldSelector=FieldSelector;exports.default={CategoryItem,CategoryList,FieldItem,FieldList,FieldSelector}}});
//# sourceMappingURL=react.fieldselector.js.map