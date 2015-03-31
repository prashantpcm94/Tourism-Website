// ListingEditor.js
// For editing listings in-line

//this *must* be set by the calling page. Probably not the proper way to do it, but 
//doing it this way avoids a lot of extra verbiage into the edit calls.
var messages = null;

var listingForm = null;
//var current = null;

/*
  Configuration for the fields in the form editor.  
*/

var listingFields = {
  'name' : {'size':30},
  'alt' : {'size':30},
  'address' : {'size':30},
  'directions' : {'size':30},
  'phone' : {'size':12},
  'url' : {'size':30},
  'hours' : {'size':8},
  'checkin' : {'size':8},
  'checkout' : {'size':8},
//  'hoursextra' : {'size':20},
  'price' : {'size':8},
//  'priceextra' : {'size':20},
  'lat' : {'size':8},
  'long' : {'size':8},
  'description' : {'type':'textarea', 'rows':4, 'cols':70, 'value':''}
}


//config to extract data from the html format based on the classnames in 
//the various span (class value / field pairs)
var spanFields = 
  [['fn org', 'name'],
   ['nickname', 'alt'],
   ['street-address', 'address'],
   ['note directions', 'directions'],
   ['phone value', 'phone'],
   ['hours', 'hours'],
   ['checkin', 'checkin'],
   ['checkout', 'checkout'],
   ['price', 'price'],
   ['note priceextra', 'priceextra'],
   ['note hoursextra', 'hoursextra'],
   ['latitude', 'lat'],
   ['longitude', 'long'],
   ['description', 'description']];
var linkFields = [['url external autonumber', 'url']];


function getFields(tag) {
  /*
    Make a shallow copy of the listingFields.  We shouldn't
    need a deep copy since we don't intend to change any members,
    merely drop a few.
  */
  var copyListings = new Object();
  for(var field in listingFields) {
    copyListings[field] = listingFields[field];
  }

  if(tag == "sleep") {
    delete copyListings.hours;
    delete copyListings.hoursextra;
  }
  else {
    delete copyListings.checkin;
    delete copyListings.checkout;
  }
  return copyListings;
}

function addListing(addElement, sectionNumber, tagname, article) {
	  if (listingForm != null && listingForm.isValid()) {
	    return;
	  }
	 
	  var current = addElement.parentNode.parentNode;

	  var clientData = {"action":"add", "section":sectionNumber, "tagname":tagname, "original": current};
	 
	  var fields = getFields(tagname);
	  var initialValues = new Object();
	  var title = messages.getMessage("editor-title");
	  listingForm = new cListingEditForm(title, tagname, initialValues, fields, article);
	  if(jQuery.browser.msie && ((document.documentMode && document.documentMode < 9) || (document.documentMode == undefined))){
		//listingForm.positionAtElement(current.nextSibling);
                listingForm.positionAtElement(current);
	  }
	  else{
	  	//listingForm.positionAtElement(current.nextElementSibling);
                listingForm.positionAtElement(current);
	  }
	  listingForm.setSaveHandler(saveAddListing);
	  listingForm.setMessageHandler(new cAddMessageHandler(current));
	  listingForm.setClientData(clientData);
	  listingForm.show();


	}

function saveAddListing() {
  listingForm.clearSaveHandler();
  var form = listingForm.getForm();
  var data = listingForm.getClientData();
  
//  var tagname = form.tagname.value;
  var newValues = formToXml(form, data.tagname);
  
  var params = [data.tagname, data.section, form.article.value, newValues];
  var cb = makeAjaxResultsCallback(handleSaveAddListingResults, "Add", listingForm);

  var animationControl = new listingForm.getAnimationControl();
  doAjaxCall("wfListingEditorAddTag", params, cb, animationControl);
}

