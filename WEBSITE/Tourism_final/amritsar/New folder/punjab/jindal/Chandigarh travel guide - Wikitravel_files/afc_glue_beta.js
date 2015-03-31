/*
	http://static.internetbrands.com/partners/afc
	
*/

window.HREF_CALLBACK = "";

if (typeof(AFC_RENDER_CLEAN) == 'undefined') { AFC_RENDER_CLEAN = false; } // invoke style-less render if true,
if (typeof(window.AFC_RENDER_CLEAN_TARGET_ELEMENT) == 'undefined') { window.AFC_RENDER_CLEAN_TARGET_ELEMENT = false; } // invoke style-less render if true,

if (window.AFC_RENDER_CLEAN) {
	if (typeof(AFC_RENDER_MAX)       == 'undefined') { window.AFC_RENDER_MAX = 3; } // ...and render this many ads
 	if (typeof(AFC_RENDER_DIRECTION) == 'undefined') { window.AFC_RENDER_DIRECTION = 'square'; } // with direction
}

function ib_click(anchorEl) {
		var clickImg = new Image(1,1);
		clickImg.src = (window.OPTIMIZED_HINTS.feedbackBase + "&id=" + anchorEl.rel);
	return true;
}//ib_click

function getibclick(cadref) {
	if (cadref && cadref.DO_CLICK_TRACKING) {
		return 'onclick="return ib_click(this)"';
	} else {
		return "";
	}
}

AFC_GLUE_STYLESHEET = "http://static.internetbrands.com/partners/afc/afc_glue.css";
ADS_DISPLAY_URL = "http://static.internetbrands.com/partners/afc/ads.html";

function getGlueCss() {
	gcssel = document.createElement("link");
	gcssel.setAttribute("rel","stylesheet");
	gcssel.setAttribute("href",AFC_GLUE_STYLESHEET);
	gcssel.setAttribute("media","screen");
	gcssel.setAttribute("type","text/css");
	gcssel.setAttribute("charset","utf-8");
	return gcssel;
}//getGlueCss

