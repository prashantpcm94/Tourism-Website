// JavaScript Document

function sendme() 
{
var deptcode="";
deptcode=document.dpt.nd.value;
//window.location="not_repf.asp?deptcode=" + deptcode + ""
//window.location= deptcode
 

var is_protocol_ok=deptcode.indexOf('http://');
var is_dot_ok=deptcode.indexOf('.');
if ((is_protocol_ok==-1) || (is_dot_ok==-1))
 { 
  	//alert('Thanks!');
 	window.location=deptcode

 }
else
	window.open(deptcode);
}


//-----------------

document.write('<FORM onSubmit="" action=--WEBBOT-SELF-- method=POST style="margin: 0" name="dpt">\
				 <select name="nd" onchange="sendme()" class="selectbox">');
document.write('<option selected>Other Departments</option> \
															<option value="dept_agri.htm">Agriculture</option> \
															<option value="http://chdanimalhusbandry.gov.in">Animal Husbandary</option> \
															<option value="http://chdctu.gov.in">Chandigarh Transport Undertaking</option> \
															<option value="http://chdeducation.gov.in">Education</option> \
															<option value="http://ceochandigarh.nic.in">Election</option> \
															<option value="dept_emp.htm">Employment </option> \
															<option value="dept_engg.htm">Engineering </option> \
															<option value="http://chandigarhenvis.gov.in/">Environment</option> \
															<option value="how_know-prop.htm">Estate Office</option> \
															<option value="dept_excise.htm">Excise & Taxation </option> \
															<option value="dept_fin.htm">Finance </option> \
															<option value="dept_fish.htm">Fisheries </option> \
															<option value="http://chdfood.gov.in/">Food & Supplies </option> \
															<option value="dept_forest.htm">Forests & Wild Life </option> \
															<option value="dept_hlt.htm">Health </option> \
															<option value="dept_home.htm">Home </option> \
															<option value="http://admser.chd.nic.in/hac">House Allotment Committee </option>\
															<option value="dept_ind.htm">Industries </option> \
															<option value="dept_labour.htm">Labour</option> \
															<option value="dept_law.htm">Law & Prosecution</option> \
															<option value="http://nrhmchd.gov.in">National Rural Health Mission</option> \
															<option value="dept_pers.htm">Personnel</option> \
															<option value="http://chandigarhpolice.gov.in">Police</option> \
															<option value="dept_pca.htm">Police Complaints Authority</option> \
															<option value="dept_print.htm">Printing & Stationery </option> \
															<option value="http://chdpr.gov.in/">Public Relations & Cultural affairs</option> \
															<option value="http://chdruraldevelopment.gov.in">Rural Development & Panchayat</option> \
															<option value="dept_snt.htm">Science & Technology</option> \
															<option value="dept_sports.htm">Sports & Youth </option> \
															<option value="dept_social.htm">Social Welfare </option> \
															<option value="dept_sec.htm">State Election Commission </option> \
															<option value="http://chdtechnicaleducation.gov.in">Technical Education</option> \
															<option value="http://chdtransport.gov.in">Transport </option> \
															<option value="http://chandigarhtourism.gov.in">Tourism </option> \
															<option value="dept_urban.htm">Urban Planning </option> \
															<option value="dept_vgl.htm">Vigilance </option> \
															<option value="dept_weight.htm">Weights & Measures </option>\
															<option value="http://chandigarhsainikwelfare.org">Zila Sainik Welfare Office</option></ </select> </Form> ');