function handleSaveAddListingResults(response, formObj) {
  //add the html to the form.
  var div = document.createElement("div");
  div.innerHTML = response.result;

  //the parser on the server side will renumber the link incorrectly because
  //it lacks the context of where the link is on the page.  We fix it here.
  var data = listingForm.getClientData();
  if(data.original != null && div.firstChild) {
    var linkNew = getMainLink(div.firstChild);
    if(linkNew) {
      linkNew.innerHTML = "[new]"; 
    }
    
//    var contentDiv = $("bodyContent");
//    var elements = contentDiv.getElements(".editsection");
      var contentDiv = jQuery("#bodyContent");
      var elements = contentDiv.find('span.mw-headline');

    //look up the section in the dom
    var tagLabel = messages.getTag(data.tagname).toLowerCase();
    var index = false;
    for(i=0; i<elements.length; i++) {
      //var sectionAnchor = elements[i].nextElementSibling;
     //COMMEMTED
	 //console.log(sectionAnchor);
      var sectionName = elements[i].id;
      if(sectionName && sectionName.toLowerCase() == tagLabel) {
        index = i;
        break;
      }
    }

    if(!(index===false) && (index+1) < elements.length) {
      pos = elements[index+1].parentNode.previousElementSibling;
      $(div.firstChild).inject(pos, 'after');
    }
    else {
      $(div.firstChild).inject(contentDiv, 'bottom');
    }
  }

  formObj.deleteForm();
}

function findInsertionPoint(section) {
  var contentDiv = $("bodyContent");
  var elements = contentDiv.getElements(".editsection");
  
  var index = false;
  for(i=0; i<elements.length; i++) {
    var sectionAnchor = elements[i].parentNode.previousSibling;
    //console.log(sectionAnchor);
    var sectionName = sectionAnchor.name;
    if(sectionName && sectionName.toLowerCase() == section.toLowerCase()) {
      index = i;
      break;
    }
  }

  // console.log(false==0);
  // console.log(index);

  
  
}

function editListing(id, tagname, article) {
  if (listingForm != null && listingForm.isValid()) {
    return;
  }
  
  var listing = spanToListing(id);
  var current = $(id);

  var clientData = {"action":"add", "article":article, "tagname":tagname, "original": current};

  var fields = getFields(tagname);
  listingForm = new cListingEditForm(listing.name, tagname, listing, fields, article);
  listingForm.positionAtElement(current);
  listingForm.setSaveHandler(saveListing);
  listingForm.setMessageHandler(new cEditMessageHandler(current));
  listingForm.setClientData(clientData);

  var oldValues = formToXml(listingForm.getForm(), tagname, true);
  var params = [tagname, article, oldValues];
  
  var cb = makeAjaxResultsCallback(handleLookupContentResults, "Lookup", listingForm);
  doAjaxCall("wfListingGetTagContent", params, cb);
}

function handleLookupContentResults(response, formObj) {
  var form = formObj.getForm();
  form.description.value = response.result;
  form.description.defaultValue = response.result;
  formObj.show();
}

function saveListing() {
  listingForm.clearSaveHandler();
  var form = listingForm.getForm(); 
  var tagname = form.tagname.value;
  var newValues = formToXml(form, tagname);
  var oldValues = formToXml(form, tagname, true);

  var params = [tagname, form.article.value, newValues, oldValues];
  var cb = makeAjaxResultsCallback(handleSaveListingResults, "Save", listingForm);
  
  var animationControl = new listingForm.getAnimationControl();
  doAjaxCall("wfListingEditorSaveTag", params, cb, animationControl);
}

function handleSaveListingResults(response, formObj) {
  var div = document.createElement("div");
  div.innerHTML = response.result;

  //the parser on the server side will renumber the link incorrectly because
  //it lacks the context of where the link is on the page.  We fix it here.
  var data = listingForm.getClientData();
  if(data.original != null) {
    var linkOld = getMainLink(data.original);
    var linkNew = getMainLink(div.firstChild);

    if(linkOld && linkNew) {
      linkNew.innerHTML = linkOld.innerHTML;
    }
  
    if(div.firstChild) {
      data.original.parentNode.replaceChild(div.firstChild, data.original);  
    }
  }

  formObj.deleteForm();
}