function hasGlueCssFrom(contextNode) {
	linkEls = contextNode.getElementsByTagName("link");
	foundLinkEl=false;
	for(lec=0;(linkel=linkEls[lec]) && (!foundLinkEl);lec++) {
		if	(
				linkel.href
				&&
				(linkel.href.indexOf(AFC_GLUE_STYLESHEET) != -1)
			) {
			foundLinkEl = true;
		}
	}//loop thru link elements
	return foundLinkEl;
}//hasGlueCssFrom


	headElement = document.getElementsByTagName("head");
	if (headElement = headElement[0]) {
	  hasCss = hasGlueCssFrom(headElement);
	  if (!hasCss) {
		newLinkElement = getGlueCss();
		headElement.appendChild(newLinkElement);
	  }
	} else {
	  htmlRoot = document.getElementsByTagName("html");
	  if (htmlRoot = htmlRoot[0]) {
		hasCss = hasGlueCssFrom(document);
		if (!hasCss) {
		  newLinkElement = getGlueCss();
		  newHead = document.createElement("head");
		  newHead.appendChild(newLinkElement);
		  htmlRoot.insertBefore(newHead,htmlRoot.firstChild);
		}
	  }
	}
	

	
	function getCustomPropertyObject(pStr,propName) {
		propObj = {};
		pairs = pStr.split(",");
		for (pc=0;pair=pairs[pc];pc++) {
			keyvalue = pair.split(":");
			propObj[keyvalue[0]] = propName + ":"+keyvalue[1]+";";
		}
		return propObj;
	}//getCustomPropertyObject
	
	function findElementPosY(obj) {
		curtop = 0;
		if (obj.offsetParent) {
			while (obj.offsetParent) {
				curtop += obj.offsetTop;
				obj = obj.offsetParent;
			}
		}//if offsetParent exists
		else if (obj.y)
			curtop += obj.y
		return curtop;
	}//findElementPosY
	

	function getAttributionLink() {
		var fu = window.google_info?google_info.feedback_url:"https://www.google.com/adsense/support/bin/request.py?contact=abg_afc&gl=US&hideleadgen=1";
		return '<a target="_blank" href="'+fu+'" class="attributionLink" style="color:inherit;font-weight:inherit;font-size:inherit;line-height:inherit;text-decoration:inherit">Ads by Google</a>';
	}//getAttributionLink

	function getRADLinksHTML(radlinks) {
	s = '<div class="googleRadLinks'+ACTIVE_AD.unit.verticalRadLinksClassValue+
			((ACTIVE_AD.shouldRenderClean)
				? '">'
				: '" style="color:#'+ACTIVE_AD.ad_text+';width:'+ACTIVE_AD.unit.googleAdBlockPixelWidth+'px;height:'+ACTIVE_AD.unit.googleAdBlockPixelHeight+'px;border:1px solid #'+ACTIVE_AD.ad_border+';background-color:#'+ACTIVE_AD.ad_bg+';">');
		s += '<div class="radLinksAdsByGoogle">'+getAttributionLink()+'</div>';
		s += '<div class="radList">'
			for(var i=0; i < radlinks.length; ++i) {
				s += ((ACTIVE_AD.shouldRenderClean)
					? '<a '+window.HREF_CALLBACK+' target="_blank" href="'+ADS_DISPLAY_URL+'?google_kw='
					: '<a '+window.HREF_CALLBACK+' style="color:#'+ACTIVE_AD.ad_title+';'+ACTIVE_AD.unit.marginTop+ACTIVE_AD.unit.marginBottom+ACTIVE_AD.headlineFSize+'" target="_blank" href="'+ADS_DISPLAY_URL+'?google_kw=')
				+ radlinks[i].url_escaped_term
				+ '&google_rt='
				+ radlinks[i].radlink_token
				+ '&client='
				+ ((window.google_ad_client&&(window.google_ad_client != "null"))?window.google_ad_client:ACTIVE_AD.client_id)	
				+ '&channel='
				+ ACTIVE_AD.google_ad_channel_mirror
				+ '&google_page_url='
				+ escape(window.location.href)
				+ '&ad_border='
				+ ACTIVE_AD.ad_border
				+ '&ad_title='
				+ ACTIVE_AD.ad_title
				+ '&ad_bg='
				+ ACTIVE_AD.ad_bg
				+ '&ad_text='
				+ ACTIVE_AD.ad_text
				+ '&ad_url='
				+ ACTIVE_AD.ad_url
				+ '">'
				+ radlinks[i].term
				+ "</a>";
			}//loop thru radlinks
		s += "</div>";
	s += "</div>";
	return s;
	}//getRADLinksHTML
	
	function google_radlink_request_done(radlinks) {
		if (radlinks.length < 1) return;	
		document.write(getRADLinksHTML(radlinks));	
	}//google_radlink_request_done
	
	function getAdCredit(daW) {
		var fu = window.google_info?google_info.feedback_url:"https://www.google.com/adsense/support/bin/request.py?contact=abg_afc&gl=US&hideleadgen=1";
		return '<div class="ad_credit_links_container" style="border:0px;padding:0;margin:0;position:absolute;top:-2px;right:10px;font-size:9px;color:#FFF;">'+getAttributionLink()+'</div>';
	}//getAdCredit
	
	function getImgAdUrl(tu,vu,daW,tac,iadref) {
		if (daW >= 300 ) {
			return ('<a '+window.HREF_CALLBACK+' rel="'+tac+'" '+getibclick(iadref)+' href="' + tu + '" ' 
					+ 'onmouseout="window.status=\'\'" ' 
					+ 'onmouseover="window.status=\'go to ' 
					+ vu + '\';return true;" ' 
					+ 'style="position:absolute;top:-2px;left:10px;text-decoration:none;font-size:9px;color:#FFF;cursor:pointer;cursor:hand">' 
					+ vu + '</a>');
		} else {
			return '';
		}
	}//getImgAdUrl
	
	function getAdsenseUnitsHTML(google_ads, activeAdRef, bypassInventoryIncrement) {
			var fu = window.google_info?google_info.feedback_url:"https://www.google.com/adsense/support/bin/request.py?contact=abg_afc&gl=US&hideleadgen=1";

			cpmTextAdsCount = 0;
	
			var s = "";
			var i;
			
			/*
			 * Verify that there are actually ads to display.
			 */
			if (google_ads.length == 0) {
			return "";
			} 
			
			
			/*
			 * If an image or Flash ad is returned, display that ad.
			 * Otherwise, build a string containing all of the ads and
			 * then use a document.write() command to print that string.
			 */
			if (google_ads[0].type == "image") {
			s += '<div class="afc_display afc_image_display"><a '+ window.HREF_CALLBACK +' rel="'+google_ads[0].globalcount+'" '+getibclick(activeAdRef)+' href="' + google_ads[0].url +
			'" target="_top" title="go to ' + google_ads[0].visible_url +
			'"><img border="0" src="' + google_ads[0].image_url +
			'"width="' + google_ads[0].image_width +
			'"height="' + google_ads[0].image_height + '"></a>';
			s += '<div class="ad_credit_container" style="width:'+google_ads[0].image_width+';position:relative;height:9px;border:0px;margin:0px;padding:0px;background-color:#000;">'
			+ getAdCredit(google_ads[0].image_width)
			+ getImgAdUrl(google_ads[0].url,google_ads[0].visible_url,google_ads[0].image_width,google_ads[0].globalcount,activeAdRef) + '</div></div>';
			
			} else if (google_ads[0].type == "flash") {
			s += '<div class="afc_display afc_flash_display"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
			' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"' +
			' WIDTH="' + google_ad.image_width +
			'" HEIGHT="' + google_ad.image_height + '">' +
			'<PARAM NAME="wmode" VALUE="opaque">' +
			'<PARAM NAME="movie" VALUE="' + google_ad.image_url + '">' +
			'<PARAM NAME="quality" VALUE="high">' +
			'<PARAM NAME="AllowScriptAccess" VALUE="never">' +
			'<embed wmode="opaque" src="' + google_ad.image_url +
			'" WIDTH="' + google_ad.image_width +
			'" HEIGHT="' + google_ad.image_height + 
			'" TYPE="application/x-shockwave-flash"' + 
			' AllowScriptAccess="never" ' + 
			' PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></embed></object></div>';
			
			 } else if (google_ads[0].type == "text") {
				
				var numberOfAdsReturnedByGoogle = google_ads.length;
				
				var pushOffset = 0;
				if (activeAdRef.unit.isDupable) {
					var repetitiveLimiter = 0;
					if (google_ads.length === 1) {
						repetitiveLimiter = activeAdRef.unit.maxNumAds;
					} else if (google_ads.length === 2) {
						repetitiveLimiter = (activeAdRef.unit.maxNumAds - 2);
					}
					while (google_ads.length < (activeAdRef.unit.maxNumAds - repetitiveLimiter)) {
						google_ads.push(google_ads[pushOffset]);
						pushOffset++;
					}
				}
				
				if (google_ads.length < activeAdRef.unit.maxNumAds) {
					if (
							activeAdRef.unit.alternates
							&&
							activeAdRef.unit.alternates[google_ads.length]
						) {
							activeAdRef.unit = activeAdRef.unit.alternates[google_ads.length];
						
						}//if alternative unit found
				}//if we got less ads than unit supports
	
				if (!bypassInventoryIncrement) {
					if (!window.currentTotalAds ) {
						window.currentTotalAds = 0;
					}
					window.currentTotalAds += numberOfAdsReturnedByGoogle;
				}
	
			if (!activeAdRef.shouldRenderClean) {
				if (
						activeAdRef.unit.googleAdBlockVertical
						||
						activeAdRef.unit.googleAdBlockSquare
						||
						activeAdRef.unit.googleAdBlockSquareCompact
					)
				{
					s += '<div class="adsByGoogle" style="position:absolute;right:0px;bottom:auto;top:0px;z-index:2;font-size:11px;text-align:left;font-weight:bold;">'+getAttributionLink()+'</div>';
				} else {
					s += '<div class="adsByGoogle" style="position:absolute;right:0px;bottom:0px;z-index:2;font-size:11px;text-align:left;font-weight:bold;">'+getAttributionLink()+'</div>';
				}
			} else {
				s += '<div class="adsByGoogle">'+getAttributionLink()+'</div>';
			}
			if (google_ads.length >= 1) {
			/*
			 * For text ads, append each ad to the string.
			 */
			s += '<div class="afc_text_ad ad-count-'+google_ads.length+'" style="padding:0;margin:0;">';			 
				for(var i=0; i < google_ads.length; ++i) {
					if (!bypassInventoryIncrement) {
						AD_INVENTORY[AD_INVENTORY_COUNT] = google_ads[i];
						AD_INVENTORY_COUNT++;
					}
			
					isLast = (i == (google_ads.length - 1));
									
					if (!bypassInventoryIncrement) {
		
						if (google_ads[i].bidtype == "CPM") {
							cpmTextAdsCount++;
						}
					}
					
					numAds_key = google_ads.length + "_ads";
					headlineDecoration = (activeAdRef.headlineDecoration[numAds_key] ? activeAdRef.headlineDecoration[numAds_key] : "text-decoration:underline;");
					vizurlDecoration = (activeAdRef.vizurlDecoration[numAds_key] ? activeAdRef.vizurlDecoration[numAds_key] : "text-decoration:none;");
					headlineFSize = (activeAdRef.headlineFSize[numAds_key] ? activeAdRef.headlineFSize[numAds_key] : activeAdRef.unit.fSize);
					bodyFSize = (activeAdRef.bodyFSize[numAds_key] ? activeAdRef.bodyFSize[numAds_key] : activeAdRef.unit.adTextFsize);
					urlFSize = (activeAdRef.urlFSize[numAds_key] ? activeAdRef.urlFSize[numAds_key] : activeAdRef.unit.vUrlFSize);
					
					headlineFont = (activeAdRef.headlineFont[numAds_key] ? activeAdRef.headlineFont[numAds_key] : activeAdRef.unit.fFam);
					bodyFont = (activeAdRef.bodyFont[numAds_key] ? activeAdRef.bodyFont[numAds_key] : activeAdRef.unit.fFam);
					urlFont = (activeAdRef.urlFont[numAds_key] ? activeAdRef.urlFont[numAds_key] : activeAdRef.unit.fFam);
					
					targetBlank = activeAdRef.newWindow ? 'target="_blank" ': "";
					if (activeAdRef.shouldRenderClean) {
											// defines
						var prefix  = 'ad-'+ (i+1);
						anchorStart = '<a class="anchor_visible_url" '+ window.HREF_CALLBACK +targetBlank +'rel="'+google_ads[i].globalcount+'" '+getibclick(activeAdRef)+' href="'+ google_ads[i].url +'" '+
											  'onmouseout="window.status=\'\'" '+
											  'onmouseover="window.status=\'go to '+
											  google_ads[i].visible_url + '\';">';
											// lines
						s += '<div class="'+ prefix +' googleTextAd'+(isLast ? " lastGoogleTextAd" : "")+'">' +
											  '<div class="'+ prefix + '-line1 unit-line-1">' + anchorStart + google_ads[i].line1 + '</a></div> ' + 
											  '<div class="'+ prefix + '-line2 adText unit-line-2"><div>'+ google_ads[i].line2 + '</div></div> ' +
											  '<div class="'+ prefix + '-line3 adText unit-line-3"><div>'+ google_ads[i].line3 + '</div></div> ' +
											  anchorStart + '<span class="visibleUrl">' + getTruncVizUrl(google_ads[i].visible_url) + '</span></a></div>';
					} else {
						//if (activeAdRef.mwsc) 
						anchorStart = '<a class="anchor_visible_url" '+ window.HREF_CALLBACK +targetBlank+'rel="'+google_ads[i].globalcount+'" '+getibclick(activeAdRef)+' href="' + google_ads[i].url + '" ' +
						'onmouseout="window.status=\'\'" ' +
						'onmouseover="window.status=\'go to ' +
						google_ads[i].visible_url + '\';" ' +
						'style="text-decoration:none;display:'+(activeAdRef.mwsc ? 'block' : 'inline')+';'+headlineFont+headlineFSize;
	
						s += '<div class="googleTextAd'+(isLast ? " lastGoogleTextAd" : "")+'" style="float:left;padding:0px;margin:0px;margin-top:0px;margin-left:5px;padding-top:5px;overflow:hidden;'+activeAdRef.unit.marginBottom+activeAdRef.unit.marginTop + activeAdRef.unit.adunitWidth + '">'
						+
						'<div style="'+activeAdRef.unit.textAlign
						+(!activeAdRef.mwsc ? activeAdRef.unit.lineOnePaddingTop : '')+'">'+ anchorStart + ";" + (activeAdRef.mwsc?getPadding(activeAdRef.unit.lineOnePaddingTop):'') +
						'"><span style="font-weight:bold;color:#'+activeAdRef.ad_title+';'+headlineFSize+headlineFont+headlineDecoration+'">' +
						'<b style="'+headlineFSize+headlineFont+'">' + google_ads[i].line1 + '</b></span></a></div>' + 
						'<div class="adText"><div style="' + activeAdRef.unit.textAlign + (!activeAdRef.matc ? activeAdRef.unit.lineTwoPaddingTop : '') +'">'+(activeAdRef.matc ? (anchorStart + ";" + (activeAdRef.matc?getPadding(activeAdRef.unit.lineTwoPaddingTop):'') + '">') : '')+'<span style="font-weight:normal;color:#'+activeAdRef.ad_text+';'+bodyFSize+bodyFont+'">' +
						google_ads[i].line2 + ' ' +
						google_ads[i].line3 + (activeAdRef.matc ? '</a>' : '') +'</span></div></div>' +
						'<div style="'+activeAdRef.unit.textAlign
						+(!activeAdRef.mwsc ? activeAdRef.unit.lineThreePaddingTop : '')+'">'+ anchorStart + (activeAdRef.mwsc?getPadding(activeAdRef.unit.lineThreePaddingTop):'') + (activeAdRef.mwsc?getPadding(activeAdRef.unit.lineThreePaddingBottom) : activeAdRef.unit.lineThreePaddingBottom) +
						'"><span class="visibleUrl" style="font-weight:normal;color:#'+activeAdRef.ad_url+';'+vizurlDecoration+urlFSize+urlFont+activeAdRef.unit.vUrlDisplay+'">' +
						getTruncVizUrl(google_ads[i].visible_url) + '</span></a></div></div>';
					}
				}/* loop thru text ads */
			s+= "</div>";
			
			
			}/* if at least one ad */
			}/* if text ads*/
			
			if (cpmTextAdsCount == 1) {
				window.google_content_only = true;
			}
			return s;
	}//getAdsenseUnitsHTML
	
	function getPadding(mProp) {
		return mProp.replace(/margin/gi,"padding");
	}//getPadding
	
	function getTruncVizUrl(vus) {
		if (vus.length >= 18) {
			return vus.replace(/([\.\/]+)/g,'$1<span class="wrapTrigger" style="font-size:1px;"> </span>');
		} else {
			return vus;
		}
	}//getTruncVizUrl
	
	function slotSorter(slotA,slotB) {
		if (slotA.priority == slotB.priority) {
			pya = findElementPosY(slotA.adSlotElement);
			pyb = findElementPosY(slotB.adSlotElement);
			return	(pya-pyb);
		} else {
			return (slotA.priority - slotB.priority);
		}
	}//slotSorter
	
  // XXX since reflowGoogleAds is evaluated later,
  //  it must not reference global variables that may have changed
	function reflowGoogleAds() {
		if (arguments.callee.done) return;
		arguments.callee.done = true;
		sortedAdSlots = [];
		for (sascount=0;daslot=AD_SLOTS[sascount];sascount++) {
			sortedAdSlots[sascount] = daslot;
		}
		
		sortedAdSlots.sort(slotSorter);
		
		for (var j=0,k=0;(daSlot = sortedAdSlots[j]) && (daSlot.unit); j++) {
			adBatch = [];
			for (var l=0;(invAd = AD_INVENTORY[k]) && (l < (daSlot.numAds ? daSlot.numAds : 0));l++,k++) {
				adBatch[l] = invAd;
			}//loop thru inventory
			if (daSlot.adSlotElement) {
				daSlot.adSlotElement.innerHTML = getAdsenseUnitsHTML(adBatch,daSlot,true);
				setDisplay = (daSlot.ad_collapsible && (!adBatch || adBatch.length == 0))?'none':'block';
				daSlot.adSlotElement.style.display = setDisplay;
			}
		}//loop thru slots
	}//reflowGoogleAds
	
	function createReflowWrapper(f1,f2) {
		return function() {
			if (f1) f1.apply();
			if (f2) f2.apply();
		}
	}
	
	if (!window.PROCESSED_ONLOAD_WRAPPER) {
		if (window.addEventListener) {
			window.addEventListener("load",reflowGoogleAds,false);
			document.addEventListener("DOMContentLoaded",reflowGoogleAds,false);
		} else if (window.attachEvent) {
			document.attachEvent("onreadystatechange",reflowGoogleAds);
			window.attachEvent("onload",reflowGoogleAds);
		} else {
			onloadWrapper = null;
			if (window.onload) {
				preExistingOnloadHandler = window.onload;
				onloadWrapper = createReflowWrapper(reflowGoogleAds,preExistingOnloadHandler);
			} else {
				onloadWrapper = createReflowWrapper(reflowGoogleAds);
			}
			window.onload = onloadWrapper;
		}
		window.PROCESSED_ONLOAD_WRAPPER = true;
	}

	function testing_ib_ads(text){
		if(window.location.href.indexOf('?testing_ads_ib')!=-1){
			try{
				console.log(text);
			}catch(e){}
		}
	}	
	
	function adornAds(theads) {
		if (!window.globalAdCounter) {
			window.globalAdCounter = 1;
		}
		var thead;
		for (var theadc=0; thead=theads[theadc]; theadc++) {
			thead.globalcount = window.globalAdCounter;
			window.globalAdCounter++;
		}
	}//adornAds
	
	function google_ad_request_done(google_ads) {
	if (!ACTIVE_AD.unit.isRadLinks) {
			adornAds(google_ads);
			testing_ib_ads(google_ads);
			var currentAd = ACTIVE_AD;
			var isVertical = false;
			var isSquare = false;
			var isSquareCompact = false;
			
			if (currentAd.unit.googleAdBlockVertical) {
				isVertical = true;
			}
			
			if (currentAd.unit.googleAdBlockSquare) {
				isSquare = true;
			}
			
			if (currentAd.unit.googleAdBlockSquareCompact) {
				isSquareCompact = true;
			}
	
			isDebug=(location.href.indexOf("dodebug=1") != -1);
			dString = (isDebug?'onclick="alert(this.innerHTML)" ':"");
			
			isTextAd = (google_ads && google_ads[0] && (google_ads[0].type == "text"));
			
			
			var ati = "";
			var aticount = 0;
			

			if (currentAd.ad_type_id) {
				ati = currentAd.ad_type_id + "_" + aticount;
				while (document.getElementById(ati)) {
					aticount++;
					ati = currentAd.ad_type_id + "_" + aticount;
				}
			}
			
			var adBlockWrapperStart = currentAd.ad_type_id ? '<div id="'+ati+'" rid="'+currentAd.ad_type_id+'">' : '';
			var adBlockWrapperEnd = currentAd.ad_type_id ? '</div>' : '';
			
			theAdSlotID = 'afcSlot_'+AD_SLOTS_COUNT;
			setAdSlotID = isTextAd?('id="'+theAdSlotID+'"'):'';
			var adBlockStart = adBlockWrapperStart + '<div '+setAdSlotID+' '+dString+
				((currentAd.shouldRenderClean)
					? 'class="ad-block-'+ (AD_SLOTS_COUNT+1) +' googleAdBlock '+(isVertical ? "googleAdBlockVertical" : (isSquare ? "googleAdBlockSquare": (isSquareCompact ? "googleAdBlockSquareCompact": "")))+'">'
					: 'style="padding:0;margin:0;position:relative;text-align:left;font-family:Arial,Helvetica,sans-serif;overflow:hidden;clear:both;color:#'+currentAd.ad_text+';width:'+currentAd.unit.googleAdBlockPixelWidth+'px;height:'+currentAd.unit.googleAdBlockPixelHeight+'px;border:1px solid #'+currentAd.ad_border+';background-color:#'+currentAd.ad_bg+';" class="googleAdBlock '+(isVertical ? "googleAdBlockVertical" : (isSquare ? "googleAdBlockSquare": (isSquareCompact ? "googleAdBlockSquareCompact": "")))+'">');

			var adBlockEnd = '<'+'/div>' + adBlockWrapperEnd;
			
			isAfcHtmlAd = ((google_ads.length > 0) && (google_ads[0].type == "html"));
			var htmls = '';
			var creativeHolder = 'tempAdCreativeHolder-'+Math.floor(Math.random()*10000);
			testing_ib_ads("holder:"+creativeHolder);
			if (isAfcHtmlAd) {			
				//htmls = adBlockWrapperStart + '<div class="afc_display afc_html_display">'; //Original
				var htmlsdisplay = window.AFC_RENDER_CLEAN_TARGET_ELEMENT ? "none" : "block";
				htmls = '<div id="'+creativeHolder+'" class="afc_display afc_html_display" style="display:'+htmlsdisplay+';">'+ adBlockWrapperStart; //Emma changes added an id
				scrPatt = new RegExp("\<script\>(.*?)\<\/script\>","gi");
				afc_evals = google_ads[0].snippet.match(scrPatt);
				htmls += google_ads[0].snippet.replace(scrPatt,'');
				for (var aei = 0;(afc_evals && afc_evals[aei]); aei++) {
					eval(afc_evals[aei].replace(scrPatt,"$1"));
				}
				htmls += adBlockWrapperEnd+'</div>';
			}

			if (window.AFC_RENDER_CLEAN_TARGET_ELEMENT) {				
				var writeEl = document.getElementById(window.AFC_RENDER_CLEAN_TARGET_ELEMENT);
				
				if (!isTextAd) {
					writeEl.isDisplayAd = true;
					/*if (writeEl.injectedImage && document.getElementById(writeEl.injectedImage)) {//Original just commented by Emma
						document.getElementById(writeEl.injectedImage).style.display = "none";
					}*/
				}
				
				if (writeEl) {
					if (!isAfcHtmlAd) {
						writeEl.innerHTML = (
							(adBlockStart + getAdsenseUnitsHTML(google_ads,currentAd) + adBlockEnd)				
						);
					} else {
						//document.write('<div id="tempAdCreativeHolder" style="display:none;">');//Original just commented by Emma
						document.write(htmls);
						//document.write('</div>');//Original just commented by Emma
						
						var tempAd = document.getElementById(creativeHolder);
						var scr;
						while((scr = tempAd.getElementsByTagName("script")) && (scr=scr[0])) {
							scr.parentNode.removeChild(scr);
						}
						/*writeEl.innerHTML = tempAd.innerHTML;//Original just commented by Emma
						tempAd.parentNode.removeChild(tempAd);*/
						writeEl.appendChild(tempAd.firstChild);//Emma changes
						tempAd.parentNode.removeChild(tempAd);
					}
					writeEl.id = null;
					writeEl.removeAttribute("id");
				}//writeEl exists
				
				if (!isTextAd) {
					var fwediv = null;
					if ((fwediv = writeEl.getElementsByTagName("div")) && (fwediv = fwediv[0])) {
						fwediv.style.backgroundImage = "none";
						fwediv.style.backgroundColor = "transparent";
					}
				}
				
				window.AFC_RENDER_CLEAN_TARGET_ELEMENT = undefined;
			} else {
				if (!isAfcHtmlAd) {
					document.write(adBlockStart);
				}
				if (isAfcHtmlAd) {
					document.write(htmls);
				} else {
					document.write(getAdsenseUnitsHTML(google_ads,currentAd));
				}
				if (!isAfcHtmlAd) {
					document.write(adBlockEnd);
				}
			}
			currentAd.adSlotID = theAdSlotID;
			currentAd.adSlotElement = document.getElementById(theAdSlotID);
			currentAd.numAds = google_ads.length;

			if (window.OPTIMIZED_HINTS && window.ib_app_id) {
				currentAd.DO_CLICK_TRACKING = true;
				var impressionTracking = new Image(1,1);
				var impressionHints = (window.backup_google_hints ? window.backup_google_hints : null);
				var impressionAds = '[';
				var myad;
				for (var myac=0;myad = google_ads[myac];myac++) {
					impressionAds += '{'
					+	'"type":' + '"' + myad.type + '",'
					+	'"id":' + '"' + myad.globalcount + '",'
					+	(myad.line1? ('"t":'	+ '"' + myad.line1 + '",') : '')
					+	'"u":'	+ '"' + myad.visible_url + '",'
					+	((myad.line2 && myad.line3) ? ('"s":' + '"' + myad.line2 + " " + myad.line3 + '"') : '')
					+ '}'
					+ ((myac != (google_ads.length - 1)) ? ',' : '')
					;
				}//loop thru google_ads
				impressionAds += ']';
				impressionTracking.src =
						window.OPTIMIZED_HINTS.tracking
						+ (impressionHints ? ('&hints=' + scape(impressionHints)) : '')
						+ '&items=' + scape(impressionAds);
			}//OPTIMIZED_HINTS exist
			
			if (isTextAd) {
				AD_SLOTS[AD_SLOTS_COUNT] = currentAd;
				AD_SLOTS_COUNT++;
			} else {
				var avdso;
				if (avdso = window.AFC_VANILLA_DISPLAY_STYLE_OVERRIDES) {
					eval('var overrides={'+avdso+'}');
					if (overrides) {
						var elmtId;
						for (elmtId in overrides) {
							var stylestmt = overrides[elmtId];
							var styleProp = stylestmt.split(":")[0];
							var styleValue = stylestmt.split(":")[1];
							document.getElementById(elmtId).style[styleProp] = styleValue;
						}//loop thru overrides
						for (elmtId in overrides) {
							var oelmt = document.getElementById(elmtId);
							oelmt.id = null;
							oelmt.removeAttribute("id");
						}//loop thru overrides again to remove the id
					}//eval worked	
					window.AFC_VANILLA_DISPLAY_STYLE_OVERRIDES = undefined;
				}//overrides defined
			}//text ad or not
			if (window.NEXT_AD_JOB_STAGE) {
					window[window.NEXT_AD_JOB_STAGE].exec.apply(window[window.NEXT_AD_JOB_STAGE]);
			}
			//return;
		}//not radlinks
		
		if (window.ib_app_id) window.ib_app_id = null;
	}//google_ad_request_done

 function BaseGoogAdUnit(
		w,h,n,d,mTop,mBottom,fontPixelSize,unitWidth,vUrlFontPixelSize,adTextFontPixelSize,adTextAlign,linesPaddingConfig,
		alternates
		) {
	if ((h == 15) || (d == "radlinks") || (d == "vradlinks")) {
		this.isRadLinks = true;
	}
	this.verticalRadLinksClassValue = ((d == "vradlinks")?" googleVerticalRadLinks":"");
	this.width = (w - 2);
	this.height = (h - 2);
	this.isDupable = ((w == 160) && (h == 600));
	this.maxNumAds = n;
	this.direction = d;
	this.marginTop = (mTop || (mTop == 0)) ? "padding-top:"+mTop+"px;" : "";
	this.marginBottom = (mBottom || (mBottom == 0)) ? "padding-bottom:"+mBottom+"px;" : "";
	isV = (
		(this.direction.indexOf("vertical") != -1)
		||
		(this.direction.indexOf("square") != -1)
	);
	this.lineOnePaddingTop = (linesPaddingConfig && linesPaddingConfig.lineOneTop) ? ("margin-top:"+linesPaddingConfig.lineOneTop+"px;") : "";
	this.lineTwoPaddingTop = (linesPaddingConfig && linesPaddingConfig.lineTwoTop) ? ("margin-top:"+linesPaddingConfig.lineTwoTop+"px;") : "";
	this.lineThreePaddingTop = (linesPaddingConfig && linesPaddingConfig.lineThreeTop) ? ("margin-top:"+linesPaddingConfig.lineThreeTop+"px;") : "";
	this.lineThreePaddingBottom = (linesPaddingConfig && linesPaddingConfig.lineThreeBottom) ? ("margin-bottom:"+linesPaddingConfig.lineThreeBottom+"px;") : "";
	this.textAlign = adTextAlign?("text-align:"+adTextAlign+";"):"";
	this.fSize = fontPixelSize?("font-size:"+fontPixelSize + "px;"):"";
	this.fFam = (fontPixelSize >= 12) ? "font-family:Arial;" : "font-family:Verdana;";
	this.adTextFont = this.fFam;
	this.vUrlFont = this.fFam;
	this.adTextFsize = adTextFontPixelSize ?("font-size:"+adTextFontPixelSize + "px;"):this.fSize;
	this.vUrlFSize = vUrlFontPixelSize?"font-size:"+vUrlFontPixelSize+"px;" : "";
	this.vUrlDisplay = ((h!=60) ? "":"display:none;");
			if ((h == 60) && (w == 468 || w == 234))
			  this.vUrlDisplay = '';
	this.adunitWidth = isV ? ("width:"+(this.width - 7)+"px;") :("width:"+(unitWidth?unitWidth:"155")+"px;");

	this.googleAdBlockSquareCompact = (this.direction == "squarecompact");
	this.googleAdBlockSquare = (this.direction == "square");
	this.googleAdBlockVertical = (this.direction == "vertical") ;
	this.googleAdBlockPixelWidth = this.width;
	this.googleAdBlockPixelHeight = this.height;
	this.alternates = alternates;

 }//BaseGoogAdUnit Object

