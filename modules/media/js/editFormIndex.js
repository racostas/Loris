(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=15)})({15:function(module,exports,__webpack_require__){"use strict";var _editForm=__webpack_require__(16);var _editForm2=_interopRequireDefault(_editForm);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var args=QueryString.get(document.currentScript.src);$(function(){var mediaEditForm=React.createElement("div",{className:"page-edit-form"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-9 col-lg-7"},React.createElement(_editForm2.default,{DataURL:loris.BaseURL+"/media/ajax/FileUpload.php?action=getData&idMediaFile="+args.id,action:loris.BaseURL+"/media/ajax/FileUpload.php?action=edit"}))));ReactDOM.render(mediaEditForm,document.getElementById("lorisworkspace"))})},16:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var MediaEditForm=function(_React$Component){_inherits(MediaEditForm,_React$Component);function MediaEditForm(props){_classCallCheck(this,MediaEditForm);var _this=_possibleConstructorReturn(this,(MediaEditForm.__proto__||Object.getPrototypeOf(MediaEditForm)).call(this,props));_this.state={Data:{},formData:{},uploadResult:null,isLoaded:false,loadedData:0};_this.handleSubmit=_this.handleSubmit.bind(_this);_this.setFormData=_this.setFormData.bind(_this);_this.showAlertMessage=_this.showAlertMessage.bind(_this);return _this}_createClass(MediaEditForm,[{key:"componentDidMount",value:function componentDidMount(){var self=this;$.ajax(this.props.DataURL,{dataType:"json",success:function success(data){var formData={idMediaFile:data.mediaData.id,forSite:data.mediaData.forSite,dateTaken:data.mediaData.dateTaken,comments:data.mediaData.comments,hideFile:data.mediaData.hideFile};self.setState({Data:data,isLoaded:true,mediaData:data.mediaData,formData})},error:function error(_error,errorCode,errorMsg){console.error(_error,errorCode,errorMsg);self.setState({error:"An error occurred when loading the form!"})}})}},{key:"render",value:function render(){if(this.state.error!==undefined){return React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error))}if(!this.state.isLoaded){return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}))}var alertMessage="";var alertClass="alert text-center hide";var backURL=loris.BaseURL.concat("/media/");if(this.state.uploadResult){if(this.state.uploadResult==="success"){alertClass="alert alert-success text-center";alertMessage="Update Successful!"}else if(this.state.uploadResult==="error"){alertClass="alert alert-danger text-center";alertMessage="Failed to update the file"}}return React.createElement("div",null,React.createElement("div",{className:alertClass,role:"alert",ref:"alert-message"},alertMessage),this.state.uploadResult==="success"?React.createElement("a",{className:"btn btn-primary",href:backURL},"Back to media"):null,React.createElement(FormElement,{name:"mediaEdit",onSubmit:this.handleSubmit,ref:"form"},React.createElement("h3",null,"Edit Media File"),React.createElement("br",null),React.createElement(SelectElement,{name:"pscid",label:"PSCID",options:this.state.Data.candidates,onUserInput:this.setFormData,ref:"pscid",required:true,disabled:true,value:this.state.mediaData.pscid}),React.createElement(SelectElement,{name:"visitLabel",label:"Visit Label",options:this.state.Data.visits,onUserInput:this.setFormData,ref:"visitLabel",required:true,disabled:true,value:this.state.mediaData.visitLabel}),React.createElement(SelectElement,{name:"forSite",label:"Site",options:this.state.Data.sites,onUserInput:this.setFormData,ref:"forSite",disabled:true,value:this.state.mediaData.forSite}),React.createElement(SelectElement,{name:"instrument",label:"Instrument",options:this.state.Data.instruments,onUserInput:this.setFormData,ref:"instrument",disabled:true,value:this.state.mediaData.instrument}),React.createElement(DateElement,{name:"dateTaken",label:"Date of Administration",minYear:"2000",maxYear:"2017",onUserInput:this.setFormData,ref:"dateTaken",value:this.state.formData.dateTaken}),React.createElement(TextareaElement,{name:"comments",label:"Comments",onUserInput:this.setFormData,ref:"comments",value:this.state.formData.comments}),React.createElement(FileElement,{name:"file",id:"mediaEditEl",onUserInput:this.setFormData,required:true,disabled:true,ref:"file",label:"Uploaded file",value:this.state.mediaData.fileName}),React.createElement(SelectElement,{name:"hideFile",label:"Hide File",emptyOption:false,options:["No","Yes"],onUserInput:this.setFormData,ref:"hideFile",value:this.state.formData.hideFile}),React.createElement(ButtonElement,{label:"Update File"})))}},{key:"handleSubmit",value:function handleSubmit(e){e.preventDefault();var self=this;var myFormData=this.state.formData;$("#mediaEditEl").hide();$("#file-progress").removeClass("hide");$.ajax({type:"POST",url:self.props.action,data:JSON.stringify(myFormData),cache:false,contentType:false,processData:false,xhr:function xhr(){var xhr=new window.XMLHttpRequest;xhr.upload.addEventListener("progress",function(evt){if(evt.lengthComputable){var progressbar=$("#progressbar");var progresslabel=$("#progresslabel");var percent=Math.round(evt.loaded/evt.total*100);$(progressbar).width(percent+"%");$(progresslabel).html(percent+"%");progressbar.attr("aria-valuenow",percent)}},false);return xhr},success:function success(data){$("#file-progress").addClass("hide");self.setState({uploadResult:"success"});self.showAlertMessage()},error:function error(err){console.error(err);self.setState({uploadResult:"error"});self.showAlertMessage()}})}},{key:"setFormData",value:function setFormData(formElement,value){var formData=this.state.formData;if(value===""){formData[formElement]=null}else{formData[formElement]=value}this.setState({formData})}},{key:"showAlertMessage",value:function showAlertMessage(){var self=this;if(this.refs["alert-message"]===null){return}var alertMsg=this.refs["alert-message"];$(alertMsg).fadeTo(2e3,500).delay(3e3).slideUp(500,function(){self.setState({uploadResult:null})})}}]);return MediaEditForm}(React.Component);MediaEditForm.propTypes={DataURL:React.PropTypes.string.isRequired,action:React.PropTypes.string.isRequired};var RMediaEditForm=React.createFactory(MediaEditForm);window.MediaEditForm=MediaEditForm;window.RMediaEditForm=RMediaEditForm;exports.default=MediaEditForm}});
//# sourceMappingURL=editFormIndex.js.map