var strnew="";var w="";var pa=false;var _oldInputFieldValue="";var da=false;var _currentInputFieldValue="";var G="";var _eventKeycode="";var _highlightedSuggestionIndex=-1;var _highlightedSuggestionDiv=null;var _completeDivRows=-1;var _completeDivDivList=null;var _completeDivRows2=5;var q="";var _divTag="div";var _spanTag="span";var _documentForm=null;var _inputField=null;var _completeDiv=null;var _submitButton=null;var mb=null;var X=null;var _enString=null;var _cursorUpDownPressed=false;var kc=null;var hc=null;var _resultCache=new Object();var ca=1;var Aa=1;var Y=false;var _lastKeyCode=-1;var Va=(new Date()).getTime();var _hasXMLHTTP=false;var _xmlHttp=null;var _completeSearchString=null;var B=null;var aa=null;var Ba=false;var Ka=false;var p=80;var _searchString=null;var ya=true;var _timeoutAdjustment=0;InstallAC=function(c,b,i,a,e,d,g,f){_documentForm=c;_inputField=b;_submitButton=i;if(!a){a=""}_searchString=a;X=false;Y=true;Ba=true;if(!g){g="query"}w=g;mb=f;installACPartTwo()};function blurThenGetFocus(){_cursorUpDownPressed=true;_inputField.blur();setTimeout("setInputFieldFocus();",10);return}function setupKeydown1(){if(document.createEventObject){var a=document.createEventObject();a.ctrlKey=true;a.keyCode=70;document.fireEvent("onkeydown",a)}}function setupKeydown2(a){var b=document.createEventObject();b.ctrlKey=true;b.keyCode=a;document.fireEvent("onkeydown",b)}function gc(a){}function ic(a){}function keyDownHandler(a){if(!a&&window.event){a=window.event}if(a){_lastKeyCode=a.keyCode}if(a&&a.keyCode==8){if(X&&(_inputField.createTextRange&&(a.srcElement==0&&(bb(_inputField)==0&&lb(_inputField)==0)))){cc(_inputField);a.cancelBubble=true;a.returnValue=false;return false}}}function mc(){}function resizeHandler(){if(w=="url"){setInputFieldSize()}setCompleteDivSize()}function setCompleteDivSize(){if(_completeDiv){_completeDiv.style.left=calculateOffsetLeft(_inputField)+"px";_completeDiv.style.top=calculateOffsetTop(_inputField)+_inputField.offsetHeight-1+"px";_completeDiv.style.width=calculateWidth()+"px"}}function calculateWidth(){if(navigator&&navigator.userAgent.toLowerCase().indexOf("msie")==-1){return _inputField.offsetWidth-ca*2}else{return _inputField.offsetWidth}}function installACPartTwo(){

if(getXMLHTTP()){
	_hasXMLHTTP=true
}else{
	_hasXMLHTTP=false
}if(pa){_completeSearchString="complete"}else{_completeSearchString="http://ac1.mp3skull.com/autocomplete/get.php"+_searchString}if(!_hasXMLHTTP){setCookie("q","",0,_completeSearchString,null,null)}_documentForm.onsubmit=Fa;_inputField.autocomplete="off";_inputField.onblur=onBlurHandler;if(_inputField.createTextRange){_inputField.onkeyup=new Function("return okuh(event);")}else{_inputField.onkeyup=okuh}_inputField.onsubmit=Fa;_currentInputFieldValue=_inputField.value;_oldInputFieldValue=_currentInputFieldValue;_completeDiv=document.createElement("DIV");_completeDiv.id="completeDiv";ca=1;Aa=1;_completeDiv.style.borderRight="#aaaaaa "+ca+"px solid";_completeDiv.style.borderLeft="#aaaaaa "+ca+"px solid";_completeDiv.style.textAlign="left";_completeDiv.style.borderTop="#aaaaaa "+Aa+"px solid";_completeDiv.style.borderBottom="#aaaaaa "+Aa+"px solid";_completeDiv.style.zIndex="1";_completeDiv.style.paddingRight="0";_completeDiv.style.paddingLeft="0";_completeDiv.style.paddingTop="0";_completeDiv.style.paddingBottom="0";setCompleteDivSize();_completeDiv.style.visibility="hidden";_completeDiv.style.position="absolute";_completeDiv.style.backgroundColor="white";document.body.appendChild(_completeDiv);cacheResults("",new Array(),new Array());Gb(_completeDiv);var a=document.createElement("DIV");a.style.visibility="hidden";a.style.position="absolute";a.style.left="-10000";a.style.top="-10000";a.style.width="0";a.style.height="0";var b=document.createElement("IFRAME");b.completeDiv=_completeDiv;b.name="completionFrame";b.id="completionFrame";b.src=""/*_completeSearchString*/;a.appendChild(b);document.body.appendChild(a);

/*
if(frames&&(frames.completionFrame&&frames.completionFrame.frameElement)){
	B=frames.completionFrame.frameElement
}else{
	B=document.getElementById("completionFrame")
}
*/
B=document.getElementById("completionFrame")
if(w=="url"){setInputFieldSize();setCompleteDivSize()}window.onresize=resizeHandler;document.onkeydown=keyDownHandler;setupKeydown1()}function onBlurHandler(a){if(!a&&window.event){a=window.event}if(!_cursorUpDownPressed){hideCompleteDiv();if(_lastKeyCode==9){setSubmitButtonFocus();_lastKeyCode=-1}}_cursorUpDownPressed=false}var okuh=function(a){_eventKeycode=a.keyCode;aa=_inputField.value;Oa()};function setSubmitButtonFocus(){_submitButton.focus()}var setInputFieldFocus=function(){_inputField.focus()};function stripCRFromString(c){for(var d=0,b="",a="\n\r";d<c.length;d++){if(a.indexOf(c.charAt(d))==-1){b+=c.charAt(d)}else{b+=" "}}return b}function findSpanValueForClass(b,a){var g=b.getElementsByTagName(_spanTag);if(g){for(var d=0;d<g.length;++d){if(g[d].className==a){var c=g[d].innerHTML;if(c=="&nbsp;"){return""}else{var e=stripCRFromString(c);return e}}}}else{return""}}function valueOfCAutoComplete(a){if(!a){return null}return findSpanValueForClass(a,"cAutoComplete")}function valueOfDAutoComplete(a){if(!a){return null}return findSpanValueForClass(a,"dAutoComplete")}function hideCompleteDiv(){document.getElementById("completeDiv").style.visibility="hidden"}function showCompleteDiv(){document.getElementById("completeDiv").style.visibility="visible";setCompleteDivSize()}function cacheResults(b,a,c){_resultCache[b]=new Array(a,c)}var sendRPCDone=function(c,f,d,g,i){for(i=0;i<d.length;i++){  	var strnew=d[i].replace(f,"<b>"+f+"</b>");d[i]=strnew;}if(_timeoutAdjustment>0){_timeoutAdjustment--}var e=(new Date()).getTime();if(!c){c=B}; cacheResults(f,d,g);var a=c.completeDiv;a.completeStrings=d;a.displayStrings=g;a.prefixStrings=i;displaySuggestedList(a,a.completeStrings,a.displayStrings);Pa(a,valueOfCAutoComplete);if(_completeDivRows2>0){a.height=16*_completeDivRows2+4}else{hideCompleteDiv()}};function Oa(){if(_eventKeycode==40||_eventKeycode==38){blurThenGetFocus()}var f=lb(_inputField);var b=bb(_inputField);var a=_inputField.value;if(X&&_eventKeycode!=0){if(f>0&&b!=-1){a=a.substring(0,b)}if(_eventKeycode==13||_eventKeycode==3){var e=_inputField;if(e.createTextRange){var c=e.createTextRange();c.moveStart("character",e.value.length);c.select()}else{if(e.setSelectionRange){e.setSelectionRange(e.value.length,e.value.length)}}}else{if(_inputField.value!=a){selectEntry(a.replace(/<\/?[^>]+>/g, ''))}}}_currentInputFieldValue=a;if(handleCursorUpDownEnter(_eventKeycode)&&_eventKeycode!=0){Pa(_completeDiv,valueOfCAutoComplete)}}function Fa(){return xb(w)}function xb(b){da=true;if(!_hasXMLHTTP){setCookie("q","",0,_completeSearchString,null,null)}hideCompleteDiv();if(b=="url"){var c="";if(_highlightedSuggestionIndex!=-1&&h){c=valueOfCAutoComplete(_highlightedSuggestionDiv)}if(c==""){c=_inputField.value}if(q==""){document.title=c}else{document.title=q}var a="window.frames['"+mb+"'].location = \""+c+'";';setTimeout(a,200);return false}else{/*nmmm*/if(b=="query"){_documentForm.submit();return true}}}var newwin=function(){window.open(_inputField.value);hideCompleteDiv();return false};var idkc=function(b){if(Ba){var a=_inputField.value;if(a!=aa){_eventKeycode=0;Oa()}aa=a;setTimeout("idkc()",200)}};setTimeout("idkc()",200);function escapeURI(a){if(encodeURIComponent){return encodeURIComponent(a)}if(escape){return escape(a)}}function recalculateTimeout(a){var b=100;for(var c=1;c<=(a-2)/2;c++){b=b*2}b=b+50;return b}var mainLoop=function(){if((_oldInputFieldValue!=_currentInputFieldValue)){if(!da){var a=escapeURI(_currentInputFieldValue);var b=_resultCache[_currentInputFieldValue];if(b){Va=-1;sendRPCDone(B,_currentInputFieldValue,b[0],b[1],B.completeDiv.prefixStrings)}else{_timeoutAdjustment++;Va=(new Date()).getTime();if(_hasXMLHTTP){callGoogle(a)}else{setCookie("q",a,null,_completeSearchString,null,null);frames.completionFrame.document.location.reload(true)}}_inputField.focus()}da=false}_oldInputFieldValue=_currentInputFieldValue;setTimeout("mainLoop()",recalculateTimeout(_timeoutAdjustment));return true};setTimeout("mainLoop()",200);var Cb=function(){selectEntry(valueOfCAutoComplete(this).replace(/<\/?[^>]+>/g, ''));q=valueOfDAutoComplete(this);da=true;Fa()};var pb=function(){if(_highlightedSuggestionDiv){setStyleForElement(_highlightedSuggestionDiv,"aAutoComplete")}setStyleForElement(this,"bAutoComplete")};var ec=function(){setStyleForElement(this,"aAutoComplete")};function highlightNewValue(a){_currentInputFieldValue=G;selectEntry(G.replace(/<\/?[^>]+>/g, ''));q=G;if(!_completeDivDivList||_completeDivRows<=0){return}showCompleteDiv();if(a>=_completeDivRows){a=_completeDivRows-1}if(_highlightedSuggestionIndex!=-1&&a!=_highlightedSuggestionIndex){setStyleForElement(_highlightedSuggestionDiv,"aAutoComplete");_highlightedSuggestionIndex=-1}if(a<0){_highlightedSuggestionIndex=-1;_inputField.focus();return}_highlightedSuggestionIndex=a;_highlightedSuggestionDiv=_completeDivDivList.item(a);setStyleForElement(_highlightedSuggestionDiv,"bAutoComplete");_currentInputFieldValue=G;q=valueOfDAutoComplete(_highlightedSuggestionDiv);selectEntry(valueOfCAutoComplete(_highlightedSuggestionDiv).replace(/<\/?[^>]+>/g, ''))}function handleCursorUpDownEnter(a){if(a==40){highlightNewValue(_highlightedSuggestionIndex+1);return false}else{if(a==38){highlightNewValue(_highlightedSuggestionIndex-1);return false}else{if(a==13||a==3){return false}}}return true}function Pa(j,e){var d=_inputField;var i=false;_highlightedSuggestionIndex=-1;var n=j.getElementsByTagName(_divTag);var k=n.length;_completeDivRows=k;_completeDivDivList=n;_completeDivRows2=k;G=_currentInputFieldValue;if(_currentInputFieldValue==""||k==0){hideCompleteDiv()}else{showCompleteDiv()}var b="";if(_currentInputFieldValue.length>0){var l;var c;for(var l=0;l<k;l++){for(c=0;c<j.prefixStrings.length;c++){var g=j.prefixStrings[c]+_currentInputFieldValue;if(Y||e(n.item(l)).toUpperCase().indexOf(g.toUpperCase())==0){b=j.prefixStrings[c];i=true;break}}if(i){break}}}if(i){_highlightedSuggestionIndex=l-1}for(var l=0;l<k;l++){setStyleForElement(n.item(l),"aAutoComplete")}if(i){_highlightedSuggestionDiv=n.item(_highlightedSuggestionIndex);q=valueOfDAutoComplete(_highlightedSuggestionDiv)}else{q=_currentInputFieldValue;_highlightedSuggestionIndex=-1;_highlightedSuggestionDiv=null}var r=false;switch(_eventKeycode){case 8:case 33:case 34:case 35:case 35:case 36:case 37:case 39:case 45:case 46:r=true;break;default:break}if(!r&&_highlightedSuggestionDiv){var a=_currentInputFieldValue;var m;if(i){m=e(_highlightedSuggestionDiv).substr(j.prefixStrings[c].length)}else{m=a}if(m!=d.value){if(d.value!=_currentInputFieldValue){return}}}else{_highlightedSuggestionIndex=-1;q=_currentInputFieldValue}}function calculateOffsetLeft(a){return Ya(a,"offsetLeft")}function calculateOffsetTop(a){return Ya(a,"offsetTop")}function Ya(c,a){var b=0;while(c){b+=c[a];c=c.offsetParent}return b}function setCookie(d,f,a,g,e,b){var c=d+"="+f+(a?";expires="+a.toGMTString():"")+(g?";path="+g:"")+(e?";domain="+e:"")+(b?";secure":"");document.cookie=c}function setInputFieldSize(){var a=document.body.scrollWidth-220;a=0.73*a;_inputField.size=Math.floor(a/6.18)}function lb(c){var b=-1;if(c.createTextRange){var a=document.selection.createRange().duplicate();b=a.text.length}else{if(c.setSelectionRange){b=c.selectionEnd-c.selectionStart}}return b}function bb(c){var a=0;if(c.createTextRange){var b=document.selection.createRange().duplicate();b.moveEnd("textedit",1);a=c.value.length-b.text.length}else{if(c.setSelectionRange){a=c.selectionStart}else{a=-1}}return a}function cc(b){if(b.createTextRange){var a=b.createTextRange();a.moveStart("character",b.value.length);a.select()}else{if(b.setSelectionRange){b.setSelectionRange(b.value.length,b.value.length)}}}function jc(b,c){if(!c){c=1}if(pa&&pa<=c){var a=document.createElement("DIV");a.innerHTML=b;document.getElementById("console").appendChild(a)}}function setStyleForElement(b,a){db();b.className=a;if(Ka){return}switch(a.charAt(0)){case"m":b.style.fontSize="14px";b.style.fontFamily="arial,sans-serif";b.style.wordWrap="break-word";break;case"l":b.style.display="block";b.style.paddingLeft="3";b.style.cursor="pointer";b.style.paddingRight="3";b.style.height="16px";b.style.overflow="hidden";break;case"a":b.style.backgroundColor="white";b.style.padding="1px";b.style.paddingLeft="3px";b.style.color="black";if(b.displaySpan){b.displaySpan.style.color="green"}break;case"b":b.style.backgroundColor="#dadada";b.style.padding="1px";b.style.paddingLeft="3px";b.style.color="black";if(b.displaySpan){b.displaySpan.style.color="black"}break;case"c":b.style.width=p+"%";b.style.cssFloat="left";break;case"d":b.style.cssFloat="right";b.style.width=100-p+"%";if(w=="query"){b.style.fontSize="10px";b.style.textAlign="right";b.style.color="green";b.style.paddingTop="5px"}else{b.style.color="#696969"}break}}function db(){p=65;if(w=="query"){var c=80;var b=calculateWidth();var a=(b-c)/b*100;p=a}else{p=65}if(ya){p=99.99}}function Gb(c){db();var d="font-size: 13px; font-family: arial,sans-serif; word-wrap:break-word; ";var f="display: block; padding-left: 3; padding-right: 3; height: 16px; overflow: hidden; ";var g="background-color: white; ";var e="background-color: #3366cc; color: white ! important; ";var b="display: block; margin-left: 0%; width: "+p+"%; float: left; ";var a="display: block; margin-left: "+p+"%; ";if(w=="query"){a+="font-size: 10px; text-align: right; color: green; padding-top: 3px; "}else{a+="color: #696969; "}D(".mAutoComplete",d);D(".lAutoComplete",f);D(".aAutoComplete *",g);D(".bAutoComplete *",e);D(".cAutoComplete",b);D(".dAutoComplete",a);setStyleForElement(c,"mAutoComplete")}function displaySuggestedList(d,e,a){while(d.childNodes.length>0){d.removeChild(d.childNodes[0])}for(var j=0;j<e.length;++j){var b=document.createElement("DIV");setStyleForElement(b,"aAutoComplete");b.onmousedown=Cb;b.onmouseover=pb;b.onmouseout=ec;var g=document.createElement("SPAN");setStyleForElement(g,"lAutoComplete");var c=document.createElement("SPAN");c.innerHTML=e[j];setStyleForElement(c,"cAutoComplete");g.appendChild(c);b.appendChild(g);d.appendChild(b)}}function D(b,c){if(Ka){var a=document.styleSheets[0];if(a.addRule){a.addRule(b,c)}else{if(a.insertRule){a.insertRule(b+" { "+c+" }",a.cssRules.length)}}}}