if (!window.AD_UNITS) {
 AD_UNITS = {
	"728x15RL": new BaseGoogAdUnit(728,15,5,"radlinks"),
	"468x15RL": new BaseGoogAdUnit(468,15,3,"radlinks"),
	"160x90RL": new BaseGoogAdUnit(160,90,4,"vradlinks",0,3,12),
	"200x90RL": new BaseGoogAdUnit(200,90,5,"vradlinks",null,null,null),
	"120x90RL": new BaseGoogAdUnit(120,90,4,"vradlinks",0,7,null),
	"180x90RL": new BaseGoogAdUnit(180,90,5,"vradlinks",null,null,null),
	"728x90":	new BaseGoogAdUnit(
					728,90,4,"horizontal",null,null,10,170,10,10,null,null,
					{
						1: new BaseGoogAdUnit(
							728,90,4,"horizontal",null,null,25,700,14,16,"center"
						),
						2: new BaseGoogAdUnit(
							728,90,4,"horizontal",null,null,14,350,10,12,"left", {
								lineOneTop: 0,
								lineTwoTop: 5,
								lineThreeTop: 5,
								lineThreeBottom: 10
							}
						),
						3: new BaseGoogAdUnit(
							728,90,4,"horizontal",null,null,12,230,10,12,"left", {
								lineOneTop: 0,
								lineTwoTop: 2,
								lineThreeTop: 4,
								lineThreeBottom: 2
							}
						)
					}
				), /* fix 3 -- 4*/
	"468x60":	new BaseGoogAdUnit(
					468,60,2,"horizontal",null,null,11,220,11,10,"left",{lineThreeTop:0},
					{
						1: new BaseGoogAdUnit(
							468,60,2,"horizontal",null,null,16,450,11,12,"center", {
								lineOneTop: 0,
								lineTwoTop: 3,
								lineThreeTop: 3
							}
						)
					}
				),
	"234x60": new BaseGoogAdUnit(234,60,1,"vertical",10,0,10),/* 5 0 10 */
	"238x60": new BaseGoogAdUnit(238,60,1,"vertical",5,0,10),
	"300x50": new BaseGoogAdUnit(300,50,1,"vertical",5,0,11),
	"320x50": new BaseGoogAdUnit(320,50,1,"vertical",5,0,11),
	"200x90": new BaseGoogAdUnit(200,90,1,"vertical",15,0,11),
	"180x90": new BaseGoogAdUnit(180,90,1,"vertical",15,0,11),
	"160x90": new BaseGoogAdUnit(160,90,1,"vertical",10,0,11),
	"120x600": new BaseGoogAdUnit(
							120,600,4,"vertical",0,0,12,null,10,12,"left",{lineOneTop: 15 /* 10 20 */, lineTwoTop:4,lineThreeBottom: 2 /* 5*/ },
							{							
								1: new BaseGoogAdUnit(
									120,600,4,"vertical",0,0,20,null,10,16,"center", {
										lineOneTop: 100, /* 80 */
										lineTwoTop: 30,
										lineThreeTop: 30,
										lineThreeBottom: 210
									}
								),
								2: new BaseGoogAdUnit(
									120,600,4,"vertical",0,0,16,null,11,14,"left", {
										lineOneTop: 80, /* 100 */
										lineTwoTop: 4,
										lineThreeTop: 8,
										lineThreeBottom: 0
									}
								),
								3: new BaseGoogAdUnit(
									120,600,4,"vertical",0,0,16,null,11,14,"left", {
										lineOneTop: 40, /* 50 */
										lineTwoTop: 4,
										lineThreeTop: 8,
										lineThreeBottom: 0
									}
								)
							}
							), /* 25,5,12 */
	"160x600": new BaseGoogAdUnit(
							160,600,5,"vertical",0,0,12,null,10,12,null,{lineOneTop: 20, lineTwoTop:4,lineThreeBottom: 5 },
							{							
								1: new BaseGoogAdUnit(
									160,600,5,"vertical",0,0,25,null,10,16,"center", {
										lineOneTop: 100, /* 80 */
										lineTwoTop: 30,
										lineThreeTop: 30,
										lineThreeBottom: 210
									}
								),
								2: new BaseGoogAdUnit(
									160,600,5,"vertical",0,0,16,null,11,14,"left", {
										lineOneTop: 100,
										lineTwoTop: 4,
										lineThreeTop: 8,
										lineThreeBottom: 0
									}
								),
								3: new BaseGoogAdUnit(
									160,600,5,"vertical",0,0,16,null,11,14,"left", {
										lineOneTop: 50,
										lineTwoTop: 4,
										lineThreeTop: 8,
										lineThreeBottom: 0
									}
								),
								4: new BaseGoogAdUnit(
									160,600,5,"vertical",0,0,13,null,10,13,"left", {
										lineOneTop: 35, /* 40 */
										lineTwoTop: 4,
										lineThreeTop: 8,
										lineThreeBottom: 0
									}
								)
							}
						), /* 15 10 12 */
	"500x1200": new BaseGoogAdUnit(500,1200,10,"vertical",5,5,16,null,13,13),
	"120x240": new BaseGoogAdUnit(120,240,2,"vertical",15,0,10), /* fix 1 -- 2 */
	"160x240": new BaseGoogAdUnit(
						160,240,2,"vertical",20,0,12,null,10,12,null,null,
						{
							1: new BaseGoogAdUnit(
								160,240,2,"vertical",50,0,16,null,12,14,null,{lineThreeTop: 5}
							)
						
						}
								),
	"336x280": new BaseGoogAdUnit(
						336,280,4,"squarecompact",0,0,13,null,11,12,null,{lineOneTop:10/*3*/, lineThreeBottom: 3},
						{
							1: new BaseGoogAdUnit(
								336,280,4,"square",0,0,25,null,14,16,"center", {
									lineOneTop: 75,
									lineTwoTop: 10,
									lineThreeTop: 10,
									lineThreeBottom: 90
								}
							),
							2: new BaseGoogAdUnit(
								336,280,4,"square",0,0,18,null,13,16,"left", {
									lineOneTop: 30,
									lineTwoTop: 4,
									lineThreeTop: 6,
									lineThreeBottom: 20
								}
							),
							3: new BaseGoogAdUnit(
								336,280,4,"square",0,0,14,null,11,12,"left", {
									lineOneTop: 15,
									lineTwoTop: 4,
									lineThreeTop: 6,
									lineThreeBottom: 5
								}
							)
						}
						), /* fix ? 4 ads 13 13 */
	"350x200": new BaseGoogAdUnit(
						350,200,3,"square",5,10,11,null,10,11,null,null,
						{
							1: new BaseGoogAdUnit(
								350,200,3,"square",0,0,25,null,14,16,"center", {
									lineOneTop: 45,
									lineTwoTop: 10,
									lineThreeTop: 10,
									lineThreeBottom: 65
								}
							)
						}
						), /* 2 -- 3 ??? */
	"300x250": new BaseGoogAdUnit(
						300,250,4,"square",8/* 10 */,0,11,null,10,11,null,null,
						{
							1: new BaseGoogAdUnit(
								300,250,4,"square",0,0,25,null,14,16,"center", {
									lineOneTop: 70,
									lineTwoTop: 10,
									lineThreeTop: 10,
									lineThreeBottom: 90
								}
							),
							2: new BaseGoogAdUnit(
								300,250,4,"square",0,0,14,null,11,14,"left", {
									lineOneTop: 20,
									lineTwoTop: 2,
									lineThreeTop: 4,
									lineThreeBottom: 30
								}
							)
						}
					), /* fix 2 -- 4 */
	"250x250": new BaseGoogAdUnit(250,250,3,"square",20,0,12), /* fix 2 -- 3 */
	"200x200": new BaseGoogAdUnit(200,200,2,"square",15,5,12),
	"180x150": new BaseGoogAdUnit(180,150,1,"square",40,0,12),
	"125x125": new BaseGoogAdUnit(125,125,1,"square",15,0,10)
 };
	AD_UNITS["728x15"] = AD_UNITS["728x15RL"];
	AD_UNITS["468x15"] = AD_UNITS["468x15RL"];

}//no need to waste cpu n memory redefining these.

	function GoogAd(unit) {
		this.unit = unit;
	}//GoogAd
	
	// instantiate
	ACTIVE_AD = (AFC_RENDER_CLEAN)
	  ? new GoogAd(new BaseGoogAdUnit(
      ad_dimensions.substr(0,ad_dimensions.indexOf('x')), // width
      ad_dimensions.substr(ad_dimensions.indexOf('x')+1), // height
      AFC_RENDER_MAX,
      AFC_RENDER_DIRECTION)) // developer-friendly "clean" ad
	  : new GoogAd(AD_UNITS[ad_dimensions]); // stock ad

	ACTIVE_AD.client_id=google_ad_client;
	
	ACTIVE_AD.shouldRenderClean = AFC_RENDER_CLEAN;
	
	if (window.AD_TYPE_ID) {
		ACTIVE_AD.ad_type_id = window.AD_TYPE_ID;
		window.AD_TYPE_ID = null;
	}
	
	ACTIVE_AD.mwsc = false;//window.mwsc;
	window.mwsc = null;
	
	ACTIVE_AD.matc = false;//window.matc;
	window.matc = null;
	
	if (window.radlinks_display_url) {
		ACTIVE_AD.ADS_DISPLAY_URL = window.radlinks_display_url;
	}
	
	ACTIVE_AD.priority = window.ad_priority?window.ad_priority:10;
	window.ad_priority = null;
	ACTIVE_AD.ad_dimensions = ad_dimensions;
	ACTIVE_AD.ad_border = ad_border;
	ACTIVE_AD.ad_title = ad_title;
	ACTIVE_AD.ad_bg = ad_bg;
	ACTIVE_AD.ad_text = ad_text;
	ACTIVE_AD.ad_url = ad_url;
	ACTIVE_AD.ad_collapsible = window.ad_collapsible?window.ad_collapsible:false;
	window.ad_collapsible = false;

	ACTIVE_AD.google_ad_channel_mirror = window.google_ad_channel;
	ACTIVE_AD.newWindow = window.ad_new_window;
	window.ad_new_window = null;


	ACTIVE_AD.headlineDecoration = window.ad_headline_decoration ? getCustomPropertyObject(window.ad_headline_decoration,"text-decoration") : "text-decoration:underline;";
	window.ad_headline_decoration = null;
	ACTIVE_AD.vizurlDecoration = window.ad_url_decoration ? getCustomPropertyObject(window.ad_url_decoration,"text-decoration") : "text-decoration:none;";
	window.ad_url_decoration = null;
	ACTIVE_AD.headlineFSize = window.ad_headline_size ? getCustomPropertyObject(window.ad_headline_size,"font-size") : ACTIVE_AD.unit.fSize;
	window.ad_headline_size = null;
	ACTIVE_AD.bodyFSize = window.ad_body_size ? getCustomPropertyObject(window.ad_body_size,"font-size") : ACTIVE_AD.unit.adTextFsize;
	window.ad_body_size = null;
	ACTIVE_AD.urlFSize = window.ad_url_size ? getCustomPropertyObject(window.ad_url_size,"font-size") : ACTIVE_AD.unit.vUrlFSize;
	window.ad_url_size = null;
	ACTIVE_AD.headlineFont = window.ad_headline_font ? getCustomPropertyObject(window.ad_headline_font,"font-family") : ACTIVE_AD.unit.fFam;
	window.ad_headline_font = null;
	ACTIVE_AD.bodyFont = window.ad_body_font ? getCustomPropertyObject(window.ad_body_font,"font-family") : ACTIVE_AD.unit.fFam;
	window.ad_body_font = null;
	ACTIVE_AD.urlFont = window.ad_url_font ? getCustomPropertyObject(window.ad_url_font,"font-family") : ACTIVE_AD.unit.fFam;
	window.ad_url_font = null;
	
