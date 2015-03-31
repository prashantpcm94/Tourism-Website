<!-- img banners. ibn infotainment.
var u="undefined"; var boo='boolean'; d=document;
adsize = typeof ibs_ldh_adsize!=u ? ibs_ldh_adsize : '468x60'; // 468x60 is set as default ad.
adgroup = typeof ibs_ldh_adgroup!=u ? parseInt(ibs_ldh_adgroup) : 1;
admix = typeof ibs_ldh_admix==boo ? ibs_ldh_admix : false;// to ask, whether other Ad program will be mixed or not.
adrefu = encodeURIComponent(window.location.href); //alert(adrefu);
if(adsize=='468x60'){fr_h = 60; fr_w = 468;}
else if(adsize=='200x200'){fr_h = 200; fr_w = 200;}
else if(adsize=='728x90'){fr_h = 90; fr_w = 728;}
else if(adsize=='234x60'){fr_h = 60; fr_w = 234;}
d.write('<iframe height="'+fr_h+'px" width="'+fr_w+'px" scrolling="no" frameborder=0 src="http://www.ecatalogs.in/embeddapi/adscripts/?adsize='+adsize+'&adgroup='+adgroup+'&admix='+admix+'" framespacing=0></iframe>');
//-->