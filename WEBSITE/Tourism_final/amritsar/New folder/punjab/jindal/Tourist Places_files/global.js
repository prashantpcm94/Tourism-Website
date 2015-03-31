
function suwidhaMenu1(str){
	document.writeln('<table width="200" class="MenuHeading_green" cellpadding="1" cellspacing="0" border="0">')
	document.writeln('<tr>')
	document.writeln('<th align="center"><a href="../html/suwidha_about_menu.htm"><b>SUWIDHA</b></a></th>')
	document.writeln('</tr>')
	document.writeln('<tr>')
	document.writeln('<td><br><a href="../html/suwidha.htm#about">&nbsp;&nbsp;About Suwidha</a><br><br><a href="http://suwidhaonline.punjab.gov.in/OnlineStatus.aspx">&nbsp;&nbsp;Suwidha Online Status</a><br><br><a href="../html/suwidha.htm#sms">&nbsp;&nbsp;SMS Service</a><br><br><a href="../html/suwidha.htm#helpline">&nbsp;&nbsp;SUWIDHA Helpline</a><br><br><a href="../html/suwidha.htm#rti">&nbsp;&nbsp;SUWIDHA RTI</a><br><br>	 <a href="../html/suwidha_service_faq.htm">&nbsp;&nbsp;FAQ</a></td>')
	document.writeln('</tr>')
	document.writeln('</table>')

}

function suwidhaMenu2(str){
	document.writeln('<table width="200" class="MenuHeading_green" cellpadding="1" cellspacing="0" border="0">')
	document.writeln('<tr>')
	document.writeln('<th align="center"><a href="../html/suwidha_service_menu.htm"><b>Services</b></a></th>')
	document.writeln('</tr>')
	document.writeln('<tr>')
	document.writeln('<td><br><a href="../html/suwidha_service_affidavit.htm">&nbsp;&nbsp;Affidavit</a><br><br><a href="../html/suwidha_service_arms.htm">&nbsp;&nbsp;Arms License</a><br><br><a href="../html/suwidha_service_ll.htm">&nbsp;&nbsp;Learner License</a><br><br><a href="../html/suwidha_service_copying.htm">&nbsp;&nbsp;Copying and Miscellaneous</a><br><br><a href="../html/suwidha_service_countersign.htm">&nbsp;&nbsp;Counter Signature</a><br><br><a href="../html/suwidha_service_menu.htm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;more..</a></td>')
	document.writeln('</tr>')
	document.writeln('</table>')

}



function header(position){	
	var relative_path = ""
	if (position == null){
		position = 1
		relative_path = "../html/"
	} else if (position == 0) relative_path = "html/"
	else if (position == 2) relative_path = "../../html/"
	
	document.write('<table width="780" cellpadding="0" cellspacing="0" border="0">')
	document.write('<tr>')
	document.write('<td valign="top"><img src="'+relative_path+'../images/banner2.jpg" hspace="0" vspace="0" width="780" height="103" border="0" alt=""></td>')
	document.write('</tr>')	
	document.write('<tr valign="top">')
	document.write('<td>')	
	document.write('<table width="780" cellpadding="0" cellspacing="0" border="0">')
	document.write('<tr valign="top">')
	document.write('<td width="187" height="20" bgcolor="#1184BB"><p align="center"><a href="../index.html" class="HeaderMenu">Home</a></font></p></td>')	
	document.write('<td width="187" height="20" bgcolor="#01A2A5"><p align="center"><a href="../html/suwidha.htm" class="HeaderMenu">Suwidha</a></p></td>')	
	document.write('<td width="187" height="20" bgcolor="#21990C"><p align="center"><a href="../html/telephone_directory.htm" class="HeaderMenu">Key Contacts</a></p></td>')	
	document.write('<td width="187" height="20" bgcolor="#F8B901"><p align="center"><a href="../html/map.htm" class="HeaderMenu">Map</a></p></td>')	
	document.write('<td width="187" height="20" bgcolor="#C0C0C0"><p align="center"><a href="../html/nic_it.htm" class="HeaderMenu">NIC & IT</a></p></td>')
	document.write('</tr>')
	document.write('</table>')
	document.write('</td>')	
	document.write('</tr>')
//	document.write('<tr>')
//	document.write('<td width="705" height="58" colspan="7" bgcolor="#F9F7D9"></td>')
//	document.write('</tr>')
	document.write('</table>')
}

