//
// LinkMyPics - The Hotlink Advantage Maximizer
// Copyright �2008 Michael VandeMar
// All Rights Reserved
// http://www.funscripts.net/javascript-widgets/
// 
// Freeware
//

var interupt=true;
function findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}	return [curleft,curtop];
}

function applyEvent(theObj, theEvent, theFunction){
	if(window.addEventListener){ // Mozilla, Netscape, Firefox
		theObj.addEventListener(theEvent, theFunction, false);
	}else{ // IE
		theObj.attachEvent('on' + theEvent, theFunction);
	}
}

function closeIt(){
	try{
		var curr = document.getElementById("curropenhl2l");
	}catch(e){
	}
	if(curr){
		curr.parentNode.removeChild(curr);
	}
	interupt = true;
}

function useHTML(tcode){
	var ta = document.getElementById("hl2lta");
	ta.value = tcode;
	var r1 = document.getElementById("hl2lr1");
	r1.style.backgroundColor = "#ffffff";
	var r2 = document.getElementById("hl2lr2");
	r2.style.backgroundColor = "#aaaaba";
	ta.select();
	return true;
}

function useBBCODE(tcode){
	var ta = document.getElementById("hl2lta");
	ta.value = tcode;
	var r2 = document.getElementById("hl2lr2");
	r2.style.backgroundColor = "#ffffff";
	var r1 = document.getElementById("hl2lr1");
	r1.style.backgroundColor = "#aaaaba";
	ta.select();
	return true;
}

function hl2l(e){
	var rightclick;
	if (!e) var e = window.event;
	if (e.which) rightclick = (e.which == 3);
	else if (e.button) rightclick = (e.button == 2);
	if(!rightclick) return true;

	closeIt();

	var tw = 360;
	var th = 183;

	var thisele;
	if(!(typeof event == "undefined")){ 	// Internet Explorer
		thisele = event.srcElement;
		th = th - 10;
	}else if(this){ // Netscape and Firefox
		//thisele = this;
		thisele = e.currentTarget;
	}

	var tpage = document.location.href;
	var tsrc = thisele.getAttribute("src");
	if(tsrc.substr(0,4).toLowerCase()!="http"){
		var base;
		if(tpage.substr(tpage.length - 1,1)=="/"){
			base = tpage;
		}else if(tpage.indexOf("/",9)==-1){
			base = tpage + "/";
		}else{
			base = tpage.substr(0,tpage.lastIndexOf("/")+1);
		}
		var root = base.substr(0,base.indexOf("/",9));
		if(tsrc.substr(0,1)!="/"){
			tsrc = base + tsrc;
		}else{
			tsrc = root + tsrc;
		}
	}
	var talt = thisele.getAttribute("alt");
	if(talt){
		talt = talt.replace("'", "");
	}else{
		talt = "";
	}

	thtml = "<a href='"+tpage+"'><img src='"+tsrc+"' alt='"+talt+"'></a>";
	tbbcode = "[url="+tpage+"][img]"+tsrc+"[/img][/url]";

	var nd = document.createElement("div");
	nd.style.width = "470px";
	//nd.style.height = th+"px";
	nd.style.border = "1px solid #000000";
	nd.style.position = "absolute";
	nd.style.padding = "10px";	
	texy = findPos(thisele);
	nd.style.left = ((texy[0] + (thisele.offsetWidth/2)) - (tw/2))+"px";
	nd.style.top = ((texy[1] + (thisele.offsetHeight/2)) - (th/2))+"px";
	//nd.style.backgroundColor = "#d0d0e0";
	nd.style.background = "#FFFFFF";
	nd.setAttribute("id", "curropenhl2l");

	//instructions and "close" button
	var ndic = document.createElement("div");
	var ndc = document.createElement("div");
	ndc.style.cssFloat = "right";
	ndc.style.styleFloat = "right";
	//ndc.style.border = "1px solid #444444";
	//ndc.style.backgroundColor = "#aaaaba";
	//ndc.style.width = 35+"px";
	ndc.style.cursor = "pointer";
	ndc.innerHTML = "<img src='http://cdn4.iconfinder.com/data/icons/fugue/icon/cross-button.png'>";
	ndic.appendChild(ndc);
	applyEvent(ndc, "click", closeIt);
	var ndi = document.createElement("div");
	ndi.style.width = "470px";
	ndi.style.padding = "3px";
	ndi.innerHTML = "If you wish to use this wallpaper elsewhere, please select either HTML (for webpages) or BBCODE (for forums) and use the code provided:";
	ndic.appendChild(ndi);

	nd.appendChild(ndic);

	var r1 = document.createElement("span");
	r1.style.width = 35+"px";
	r1.style.border = "1px solid black";
	r1.style.padding = "1px";
	r1.style.backgroundColor = "#ffffff";
	r1.style.cursor = "pointer";
	r1.style.marginLeft = "3px";
	r1.innerHTML = "HTML";
	r1.setAttribute("id", "hl2lr1");
	applyEvent(r1, "click", function(){useHTML(thtml)});

	var s1 = document.createElement("span");
	s1.innerHTML = "&nbsp;";
	s1.style.width = 10+"px";

	var b1 = document.createElement("br");
	var b2 = document.createElement("br");
	var r2 = document.createElement("span");
	r2.style.width = 35+"px";
	r2.style.border = "1px solid black";
	r2.style.padding = "1px";
	r2.style.backgroundColor = "#aaaaba";
	r2.style.cursor = "pointer";
	r2.innerHTML = "BBCODE";
	r2.setAttribute("id", "hl2lr2");
	applyEvent(r2, "click", function(){useBBCODE(tbbcode)});

	//nd.appendChild(b1);
	nd.appendChild(r1);
	nd.appendChild(s1);
	nd.appendChild(r2);
	nd.appendChild(b2);

	var ta = document.createElement("textarea");
	ta.setAttribute("cols", "55");
	ta.setAttribute("rows", "2");
	ta.setAttribute("wrap", "soft");
	ta.setAttribute("id", "hl2lta");
	ta.style.margin = "2px";
	applyEvent(ta, "mousemove", function(){document.getElementById("hl2lta").select()});

	nd.appendChild(ta);

	document.body.appendChild(nd);

	r1.checked = true;
	useHTML(thtml);

	thisele.oncontextmenu = function(){if(interupt){interupt = false;return false;};};
	nd.oncontextmenu = function(){if(interupt){interupt = false;return false;};};
}
