document.avp_ready=1;function avp_zone(a){avp_single("zone?zid="+a.zid,a)}function avp_campaign(a){avp_single("campaign?cid="+a.cid,a)}function avp_media(a){avp_single("media?mid="+a.mid,a)}function avp_single(e,a){var c=(window.location.protocol!="https:")?"http":"https";var d=c+"://"+a.base;var b="";if(a.refresh){b+="&refresh="+a.refresh}if(a.refresh_limit){b+="&refresh_limit="+a.refresh_limit}if(a.click){b+="&click="+a.click}if(a.exit){b+="&exit="+a.exit}if(a.include){b+="&include="+a.include}if(a.exclude){b+="&exclude="+a.exclude}if(a.timeout){b+="&timeout="+a.timeout}b=avp_opts(a,b);if(a.iframe){document.write('<iframe src="'+d+"/servlet/view/"+a.type+"/javascript/html/"+e+"&pid="+a.pid+b+'" height="'+a.height+'" width="'+a.width+'" hspace="0" vspace="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"><a href="'+d+"/servlet/click/"+e+"&pid="+a.pid+"&lookup=true"+b+'" rel="nofollow" target="_blank"><img src="'+d+"/servlet/view/"+a.type+"/javascript/image/"+e+"&pid="+a.pid+b+'" height="'+a.height+'" width="'+a.width+'" hspace="0" vspace="0" border="0" alt="Click Here!"></a></iframe>')}else{document.write('<script src="'+d+"/servlet/view/"+a.type+"/javascript/"+e+"&pid="+a.pid+b+'" type="text/javascript"><\/script>')}}function avp_multiple(a){var c=(window.location.protocol!="https:")?"http":"https";var d=c+"://"+a.base;var b=(a.renderer!="grid")?"&layout="+a.layout:"&columns="+a.columns;b=avp_opts(a,b);document.write('<script src="'+d+"/servlet/view/"+a.type+"/unique/javascript/"+a.renderer+"?zid="+a.zid+"&pid="+a.pid+"&total="+a.total+"&padding="+parseInt(a.padding||0)+"&margin="+parseInt(a.margin||0)+b+'" type="text/javascript"><\/script>')}function avp_escape(a){return(!a.indexOf||(a.indexOf("+")==-1&&a.indexOf("%")==-1))?((encodeURIComponent)?encodeURIComponent(a):escape(a)):a}function avp_opts(b,d){if(b.sid){d+="&sid="+b.sid}if(b.contextual){d+="&contextual="+b.contextual}if(b.crawler){d+="&crawler="+b.crawler;if(b.align){d+="&align="+b.align}if(b.closeable){d+="&closeable="+b.closeable}if(b.spacing){d+="&spacing="+b.spacing}if(b.bgcolor){d+="&bgcolor="+avp_escape(b.bgcolor)}}for(var g=1;g<=10;g++){if(b["custom"+g]){d+="&custom"+g+"="+avp_escape(b["custom"+g])}}if(b.echo){d+="&echo="+b.echo;var a=b.echo.split(",");for(var f=0;f<a.length;f++){if(b[a[f]]){d+="&"+a[f]+"="+avp_escape(b[a[f]])}}}if(b.keywords){d+="&keywords="+avp_escape(b.keywords)}if(b.language){d+="&language="+avp_escape(b.language)}if(b.lightbox){d+="&lightbox="+b.lightbox;if(b.autoclose){d+="&autoclose="+b.autoclose}}if(b.overlay){d+="&overlay="+b.overlay;if(b.autoclose){d+="&autoclose="+b.autoclose}if(b.spacing){d+="&spacing="+b.spacing}if(b.bgcolor){d+="&bgcolor="+avp_escape(b.bgcolor)}}if(b.type=="pagepeel"){if(b.color1){d+="&color1="+avp_escape(b.color1)}if(b.color2){d+="&color2="+avp_escape(b.color2)}if(b.anchor){d+="&anchor="+avp_escape(b.anchor)}}if(b.type=="wallpaper"){d+="&resolution="+screen.width+"x"+screen.height}d+="&random="+Math.floor(89999999*Math.random()+10000000);d+="&millis="+new Date().getTime();if(b.cturl){d+="&encode="+parseInt(b.encode||0)}d+="&referrer="+avp_escape(document.location);if(b.cturl){d+="&cturl="+avp_escape(b.cturl)}return d}