function getXMLHTTP(){
	var a=null;
	/*nmmm*/
	if (window.XDomainRequest){
		a = new XDomainRequest();
		if (a)
			return a
	}

	try{
		a=new ActiveXObject("Msxml2.XMLHTTP")
	}catch(c){
	try{
		a=new ActiveXObject("Microsoft.XMLHTTP")
	}catch(b){
		a=null
	}}

	if(!a&&typeof XMLHttpRequest!="undefined"){
		a=new XMLHttpRequest()
	}

	return a
}

function callGoogle(Rb){
	if(Rb.length >= 1) {
		if(_xmlHttp&&_xmlHttp.readyState!=0){
			_xmlHttp.abort()
		}
		_xmlHttp=getXMLHTTP();
	}
	/*nmmm*/
	if (window.XDomainRequest && _xmlHttp){
		if(Rb.length >= 1) {
			_xmlHttp.open("GET",_completeSearchString+"?q="+Rb,true);
			_xmlHttp.onload=function(){
				if(_xmlHttp.responseText){
					var frameElement=B;
					if(_xmlHttp.responseText.charAt(0)=="<"){
						_timeoutAdjustment--
					}else{
						eval(_xmlHttp.responseText)
					}
				}
			};
			_xmlHttp.send(null)
		}
	} else if(_xmlHttp){
		if(Rb.length >= 1) {
			_xmlHttp.open("GET",_completeSearchString+"?q="+Rb,true);
			_xmlHttp.onreadystatechange=function(){
				if(_xmlHttp.readyState==4&&_xmlHttp.responseText){
					var frameElement=B;
					if(_xmlHttp.responseText.charAt(0)=="<"){
						_timeoutAdjustment--
					}else{
						eval(_xmlHttp.responseText)
					}
				}
			};
			_xmlHttp.send(null)
		}
	}
}

function selectEntry(a){_inputField.value=a;aa=a}function moveCaretToEnd(c){if(c.createTextRange){var b=c.createTextRange();b.collapse(false);b.select()}else{if(c.selectionStart){var a=c.value.length;c.setSelectionRange(a,a);c.focus()}}};