/*
// JavaScript Document
document.write('<table width="100%" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr><td valign="top" height="43" width="10" class="dept_left_bg"></td>');
document.write('<td valign="middle" height="43" width="690" class="dept_mid_bg"><a href="dept_index.htm" class="white_heading3">Departments</a></td><td valign="top" height="43" width="10" class="dept_right_bg"></td></tr>');
document.write('<tr> <td height="7" colspan="3" valign="top"><img src="graphics/dept_downarrow.gif" width="24" height="7"></td></tr><tr> <td colspan="3">');
document.write('<table width="690" border="0" align="center" cellspacing="0" cellpadding="0">');
document.write('<tr> <td valign="top" colspan="11" height="6"></td></tr>');
document.write('<tr> <td valign="top" width="108" class="common_text" align="center"><img src="graphics/dept_1.jpg" width="100" height="50" alt="Municipal Corporation" title="Municipal Corporation"><br><br><a href="http://mcchandigarh.nic.in/" target="_blank" class="common_text">Municipal Corporation</a></td> \
					 <td valign="top" width="1"><img src="graphics/chdadmin_inimg_seperator_24.gif" width="1" height="96"></td><td valign="top" align="center" width="116" class="common_text"><img src="graphics/dept_2.jpg" width="100" height="50" alt="Estate Office" title="Estate Office"><br><br><a href="http://www.sampada.in/" target="_blank" class="common_text">Estate Office</a></td> \
					 <td valign="top" width="1"><img src="graphics/chdadmin_inimg_seperator_24.gif" width="1" height="96"></td><td valign="top" align="center" width="116" class="common_text"><img src="graphics/dept_3.jpg" width="100" height="50" alt="Information Technology" title="Information Technology"><br><br><a href="http://chdit.nic.in/" target="_blank" class="common_text">Information Technology</a></td> \
					 <td valign="top" width="1"><img src="graphics/chdadmin_inimg_seperator_24.gif" width="1" height="96"></td><td valign="top" align="center" width="116" class="common_text"><img src="graphics/dept_4.jpg" width="100" height="50" alt="Tourism" title="Tourism"><br><br><a href="http://www.chandigarhtourism.gov.in/" target="_blank" class="common_text">Tourism</a></td> \
					 <td valign="top" width="1"><img src="graphics/chdadmin_inimg_seperator_24.gif" width="1" height="96"></td><td valign="top" align="center" width="116" class="common_text"><img src="graphics/dept_5.jpg" width="100" height="50" alt="Transport" title="Transport"><br><br><a href="http://chdtransport.gov.in/" target="_blank" class="common_text">Transport</a></td> \
					 <td valign="top" width="1"><img src="graphics/chdadmin_inimg_seperator_24.gif" width="1" height="96"></td><td valign="top" align="center" width="116" class="common_text"><img src="graphics/dept_6.jpg" width="100" height="50" alt="Disttrict Court" title="District Court"><br><br><a href="http://chddistrictcourts.gov.in/" target="_blank" class="common_text">District Courts</a></td></tr>');
document.write('<tr><td colspan="11" height="6"></td></tr><tr><td colspan="11" height="6" align="right">');
document.write('<FORM onSubmit="location.href=\'_derived/nortbots.htm\';return false;" action=--WEBBOT-SELF-- method=POST WEBBOT-onSubmit style="margin: 0" target="_blank"> <select onchange=window.location=this.form.rs1.options[selectedIndex].value name="rs1" id="select1" class="selectbox">');
document.write('<option selected>Other Departments</option> \
															<option value="dept_agri.htm">Agriculture</option> \
															<option value="http://chandigarh.gov.in/animal_hus/welcome.html">Animal Husbandary</option> \
															<option value="http://chdeducation.gov.in">Education</option> \
															<option value="http://ceochandigarh.nic.in">Election</option> \
															<option value="dept_emp.htm">Employment </option> \
															<option value="dept_engg.htm">Engineering </option> \
															<option value="dept_env.htm">Environment</option> \
															<option value="http://sampada.in">Estate Office</option> \
															<option value="dept_excise.htm">Excise & Taxation </option> \
															<option value="dept_fin.htm">Finance </option> \
															<option value="dept_fish.htm">Fisheries </option> \
															<option value="dept_food.htm">Food & Supplies </option> \
															<option value="dept_forest.htm">Forests & Wild Life </option> \
															<option value="dept_hlt.htm">Health </option> \
															<option value="dept_home.htm">Home </option> \
															<option value="dept_ind.htm">Industries </option> \
															<option value="dept_labour.htm">Labour</option> \
															<option value="dept_law.htm">Law & Prosecution</option> \
															<option value="dept_pers.htm">Personnel</option> \
															<option value="http://chandigarhpolice.gov.in">Police</option> \
															<option value="dept_print.htm">Printing & Stationery </option> \
															<option value="http://chdpr.gov.in">Public Relations & Cultural affairs</option> \
															<option value="dept_sports.htm">Sports & Youth </option> \
															<option value="dept_social.htm">Social Welfare </option> \
															<option value="dept_techedu.htm">Technical Education</option> \
															<option value="dept_tpt.htm">Transport </option> \
															<option value="dept_urban.htm">Urban Planning </option> \
															<option value="dept_vgl.htm">Vigilance </option> \
															<option value="dept_weight.htm">Weights & Measures </option>\
															<option value="dept_zsw.htm">Zila Sainik Welfare Office</option></ </select> </Form> ');

document.write('</td></tr><tr><td colspan="11" height="6"></td></tr></table>');
document.write('</td></tr><tr> <td valign="top" colspan="3" height="5" class="dept_mid_bg"></td></tr></table>');

*/