/*
  A pretty basic xml representation since sajax doesn't appear to do any
  marshalling on its own
*/
function formToXml(form, tagname, useDefaults) {
  if(!useDefaults) {
    valueField = "value";
  }
  else {
    valueField = "defaultValue";
  }

  var xml = "<form>";
  var index;
 
  var i;
  var fields = getFields(tagname);
  for(field in fields) {
    var element = form.elements[field];
    var value = element[valueField];
    if(value) {
      value = "<![CDATA[" + value +  "]]>";
    }
    else {
      value = "";
    }
    xml += "<" + element.name + ">" + value + "</"  + element.name + ">\n";
  }

  xml += "</form>";
  return xml;
}

function delayedCallback(cb, delay) {
  return  function (result) {
    var f = function() {return cb(result)};
    setTimeout(f, delay);
  }
}

function doAjaxCall(serverFunction, params, cb, animationControl) {
  if(animationControl) {
    animationControl.start();
    cb = makeAnimationStopCallback(cb, animationControl);
  }

   //do a post without bugging anybody else
  var reqType = sajax_request_type;
  sajax_request_type = "POST";
  sajax_do_call(serverFunction, params, cb);
  sajax_request_type = reqType;
}

//wrap callback so that the animation is stoped on return.
function makeAnimationStopCallback(cb, animationControl) {
  return function (result) {
    animationControl.stop();
    return cb(result);
  }
}

function makeAjaxResultsCallback(handler, OpName, formObj) {
  return function (request) { 
    var response = request.responseText;
    if(!response) {
      formObj.deleteForm();
      return;
    }
    
    try {
      response = eval("(" + response + ")");
      if(response.message) {
        formObj.getMessageHandler().displayMessage(response.status, response.message); 
      }
    
      if(response.status == 0) {
        handler(response, formObj);
      }
      else {
        formObj.deleteForm();
      }
    }
    catch (e) {
      //console.log(request.responseText);
      //console.log(e);
      formObj.getMessageHandler().displayMessage(1, OpName + " failed. Invalid response from the server."); 
      formObj.deleteForm();
      return;
    }
  } 
}

function getMainLink(listing) {
  var links = listing.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) {
    var link = links.item(i);
    link.normalize();
    className = getClassName(link);
    if (className == "url external autonumber") {
      return link;
    }
  }

  return null;
}

function spanToListing(id) {

 var vcard = document.getElementById(id);
  if (!vcard) {
    //alert("Can't find listing element.");
    return;
  }

  var listing = new Object();
  var spans = vcard.getElementsByTagName('span');

  for (var i = 0; i < spans.length; i++) {
    var span = spans.item(i);
    span.normalize();
    className = getClassName(span);
    for (var j = 0; j < spanFields.length; j++) {
      if (className == spanFields[j][0]) {
        listing[spanFields[j][1]] = span.innerHTML;
      }
    }
  }

  var links = vcard.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) {
    var link = links.item(i);
    link.normalize();
    className = getClassName(link);
    for (var j = 0; j < linkFields.length; j++) {
      if (className == linkFields[j][0]) {
        listing[linkFields[j][1]] = link.getAttribute('href');
      }
    }
  }
     
  return listing;
}

function getClassName(element) {
    className = element.getAttribute("class");
    if (!className) {
         className = element.getAttribute("className");
    }
    return className;
}

function GeoLookup() {
  if(!lookup) {
    lookup = new cGeoLookup("", GeoLookupResults);
  }
  lookup.setPosition($(current).getLeft(), $(current).getTop());
  lookup.open({'address':'foo', 'latitude':4, 'longitude':5});
}

function GeoLookupResults(result) {
  // console.log(result);
  lookup.hide();
}



var cMessageHandler = new Class({
  initialize : function (locatorElement) {
    this.locatorElement = locatorElement;
  },

  displayMessage : function (status, message) {
    alert("displayMessage not implemented for base class");  
  },

  createMessageNode : function (status, message) {
    var text = message + "&nbsp;<span class='dismiss'>dismiss</span>";

    var div = document.createElement("div");
    div.innerHTML = text;
    div.onclick = function() {
      div.parentNode.removeChild(div);
    }
   
    var classname = "message";
    if(status != 0) {
      classname = "error-message";
    }
    div.className = classname;
    return div;
  }
});