if (!window.RADLINKS_ADS_DISPLAY ) {
	if (!ACTIVE_AD.unit.isRadLinks) {
		google_image_size = (2+ACTIVE_AD.unit.width) + "x" + (2+ACTIVE_AD.unit.height);
	} else {
		google_image_size = null;
	}
	if (!window.google_max_num_ads) google_max_num_ads = ACTIVE_AD.unit.maxNumAds;
	if (ACTIVE_AD.unit.isRadLinks) {
		google_max_num_ads = '0';
		google_num_radlinks = ACTIVE_AD.unit.maxNumAds;
		google_max_radlink_len = 20;
	}
	
	if (!ACTIVE_AD.unit.isRadLinks) {
		if (window.currentTotalAds) {
			window.google_skip = window.currentTotalAds;
		}
	} else {
		window.google_skip = null;
	}
	
	/* google_ad_section = "default";*/
	/* google_page_url = ""; */
	
	if (top != self) {
		window.google_page_url = document.referrer;
	}
	
	google_ad_output = 'js';

	if (ACTIVE_AD.shouldRenderClean && !window.AFC_RENDER_CLEAN_TARGET_ELEMENT) {
	  // text-only ads for CLEAN
	  google_ad_type = 'text';
	} else {
	  // preserve original behavior
	  if (!ACTIVE_AD.unit.isRadLinks) {
			  if (!window.google_ad_type) {
					  google_ad_type = 'text,image,flash,html';
			  }
	  } else {
			  google_ad_type = null;
	  }
	}

	//google_language = 'en';
	google_encoding = 'utf8';
	if (!window.google_safe) {
		google_safe = 'medium';
	}

	if (window.google_content_only) {
		google_targeting = "content";
	}
	
	var ohints;
	window.google_hints = ((ohints=window.OPTIMIZED_HINTS)&&ohints.hints&&window.ib_app_id)?ohints.hints:undefined;
		
	if (window.google_hints) {
		window.backup_google_hints = window.google_hints;
	} else if (window.backup_google_hints) {
		window.google_hints = window.backup_google_hints;
	} else {
		window.google_hints = "";
	}
	
	metaTags = document.getElementsByTagName("meta");
	metaInfo = "";
	for (var mtc=0;(dmt=metaTags[mtc]);mtc++) {
		if ((mDesc=dmt.getAttribute("name")) && (mDesc.toLowerCase().indexOf("description") != -1)) {
			metaInfo = metaInfo + "," + dmt.getAttribute("content");
		} else if ((mKw=dmt.getAttribute("name")) && (mKw.toLowerCase().indexOf("keywords") != -1)) {
			metaInfo = dmt.getAttribute("content") + "," + metaInfo;
		}
		metaInfo = metaInfo.toLowerCase();
	}
	
	google_feedback = 'on';


	//if (window.google_hints.indexOf(metaInfo) == -1) {
	//	window.google_hints += metaInfo;
	//}
		
}//we're not in RADLINKS_ADS_DISPLAY mode

if (!window.AD_INVENTORY) {
	AD_INVENTORY = [];
	AD_INVENTORY_COUNT = 0;
}
if (!window.AD_SLOTS) {
	AD_SLOTS = [];
	AD_SLOTS_COUNT = 0;
}

// reset
AFC_CALLBACK = AFC_RENDER_CLEAN = AFC_RENDER_MAX = AFC_RENDER_DIRECTION = undefined;


