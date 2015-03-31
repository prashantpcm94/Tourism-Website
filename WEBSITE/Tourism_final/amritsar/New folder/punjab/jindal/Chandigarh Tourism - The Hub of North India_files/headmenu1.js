function mmLoadMenus() {
  if (window.mm_menu_city) return;
  window.mm_menu_city = new Menu("root",140,24,"Arial, Helvetica, sans-serif",13,"#669933","#FFFFFF","#FFFFCC","#669933","left","middle",3,0,800,-5,7,true,false,true,2,true,false);
  mm_menu_city.addMenuItem("The Architect","window.open('images/Le.pdf', '_blank');");
  mm_menu_city.addMenuItem("At a Glance","window.open('Chandigarh Tourism - places to see-at_a_glance.htm', '_self');");
  mm_menu_city.addMenuItem("History","window.open('Chandigarh Tourism - history.htm', '_self');");
  mm_menu_city.addMenuItem("Administration","window.open('http://chandigarh.gov.in', '_blank');");
  mm_menu_city.addMenuItem("Information Technology","window.open('http://chdit.nic.in', '_blank');");
  mm_menu_city.addMenuItem("Art & Culture","window.open('Chandigarh Tourism - art&culture.htm', '_self');");
  /*mm_menu_city.addMenuItem("Information Brochure","window.open('images/boards.pdf', '_blank');");*/
  /*mm_menu_city.addMenuItem("Tourism Video","window.open('video.htm', '_self');");*/
 
   mm_menu_city.hideOnMouseOut=true;
   mm_menu_city.bgColor='#555555';
   mm_menu_city.menuBorder=1;
   mm_menu_city.menuLiteBgColor='#FFFFFF';
   mm_menu_city.menuBorderBgColor='#000000';


  window.mm_menu_reach = new Menu("root",113,24,"Arial, Helvetica, sans-serif",13,"#669933","#FFFFFF","#FFFFCC","#669933","left","middle",3,0,800,-5,7,true,false,true,2,true,false);
  mm_menu_reach.addMenuItem("By Air","window.open('Chandigarh Tourism - hot to rch air.htm', '_self');");
  mm_menu_reach.addMenuItem("By Rail","window.open('Chandigarh Tourism - hot to rch rail.htm', '_self');");
  mm_menu_reach.addMenuItem("By Road","window.open('Chandigarh Tourism - hot to rch road.htm', '_self');");
   mm_menu_reach.hideOnMouseOut=true;
   mm_menu_reach.bgColor='#555555';
   mm_menu_reach.menuBorder=1;
   mm_menu_reach.menuLiteBgColor='#FFFFFF';
   mm_menu_reach.menuBorderBgColor='#777777';


  window.mm_menu_stay = new Menu("root",210,24,"Arial, Helvetica, sans-serif",13,"#669933","#FFFFFF","#FFFFCC","#669933","left","middle",3,0,800,-5,7,true,false,true,2,true,false);
 mm_menu_stay.addMenuItem("CITCO Hotels","window.open('http://www.citcochandigarh.com/', '_blank');");
  mm_menu_stay.addMenuItem("Hotels","window.open('Chandigarh Tourism - stay-hotels.htm', '_self');");
  /*mm_menu_stay.addMenuItem("Guest Houses","window.open('Chandigarh Tourism - stay-guest-house.htm', '_self');");*/
  /*mm_menu_stay.addMenuItem("Budget Accommodation","window.open('Chandigarh Tourism - stay-budget-accomodation.htm', '_self');");*/
   

   mm_menu_stay.hideOnMouseOut=true;
   mm_menu_stay.bgColor='#555555';
   mm_menu_stay.menuBorder=1;
   mm_menu_stay.menuLiteBgColor='#FFFFFF';
   mm_menu_stay.menuBorderBgColor='#777777';


  

  
  window.mm_menu_info = new Menu("root",130,24,"Arial, Helvetica, sans-serif",13,"#669933","#FFFFFF","#FFFFCC","#669933","left","middle",3,0,800,-5,7,true,false,true,2,true,false);
mm_menu_info.addMenuItem("Tourist Guides","window.open('Chandigarh Tourism - Guides.htm', '_self');");  
mm_menu_info.addMenuItem("Information Centres","window.open('Chandigarh Tourism - info_centre.htm', '_self');");
  mm_menu_info.addMenuItem("Local Transport","window.open('Chandigarh Tourism - local_transportation.htm', '_self');");
  mm_menu_info.addMenuItem("Events","window.open('calendar.pdf', '_blank');");
  /*mm_menu_info.addMenuItem("AC Taxies","window.open('taxies.htm', '_self');");*/
  mm_menu_info.addMenuItem("Shopping","window.open('Chandigarh Tourism - shopping&entermnt.htm', '_self');");
  /*mm_menu_info.addMenuItem("Souvenirs","window.open('souvenirs.htm', '_self');");*/
  
   mm_menu_info.hideOnMouseOut=true;
   mm_menu_info.bgColor='#555555';
   mm_menu_info.menuBorder=1;
   mm_menu_info.menuLiteBgColor='#FFFFFF';
   mm_menu_info.menuBorderBgColor='#777777';

  window.mm_menu_north = new Menu("root",130,24,"Arial, Helvetica, sans-serif",13,"#669933","#FFFFFF","#FFFFCC","#669933","left","middle",3,0,800,-5,7,true,false,true,2,true,false);
  mm_menu_north.addMenuItem("Punjab","window.open('Chandigarh Tourism -northindia-punjab.htm', '_self');");
  mm_menu_north.addMenuItem("Haryana","window.open('Chandigarh Tourism -northindia-haryana.htm', '_self');");
  mm_menu_north.addMenuItem("Himachal Pradesh","window.open('Chandigarh Tourism -northindia-himachal.htm', '_self');");
  /*mm_menu_north.addMenuItem("CITCO","window.open('http://www.citcochandigarh.com/', '_blank');");*/
   mm_menu_north.hideOnMouseOut=true;
   mm_menu_north.bgColor='#555555';
   mm_menu_north.menuBorder=1;
   mm_menu_north.menuLiteBgColor='#FFFFFF';
   mm_menu_north.menuBorderBgColor='#777777';

mm_menu_north.writeMenus();
} // mmLoadMenus()