//var cEditMessageHandler = cMessageHandler.extend({
var cEditMessageHandler = new Class({
  Extends:cMessageHandler,
  initialize : function (locatorElement) {
    this.parent(locatorElement);
  },

  displayMessage : function(status, message) {
    var node = this.createMessageNode(status, message);
    $(node).injectBefore(this.locatorElement);
  }

});


//var cAddMessageHandler = cMessageHandler.extend({
var cAddMessageHandler = new Class ({
  Extends:cMessageHandler,
  initialize : function (locatorElement) {
    this.parent(locatorElement);
  },

  displayMessage : function(status, message) {
    var node = this.createMessageNode(status, message);
    $(node).injectAfter(this.locatorElement);
  }
});


var cListingEditForm = new Class({
  initialize : function(title, tagname, listing, fields, article) {
    this.form = this.createForm(title, tagname, listing, fields, article);
    this.saveAnimation = null;
    this.clientData = null;
  
    var body = document.getElementsByTagName("body")[0];
    this.form.injectTop(body);
  },


  /*
    We have a bunch of information we need to track through a maze of events and
    ajax callbacks.  Instead of rigorously using closures to pass the values 
    through to the various places that need them (which has some implications
    for the readability and performace of the code) I'm using a single global 
    variable to hold the state (and ensure there is only one "I'm done call"
    that needs to be honored).
    
    The form object became the "global state" object when I wasn't looking.
  
    We should create an explicit global state object to hold these values and
    the form as well (and having the primary "delete" function be a method of that).
    However, I've already spent more time refactoring this than I have, so it stays.
    
  */
  setClientData : function(data) {
    this.clientData = data;
  },

  getClientData : function () {
    return this.clientData;
  },


  setMessageHandler : function(handler) {
    this.messageHandler = handler;
  },

  getMessageHandler : function() {
    return this.messageHandler;
  },

  /*  
    End extra
  */


  deleteForm : function () {
    var parent = this.form.parentNode;
    parent.removeChild(this.form); 
    
    this.form = null;
    this.saveAnimation = null;
    
    //clean up "extra" fields
    this.clientData = null;
    this.messageHandler = null;

    return false;
  },
 
  positionAtElement : function (element) {
    //console.log($(element));
    //console.log(element);
    //console.log(element.id);
    //return;
    var coords = $(element).getCoordinates();
    this.form.style.top = coords.top + "px";
    this.form.style.left = coords.left + "px";
    //this.form.style.top = element.getTop() + "px";
    //this.form.style.left = element.getLeft() + "px";
  },
 
  show : function() {
    this.form.style.visibility = "visible";
  },

  hide : function () {
    this.form.style.visibility =  "hidden";
  },

  getForm : function () {
    return this.form;
  },

  setSaveHandler : function(handler) {
    var saveButton = document.getElementById("button-save");
    saveButton.onclick = handler;
  },

  clearSaveHandler : function() {
    var saveButton = document.getElementById("button-save");
    saveButton.onclick = null; 
  },

  getAnimationControl : function () {
    if(!this.saveAnimation) {
      this.saveAnimation = new cSaveAnimation("savingText");
    }
    return this.saveAnimation;
  },

  isValid : function () {
    return this.form != null
  },

  createForm : function (title, tagname, listing, fields, article) {
    var form = document.createElement('form');
    form.style.visibility =  "hidden";
    var formid = 'listing_edit_form';
    form.setAttribute('id', formid);
    form.className = "listingform";
  
    var titlebar = document.createElement('div');
    titlebar.className = "listingTitleBar";
    titlebar.setAttribute("id", "listingTitleBar");
    form.appendChild(titlebar);

    var body = document.createElement('div');
    body.className = "listingFormBody";
    form.appendChild(body);
   
    for (field in fields) {
      options = fields[field];
      
      //allow fields to be overridden by a static value... for example the 
      //description which is looked up in a later ajax call
      var value = options.value;
      if(!value) {
        value = listing[field];
      }
     
      if (options.type == 'textarea') {
        var textarea = this.listingTextArea(field, value, options);
        this.addClear(body);
        body.appendChild(textarea);
      } 
      //assume text
      else {    
        var input = this.listingTextInput(field, value, options);
        body.appendChild(input);
      }
    }
   
    this.addClear(body);
    body.appendChild(this.listingHidden('tagname', tagname));
    body.appendChild(this.listingHidden('article', article));
    body.appendChild(this.makeLinkButton('button-save', messages.getMessage('save'), null));
    body.appendChild(document.createTextNode(' '));
    body.appendChild(this.makeLinkButton('button-cancel', 
      messages.getMessage('cancel'), this.deleteForm.bind(this)));

  //  body.appendChild(document.createTextNode(' '));
  //  body.appendChild(listingA('button-save', 'lookup', "GeoLookup()"));

    var savingText  = document.createElement('span');
    savingText.setAttribute("id", "savingText");
    body.appendChild(savingText);

    //titlebar.appendChild(document.createTextNode(title));
    titlebar.innerHTML = title;
    $(form).makeDraggable({handle:$(titlebar)});
    
    return form;
  },

  addClear : function(parent) {
    br = document.createElement('br');
    br.setAttribute('clear', 'all');
    parent.appendChild(br);
  },

  listingTextInput : function(name, value, options) {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', name);
    input.setAttribute('id', name);
    input.setAttribute('value', (value == null) ? '' : value);
    //explicitly set to make IE happy
    input.setAttribute('defaultValue', (value == null) ? '' : value);
    input.setAttribute('size', options.size);

    return this.listingInput(name, input);
  },

  listingTextArea : function(name, value, options) {
    //for some freakish reason IE will not let me set the name attribute of the
    //text area via the DOM functions.  This works around that little quirk.
    var dummy = document.createElement('div');
    dummy.innerHTML = "<textarea name='" + name + "'></textarea>";
    var textarea = dummy.firstChild;
    
    textarea.setAttribute('cols', options.cols);
    textarea.setAttribute('rows', options.rows);
    textarea.appendChild(document.createTextNode((value == null) ? '' : value));
    
    return this.listingInput(name, textarea);
  },

  listingInput : function(name, element) {
    var div = document.createElement('div');
    div.setAttribute('class', 'form-edit-input');
    div.setAttribute('className', 'form-edit-input');

    var label = document.createElement('label');
    //label.appendChild(document.createTextNode(messages.getAttr(name)));
    label.innerHTML = messages.getAttr(name);
    label.setAttribute('for', name);

    div.appendChild(label);
    div.appendChild(document.createElement('br'));
    div.appendChild(element);
    return div;
  },

  listingHidden : function(name, value) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', name);
    input.setAttribute('id', name);
    input.setAttribute('value', value);
    return input;
  },

  makeLinkButton : function (id, text, onclick) {
    var a = document.createElement('a');
    a.setAttribute('href', 'javascript:void(0)');
    a.setAttribute('title', text);
    a.setAttribute('id', id);
    a.className = 'form-edit-button';
    a.onclick = onclick;
//    a.appendChild(document.createTextNode(text));
    a.innerHTML = text;
    return a;
  }


});

var cSaveAnimation = new Class({

  initialize : function(targetID) {
    this.target = $(targetID);
    this.maxCount = 10;
    this.interval = 500;
    this.text = messages.getMessage("saving");
    this.counter = 0;
    this.timerID = null;
  },

  start : function() {
    if(!this.timerID) {
      this.count();
      this.timerID = setInterval(this.count.bind(this), this.interval);
    }
  },

  stop : function() {
    clearInterval(this.timerID);
    this.target.innerHTML = "";
    this.counter = 0;
    this.timerID = null;
  },

  count : function() {
    var out = this.text;
    for(var i = 0; i < this.counter; i++) {
      out += ".";
    }

    this.target.innerHTML = out;
    this.counter = (this.counter + 1) % this.maxCount;
  }
});

var cListingMessages = new Class({
  initialize : function(map) {
    this.messages = map;
  },

  getTag : function(key) {
    return this.messages["tag-" + key]; 
  },

  getAttr : function(key) {
    return this.messages["attr-" + key]; 
  },
  
  getMessage : function (key) {
    return this.messages["msg-" + key];
  }
});

// var $ = document.id;
