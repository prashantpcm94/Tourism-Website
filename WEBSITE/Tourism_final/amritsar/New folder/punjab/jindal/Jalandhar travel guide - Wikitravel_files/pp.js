if (!window.IBPrivacy) {
	if (!"f".trim) {
		String.prototype.trim = function() {
			return (this.replace(/^[ \r\n\t\f\s]+/, "").replace(/[ \r\n\t\f\s]+$/, ""))
		}
	}
	var thishost = self.location.hostname;
	var thiscookiedomain = thishost.substring(thishost.lastIndexOf(".",(thishost.length - 5)), thishost.length);
	
	window.IBPrivacy = {
		onloadCount : 0,
		maxViewCount : 2,
		growlerStyle : "position:fixed;bottom:0;right:0;width:290px;height:70px;z-index:2147483647",
		startDate : "Tue, 12 Jun 2012 16:00:00 GMT",
		endDate : "Thu, 12 Jul 2012 07:00:00 GMT",
		init : function(){
    	 	this.addLoadEvent(function(){window.IBPrivacy.doIt();});
		},
		getIsEnabled : function() {
			if(!this.startDate || this.startDate.length < 10)
				var privacyStartDate=new Date("Tue, 12 Jun 2012 16:00:00 GMT");
			else
				var privacyStartDate=new Date(this.startDate);
			if(!this.endDate || this.endDate.length < 10)
				var privacyEndDate=new Date("Thu, 12 Jul 2012 07:00:00 GMT");
			else
				var privacyEndDate=new Date(this.endDate);
			var curdate = new Date();
			if (privacyStartDate < curdate && privacyEndDate > curdate && !this.cookieValue('__noShowIBP')){return true;}
			return false;
		},
		doIt : function() {
			var divStyles = this.growlerStyle;
			var startDate = this.startDate;
			var endDate = this.endDate;
			if(this.getIsEnabled() && !this.cookieValue('__noShowIBP') && this.testViewCount() ) {
				var body = document.getElementsByTagName("body")[0];
				var myDiv = document.createElement("div");
				myDiv.setAttribute("class", "IBPrivacyDivClass");
    			myDiv.setAttribute("id", "IBPrivacyDivId");
				myDiv.setAttribute("style", divStyles);
				myDiv.style.cssText = divStyles;
				myIframe = document.createElement("iframe");
				myIframe.setAttribute("id", "IBPrivacyDivIframe");
				myIframe.setAttribute("scrolling", "no");
				myIframe.setAttribute("width", "100%");
				myIframe.setAttribute("height", "100%");
				myIframe.setAttribute("frameBorder", "0");
				myIframe.setAttribute("marginheight", "0");
				myIframe.setAttribute("marginwidth", "0");
				myIframe.setAttribute("onload", "window.IBPrivacy.confirmed();");
				myIframe.setAttribute("src", ("https:" == document.location.protocol ? "https://pxlssl" : "http://pxl") + ".ibpxl.com/privacy/");
				myIframe.setAttribute("allowTransparency", "true");
				myDiv.appendChild(myIframe);
    			body.appendChild(myDiv);
    			if(typeof(window.IByourCallback)=="function"){IByourCallback();}
			}
		},
		confirmed : function() {
			this.onloadCount++;
			if(this.onloadCount>1)
			{
				var body = document.getElementsByTagName("body")[0];
				var myDiv = document.getElementById("IBPrivacyDivId");
				this.setTastyCookie("__noShowIBP",1);
				setTimeout('document.getElementsByTagName("body")[0].removeChild(document.getElementById("IBPrivacyDivId"));',1000);
			}
		},
		cookieValue: function(n) {
			var ck = null;
			var cs = document.cookie.split("; ");
			for ( var pc = 0; !ck && (strpair = cs[pc]); pc++) {
				var pair = strpair.split("=");
				//alert(pair[0]+' = ' +pair[1])
				if (pair[0].trim() == n) {
					ck = pair[1]
				}
			}
			return ck;
		},
		setTastyCookie : function(n,v) {
			if(!this.cookieValue('__noShowIBP'))
			{
				var sessionDurationMinutes = 10080;//1 week
    			var forSession = new Date(new Date().getTime() + (1000*60*sessionDurationMinutes)).toUTCString();
    			document.cookie = n+"="+v+"; expires="+forSession+"; path=/; domain="+thiscookiedomain+";";
			}
		},
		addLoadEvent : function(f){if(window.attachEvent){window.attachEvent('onload', f);}else{window.addEventListener('load', f, false);}
		},
		testViewCount : function() {
			var viewCount = this.cookieValue('__IBPviews');
			if(!viewCount) { 
				this.setTastyCookie('__IBPviews',1,false);
			} else if(viewCount >= this.maxViewCount) {
				return false;
			} else {
				viewCount++;
				this.setTastyCookie('__IBPviews',viewCount,false);
			}
			return true;
		}
	}
};
if(typeof(window.IBloadCallback)=="function"){IBloadCallback();}
