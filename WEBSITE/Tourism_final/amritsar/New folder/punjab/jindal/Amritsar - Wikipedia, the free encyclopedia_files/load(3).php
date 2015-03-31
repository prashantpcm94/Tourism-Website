mw.loader.using(['mediawiki.util','mediawiki.notify','jquery.client'],function(){if(mw.config.get('wgPageName')==='Main_Page'||mw.config.get('wgPageName')==='Talk:Main_Page'){$(function(){mw.util.addPortletLink('p-lang','//meta.wikimedia.org/wiki/List_of_Wikipedias','Complete list','interwiki-completelist','Complete list of Wikipedias');});}if(mw.config.get('wgArticleId')===0&&mw.config.get('wgNamespaceNumber')===2){var titleParts=mw.config.get('wgPageName').split('/');if(titleParts.length==2){var userSkinPage=titleParts.shift()+'/'+mw.config.get('skin');if(titleParts.slice(-1)=='skin.js'){window.location.href=mw.util.getUrl(userSkinPage+'.js');}else if(titleParts.slice(-1)=='skin.css'){window.location.href=mw.util.getUrl(userSkinPage+'.css');}}}mw.log.deprecate(window,'addPortletLink',function(){return mw.util.addPortletLink.apply(mw.util,arguments);},'Use mw.util.addPortletLink() instead');mw.log.deprecate(window,'getURLParamValue',function(){return mw.util.getParamValue.apply(mw.
util,arguments);},'Use mw.util.getParamValue() instead');mw.log.deprecate(window,'hasClass',function(element,className){return $(element).hasClass(className);},'Use jQuery.hasClass() instead');var extraCSS=mw.util.getParamValue('withCSS');if(extraCSS){if(extraCSS.match(/^MediaWiki:[^&<>=%#]*\.css$/)){importStylesheet(extraCSS);}else{mw.notify('Only pages from the MediaWiki namespace are allowed.',{title:'Invalid withCSS value'});}}var extraJS=mw.util.getParamValue('withJS');if(extraJS){if(extraJS.match(/^MediaWiki:[^&<>=%#]*\.js$/)){importScript(extraJS);}else{mw.notify('Only pages from the MediaWiki namespace are allowed.',{title:'Invalid withJS value'});}}if(mw.config.get('wgAction')==='edit'||mw.config.get('wgAction')==='submit'||mw.config.get('wgCanonicalSpecialPageName')==='Upload'){importScript('MediaWiki:Common.js/edit.js');}else if(mw.config.get('wgCanonicalSpecialPageName')==='Watchlist'){importScript('MediaWiki:Common.js/watchlist.js');}if(mw.config.get('wgNamespaceNumber')
===6){importScript('MediaWiki:Common.js/file.js');}if($.client.profile().name==='msie'){importScript('MediaWiki:Common.js/IEFixes.js');}if(navigator.appVersion.search(/windows nt 5/i)!==-1){mw.util.addCSS('.IPA { font-family: "Lucida Sans Unicode", "Arial Unicode MS"; } '+'.Unicode { font-family: "Arial Unicode MS", "Lucida Sans Unicode"; } ');}(function(){var require_wikiminiatlas=false;var coord_filter=/geohack/;$(function(){$('a.external.text').each(function(key,link){if(link.href&&coord_filter.exec(link.href)){require_wikiminiatlas=true;return false;}});if($('div.kmldata').length){require_wikiminiatlas=true;}if(require_wikiminiatlas){mw.loader.load('//meta.wikimedia.org/w/index.php?title=MediaWiki:Wikiminiatlas.js&action=raw&ctype=text/javascript');}});})();function LinkFA(){if(document.getElementById('p-lang')){var InterwikiLinks=document.getElementById('p-lang').getElementsByTagName('li');for(var i=0;i<InterwikiLinks.length;i++){var className=InterwikiLinks[i].className.match(
/interwiki-[-\w]+/);if(document.getElementById(className+'-fa')){InterwikiLinks[i].className+=' FA';InterwikiLinks[i].title='This is a featured article in this language.';}else if(document.getElementById(className+'-ga')){InterwikiLinks[i].className+=' GA';InterwikiLinks[i].title='This is a good article in this language.';}}}}mw.hook('wikipage.content').add(LinkFA);var autoCollapse=2;var collapseCaption='hide';var expandCaption='show';function collapseTable(tableIndex){var Button=document.getElementById('collapseButton'+tableIndex);var Table=document.getElementById('collapsibleTable'+tableIndex);if(!Table||!Button){return false;}var Rows=Table.rows;var i;if(Button.firstChild.data===collapseCaption){for(i=1;i<Rows.length;i++){Rows[i].style.display='none';}Button.firstChild.data=expandCaption;}else{for(i=1;i<Rows.length;i++){Rows[i].style.display=Rows[0].style.display;}Button.firstChild.data=collapseCaption;}}function createClickHandler(tableIndex){return function(e){e.preventDefault();
collapseTable(tableIndex);};}function createCollapseButtons(){var tableIndex=0;var NavigationBoxes={};var Tables=document.getElementsByTagName('table');var i;for(i=0;i<Tables.length;i++){if($(Tables[i]).hasClass('collapsible')){var HeaderRow=Tables[i].getElementsByTagName('tr')[0];if(!HeaderRow){continue;}var Header=HeaderRow.getElementsByTagName('th')[0];if(!Header){continue;}NavigationBoxes[tableIndex]=Tables[i];Tables[i].setAttribute('id','collapsibleTable'+tableIndex);var Button=document.createElement('span');var ButtonLink=document.createElement('a');var ButtonText=document.createTextNode(collapseCaption);Button.className='collapseButton';ButtonLink.style.color=Header.style.color;ButtonLink.setAttribute('id','collapseButton'+tableIndex);ButtonLink.setAttribute('href','#');$(ButtonLink).on('click',createClickHandler(tableIndex));ButtonLink.appendChild(ButtonText);Button.appendChild(document.createTextNode('['));Button.appendChild(ButtonLink);Button.appendChild(document.
createTextNode(']'));Header.insertBefore(Button,Header.firstChild);tableIndex++;}}for(i=0;i<tableIndex;i++){if($(NavigationBoxes[i]).hasClass('collapsed')||(tableIndex>=autoCollapse&&$(NavigationBoxes[i]).hasClass('autocollapse'))){collapseTable(i);}else if($(NavigationBoxes[i]).hasClass('innercollapse')){var element=NavigationBoxes[i];while((element=element.parentNode)){if($(element).hasClass('outercollapse')){collapseTable(i);break;}}}}}mw.hook('wikipage.content').add(createCollapseButtons);var NavigationBarHide='['+collapseCaption+']';var NavigationBarShow='['+expandCaption+']';window.toggleNavigationBar=function(indexNavigationBar,event){var NavToggle=document.getElementById('NavToggle'+indexNavigationBar);var NavFrame=document.getElementById('NavFrame'+indexNavigationBar);var NavChild;if(!NavFrame||!NavToggle){return false;}if(NavToggle.firstChild.data===NavigationBarHide){for(NavChild=NavFrame.firstChild;NavChild!=null;NavChild=NavChild.nextSibling){if($(NavChild).hasClass(
'NavContent')||$(NavChild).hasClass('NavPic')){NavChild.style.display='none';}}NavToggle.firstChild.data=NavigationBarShow;}else if(NavToggle.firstChild.data===NavigationBarShow){for(NavChild=NavFrame.firstChild;NavChild!=null;NavChild=NavChild.nextSibling){if($(NavChild).hasClass('NavContent')||$(NavChild).hasClass('NavPic')){NavChild.style.display='block';}}NavToggle.firstChild.data=NavigationBarHide;}event.preventDefault();};function createNavigationBarToggleButton(){var indexNavigationBar=0;var NavFrame;var NavChild;var divs=document.getElementsByTagName('div');for(var i=0;(NavFrame=divs[i]);i++){if($(NavFrame).hasClass('NavFrame')){indexNavigationBar++;var NavToggle=document.createElement('a');NavToggle.className='NavToggle';NavToggle.setAttribute('id','NavToggle'+indexNavigationBar);NavToggle.setAttribute('href','#');$(NavToggle).on('click',$.proxy(window.toggleNavigationBar,window,indexNavigationBar));var isCollapsed=$(NavFrame).hasClass('collapsed');for(NavChild=NavFrame.
firstChild;NavChild!=null&&!isCollapsed;NavChild=NavChild.nextSibling){if($(NavChild).hasClass('NavPic')||$(NavChild).hasClass('NavContent')){if(NavChild.style.display==='none'){isCollapsed=true;}}}if(isCollapsed){for(NavChild=NavFrame.firstChild;NavChild!=null;NavChild=NavChild.nextSibling){if($(NavChild).hasClass('NavPic')||$(NavChild).hasClass('NavContent')){NavChild.style.display='none';}}}var NavToggleText=document.createTextNode(isCollapsed?NavigationBarShow:NavigationBarHide);NavToggle.appendChild(NavToggleText);for(var j=0;j<NavFrame.childNodes.length;j++){if($(NavFrame.childNodes[j]).hasClass('NavHead')){NavToggle.style.color=NavFrame.childNodes[j].style.color;NavFrame.childNodes[j].appendChild(NavToggle);}}NavFrame.setAttribute('id','NavFrame'+indexNavigationBar);}}}mw.hook('wikipage.content').add(createNavigationBarToggleButton);function uploadwizard_newusers(){if(mw.config.get('wgNamespaceNumber')===4&&mw.config.get('wgTitle')==='Upload'&&mw.config.get('wgAction')==='view')
{var oldDiv=document.getElementById('autoconfirmedusers'),newDiv=document.getElementById('newusers');if(oldDiv&&newDiv){var userGroups=mw.config.get('wgUserGroups');if(userGroups){for(var i=0;i<userGroups.length;i++){if(userGroups[i]==='autoconfirmed'){oldDiv.style.display='block';newDiv.style.display='none';return;}}}oldDiv.style.display='none';newDiv.style.display='block';return;}}}$(uploadwizard_newusers);function addEditIntro(name){$('.mw-editsection, #ca-edit').find('a').each(function(i,el){el.href=$(this).attr('href')+'&editintro='+name;});}if(mw.config.get('wgNamespaceNumber')===0){$(function(){if(document.getElementById('disambigbox')){addEditIntro('Template:Disambig_editintro');}});$(function(){var cats=document.getElementById('mw-normal-catlinks');if(!cats){return;}cats=cats.getElementsByTagName('a');for(var i=0;i<cats.length;i++){if(cats[i].title==='Category:Living people'||cats[i].title==='Category:Possibly living people'){addEditIntro('Template:BLP_editintro');break;}}});}
if(document.location&&document.location.protocol==='https:'){importScript('MediaWiki:Common.js/secure new.js');}});;mw.loader.state({"site":"ready"});
/* cache key: enwiki:resourceloader:filter:minify-js:7:4c9d323047ef8aac78dc130444df4b9f */