function copyright(){
	document.writeln('<table width="640" cellpadding="1" cellspacing="0" border="0">')
	document.writeln('<tr>')
	document.writeln('<td class="Copyright" align="right"><b>Site is designed &amp; developed by:</b></td>')
	document.writeln('<td class="Copyright"><font color="#f07b00">National Informatics Centre, Punjab State Unit, Chandigarh</font></td>')
	document.writeln('</tr>')
	document.writeln('<tr>')
	
	document.writeln('<td align="right" class="Copyright"><b>Contents developed by:</b></td>')
	document.writeln('<td class="Copyright"><font color="#f07b00">Amritsar District Administration</font></td>')
	document.writeln('</tr>')
	document.writeln('<tr>')
    
	
	document.writeln('<td class="Copyright" colspan="2" align="center" <b><a href="../html/disclaimer.htm">(Disclaimer) </a> &nbsp;&nbsp;  <a href="../html/privacy.htm"> (Privancy Statement) </a>    &nbsp;&nbsp;<a href="../html/copyright.htm"> (Copyright)</a> </b></td>')
	
	document.writeln('</tr>')
	document.writeln('<tr>')
	
	document.writeln('<td class="Copyright" colspan="2" align="center"><font size="-2" face="tahoma">This site is best viewed in 800x600 resolutions. Use IE 4.5/Netscape 4.5 or above.</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>')
	document.writeln('</tr>')
	document.writeln('</table>')
}
	

function leftMenu1(str){
	document.writeln('<table width="160" class="MenuHeading_green" cellpadding="1" cellspacing="0" border="0">')
	document.writeln('<tr>')
	document.writeln('<th align="center"><b>Site Links</b></th>')
	document.writeln('</tr>')
	document.writeln('<tr>')
	document.writeln('<td><a href="../html/about_district_menu.htm">&nbsp;&nbsp;About District</a><br><a href="../html/administrative_divisions_menu.htm">&nbsp;&nbsp;Administrative Divisions</a><br><a href="../html/district_administration_menu.htm">&nbsp;&nbsp;District Administration</a><br><a href="../html/places_to_visit.htm">&nbsp;&nbsp;Places To Visit</a><br><a href="../html/cities_towns_menu.htm">&nbsp;&nbsp;Cities & Towns</a></td>')
	document.writeln('</tr>')
	document.writeln('</table>')

}
	

function leftMenu2(str){
	document.writeln('<table width="160" class="MenuHeading_blue" cellpadding="1" cellspacing="0" border="0">')
	document.writeln('<tr>')
	document.writeln('<th align="center"><b>Site Links</b></th>')
	document.writeln('</tr>')
	document.writeln('<tr>')
	document.writeln('<td><a href="../html/fairs_festivals.htm">&nbsp;&nbsp;Fairs & Festivals</a><br><a href="../html/district_at_a_glance.htm">&nbsp;&nbsp;District At A Glance</a><br><a href="../html/history_culture.htm">&nbsp;&nbsp;History & Culture</a><br><a href="../html/education_menu.htm">&nbsp;&nbsp;Education</a><br><a href="../html/health_menu.htm">&nbsp;&nbsp;Health</a><br><a href="../html/literature_music.htm">&nbsp;&nbsp;Literature & Music</a><br><a href="../html/aromas.htm">&nbsp;&nbsp;Flavours & Aromas</a></td>')
	document.writeln('</tr>')
	document.writeln('</table>')

}


function homeBottom(){
	document.writeln('<br><center><div style="height=20;width=50;"><B><a href="../index.html"><img src="../images/home.jpg" alt="Home" width="34" height="27" border=0></a></B></div></center>')
}

function vline() {
	document.write('<BR><TABLE CELLPADDING=0 CELLSPACING=0 WIDTH=1 height="100%" BORDER=0 BGCOLOR="#8D5501">')
	document.write('<TR>')
	document.write('<TD><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR></TD>')
	document.write('</TR>')
	document.write('</TABLE>')
}

function ds(requrl){
	mywin=window.open("../html/popup.htm","popup","width=600,height=350,screenX=100,screenY=0,scrollbars=yes,menubar=yes,resizable=yes,status=yes,toolbar=yes,directories=no,location=yes");
	setTimeout("mywin.location.href='"+requrl+"';mywin.focus();",2000);
	mywin.focus();
}

