function header1(){
	document.writeln('<table width="770" cellpadding="0" cellspacing="0" border="0">')
	document.writeln('<tr>')
	document.writeln('<td ><img src="../images/header1.jpg" width="770" alt=""></td>')
	document.writeln('</tr>')
	document.writeln('</table>')
}

function header2(position){
	if (position == null) position = 1
	document.writeln('<table  bgcolor="#e9aa54" width="770" cellspacing="0" cellpadding="0" border="0">')
	document.writeln('<tr valign="top">')
	document.writeln('<td width="100%">')
	
	topMenu(position)
	
	document.writeln('</td>')
	document.writeln('</tr>')
	document.writeln('</table>')
}

function topMenu(position){	
	var relative_path = ""
	if (position == null){
		position = 1
		relative_path = "../html/"
	} else if (position == 0) relative_path = "html/"
	else if (position == 1) relative_path = "../html/"
	else if (position == 2) relative_path = "../../html/"
	document.writeln('<table width="770" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffd688">')
	document.writeln('<tr>')
	document.writeln('<td width="35%"><a class="MenuItem" title="Home" href="'+relative_path+'../index.html">&nbsp;Jalandhar - A City of Sports</a></td>')
	//document.writeln('<td width="7%"><a class="MenuItem" href="">Search</a></td>')
	document.writeln('<td width="13%"><a class="MenuItem" href="'+relative_path+'about_suwidha.htm">SUWIDHA</a></td>')
document.writeln('<td width="15%"><a class="MenuItem" href="'+relative_path+'earthquake_risk_menu.htm">Earthquake Risk</a></td>')
	//document.writeln('<td width="10%"><a class="MenuItem" href="'+relative_path+'govt_offices_activeorg_nri_sabha_punjab.htm">NRI\'s Corner</a></td>')
	document.writeln('<td width="11%"><a class="MenuItem" href="'+relative_path+'contact_us.htm">Contact Us</a></td>')
	document.writeln('<td width="5%"><a  class="MenuItem"href="'+relative_path+'../index.html">Home</a></td>')
	document.writeln('</tr>')
	document.writeln('</table>')
}

function pipe(){
	document.writeln('<font size="1" color="#c77d1b"><b>|</b></font>')
}
	

function leftMenu(str){
	leftPane(str)
}


function copyright(){
	document.writeln('<table width="770" cellpadding="2" cellspacing="0" border="0">')
	document.writeln('<tr>')

	document.writeln('<td align="center">')

	document.writeln('<font class="Copyright"><b>This site is designed and developed by</b><br>')

	document.writeln('<font color="#780000">National Informatics Centre, Punjab State Unit, Chandigarh and NIC District Unit, Jalandhar</font><br>')

	document.writeln('<b>Contents developed,maintained and updated by</b>&nbsp;Jalandhar District Administration</font><br>')

	document.writeln('<font size="-2" face="tahoma">This site is best viewed in 800x600 resolutions.<br>Use IE 6.0/Mozilla Firefox 2.0 or above.</font><br>')
	document.writeln( '<font size="10" face="arial"><a href="../html/disclaimer.htm">Read Disclaimer</a></font><br>')
	
	document.writeln('</td>')

	document.writeln('</tr>')

	document.writeln('</table>')

}


function homeBottom(){
	//document.writeln('<br><center><div style="height=20;width=50;"><B><img src="../images/suwidhalogo.jpg" border=0></a></B></div></center>')
}


function bottomMenu(){	
	document.writeln('<br><center>')
	document.writeln('<table width="540" cellpadding="0" cellspacing="0" border="0">')
	document.writeln('<tr align="center" valign="middle">')
	document.writeln('<td colspan="4"><font class="text"><b>Site Links</b></font><hr color="#de7b4b" width="100%"></td>')
	document.writeln('</tr>')	
	document.writeln('<tr valign="middle">')
	document.writeln('<td>')
	document.writeln('<a class="bottomMenu" href="../html/about_jalandhar_menu.htm">About Jalandhar</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/jalandhar_division_menu.htm">Jalandhar Division</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/district_administration_menu.htm">District Administration</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/jalandhar_facts_menu.htm">Jalandhar Fact File</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/govt_offices_menu.htm">Government Offices</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/district_at_a_glance_menu.htm">District at a Glance</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/about_suwidha.htm">Suwidha</a><br>')
	document.writeln('</td>')
	document.writeln('<td>')
	document.writeln('<a class="bottomMenu" href="../html/citizen_charter_menu.htm">Public Utility Forms</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/cities_towns_menu.htm">Cities & Towns</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/history_culture_menu.htm">History & Culture</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/sports_menu.htm">Sports</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/photo_gallery_menu.htm">Photo Gallery</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/banks.htm">Banks</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/egovernance_menu.htm">e-Gov Initiatives</a><br>')
	document.writeln('</td>')
	document.writeln('<td>')
	document.writeln('<a class="bottomMenu" href="../html/dssobenificary2012.html">DSSO Beneficiary</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/key_contacts_menu.htm">Key Contacts</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/facilities_menu.htm">Facilities Available</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/tourism_menu.htm">Tourism</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/fair_and_festivals_menu.htm">Fair and Festivals</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/trains_menu.htm">Trains from Jalandhar</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/downloads_menu.htm">Downloads</a><br>')
	document.writeln('</td>')
	document.writeln('<td>')
	document.writeln('<a class="bottomMenu" href="../html/maps_menu.htm">Maps of Jalandhar</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/industries_menu.htm">Industries</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/press_and_electronic_media_menu.htm">Press & Electronic Media</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/hotels.htm">Hotels & Tourist Complexes</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/public_utility_numbers_menu.htm">Public Utility Numbers</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/important_websites_menu.htm">Important Websites</a><br>')
	document.writeln('<a class="bottomMenu" href="../html/about_nic_jalandhar_menu.htm">NIC Jalandhar</a><br>')
	
	document.writeln('</td>')
	document.writeln('</tr>')
	document.writeln('</table></center>')
}



function topInnerRow(){
	document.writeln('<tr>')
	document.writeln('<td align="left"><img src="../images/curve_top_left.gif" width="24" height="24" border="0" alt=""></td>')
	document.writeln('<td>&nbsp;</td>')
	document.writeln('<td align="right"><img src="../images/curve_top_right.gif" width="24" height="24" border="0" alt=""></td>')
	document.writeln('</tr>')
}


function bottomInnerRow(){
	document.writeln('<tr>')
	document.writeln('<td align="left"><img src="../images/curve_bottom_left.gif" width="24" height="24" border="0" alt=""></td>')
	document.writeln('<td>&nbsp;</td>')
	document.writeln('<td align="right"><img src="../images/curve_bottom_right.gif" width="24" height="24" border="0" alt=""></td>')
	document.writeln('</tr>')
	
	

}
