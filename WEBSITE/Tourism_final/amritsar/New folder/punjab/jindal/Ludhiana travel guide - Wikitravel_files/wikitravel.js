function read_cookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


//hotel ad stuff.
function findElementTop(obj) {
  curtop = 0;
  if (obj.offsetParent) {
    while (obj.offsetParent) {
      curtop += obj.offsetTop;
      obj = obj.offsetParent;
    }
  } //if offsetParent exists
  else if (obj.y) {
    curtop += obj.y
  }

  return curtop;
}//findElementPosY

function are_ads_hidden(prefix) {
  var result = read_cookie(prefix + "HideAds");
  return result;
}

function wtIsLoggedIn(prefix)
{
  return (read_cookie(prefix + '_session') &&
    read_cookie(prefix + 'UserID') &&
    read_cookie(prefix + 'UserName'));
}
             


function getSleepsAnchor() {
  for (var i = 0; i < document.anchors.length; i++) {
    if(document.anchors[i].name.toLowerCase() == 'sleep') {
      return document.anchors[i];
    }
  }
  return null;
}

function spaceHotelAd() {
  var sleep = getSleepsAnchor();
  if(!sleep) {
    return;
  }
  var adSpacer = document.getElementById('hotelAdSpacer');
  var adBlock = document.getElementById('hotelAdBlock');
  if(!adBlock || !adSpacer) {
    return;
  }

/*
  sleeptop = findElementTop(sleep);
  adtop = findElementTop(adSpacer);

  if(adtop < sleeptop) {
    var space = sleeptop - adtop;
    adSpacer.style.marginTop =  space + 'px';
  }
*/

  adBlock.style.display = 'block';
}



function handleAds(prefix) {
  if(are_ads_hidden(prefix)) {
    var adColumn = document.getElementById('adTableCell');
    if(adColumn) {
      adColumn.style.display = 'none';
    }
    return;
  }

  spaceHotelAd();
}
