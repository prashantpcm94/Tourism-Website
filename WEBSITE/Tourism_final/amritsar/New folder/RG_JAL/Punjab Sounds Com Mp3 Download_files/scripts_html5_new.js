var activeSong;
var canPlayMp3ViaHtml5 = canPlayMp3();
var html5_audio_player;
var firstPlayerLoad = true;
//Plays the song. Just pass the id of the audio element.
function play(id){
    //Sets the active song to the song being played.  All other functions depend on this.
    activeSong = document.getElementById(id);
    //Plays the song defined in the audio tag.
    activeSong.play();
    
    //Calculates the starting percentage of the song.
    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;
    
    //Fills out the volume status bar.
    document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}
//Pauses the active song.
function pause(){
    activeSong.pause();
}
//Does a switch of the play/pause with one button.
function playPause(id){
    //Sets the active song since one of the functions could be play.
    activeSong = document.getElementById(id);
    //Checks to see if the song is paused, if it is, play it from where it left off otherwise pause it.
	var playPauseDiv = document.getElementById('songPlayPause');
    if (activeSong.paused){
		playPauseDiv.className = 'playing';
		activeSong.play();
    }else{
		playPauseDiv.className = '';
		activeSong.pause();
    }
}

//Updates the current time function so it reflects where the user is in the song.
//This function is called whenever the time is updated.  This keeps the visual in sync with the actual time.
function updateTime(){
	if(!activeSong) {
		return;
	}
	
    var currentSeconds = (Math.floor(activeSong.currentTime % 60) < 10 ? '0' : '') + Math.floor(activeSong.currentTime % 60);
    var currentMinutes = Math.floor(activeSong.currentTime / 60);
    
	//Sets the current song location compared to the song duration.
	if(!document.getElementById('songTime')) { return; }
    document.getElementById('songTime').innerHTML = currentMinutes + ":" + currentSeconds;
    
    //document.getElementById('songTime').innerHTML = currentMinutes + ":" + currentSeconds + ' / ' + Math.floor(activeSong.duration / 60) + ":" + (Math.floor(activeSong.duration % 60) < 10 ? '0' : '') + Math.floor(activeSong.duration % 60);

    //Fills out the slider with the appropriate position.
    var percentageOfSong = (activeSong.currentTime/activeSong.duration);
    var percentageOfSlider = document.getElementById('songSlider').offsetWidth * percentageOfSong;
    
    //Updates the track progress div.
    document.getElementById('trackProgress').style.width = Math.round(percentageOfSlider) + "px";
}
function volumeUpdate(number){
    //Updates the volume of the track to a certain number.
    activeSong.volume = number / 100;
}
//Changes the volume up or down a specific number
function changeVolume(number, direction){
    //Checks to see if the volume is at zero, if so it doesn't go any further.
    if(activeSong.volume >= 0 && direction == "down"){
        activeSong.volume = activeSong.volume - (number / 100);
    }
    //Checks to see if the volume is at one, if so it doesn't go any higher.
    if(activeSong.volume <= 1 && direction == "up"){
        activeSong.volume = activeSong.volume + (number / 100);
    }
    
    //Finds the percentage of the volume and sets the volume meter accordingly.
    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeSlider = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;
    
    document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}
//Sets the location of the song based off of the percentage of the slider clicked.
function setLocation(percentage){
    activeSong.currentTime = activeSong.duration * percentage;
}
/*
Gets the percentage of the click on the slider to set the song position accordingly.
Source for Object event and offset: http://website-engineering.blogspot.com/2011/04/get-x-y-coordinates-relative-to-div-on.html
*/
function setSongPosition(obj,e){
    //Gets the offset from the left so it gets the exact location.
    var songSliderWidth = obj.offsetWidth;
    var evtobj=window.event? event : e;
    clickLocation =  evtobj.layerX - obj.offsetLeft;
    
    var percentage = (clickLocation/songSliderWidth);
    //Sets the song location with the percentage.
    setLocation(percentage);
}

//Set's volume as a percentage of total volume based off of user click.
function setVolume(percentage){
    activeSong.volume =  percentage;
    
    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeSlider = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;
    
    document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

//Set's new volume id based off of the click on the volume bar.
function setNewVolume(obj,e){
    var volumeSliderWidth = obj.offsetWidth;
    var evtobj = window.event? event: e;
    clickLocation = evtobj.layerX - obj.offsetLeft;
    
    var percentage = (clickLocation/volumeSliderWidth);
    setVolume(percentage);
}
//Stop song by setting the current time to 0 and pausing the song.
function stopSong(){
    activeSong.currentTime = 0;
    activeSong.pause();
}
function showPlayer_new(mp3id,h,artist,title)
{
	var player_div = document.getElementById("player"+mp3id);
	var button = document.getElementById("lk"+mp3id);
	if(button.innerHTML === "Stop")
	{
		player_div.innerHTML = "";
		button.innerHTML = "Play";
		stopSong();
	}
	else
	{
		var elements2 = document.getElementsByTagName('a');
		  for (i=0; i<elements2.length; i++){
			if (elements2[i].className=="play_now"){
			  elements2[i].innerHTML='Play';
			}
			if (elements2[i].className=="embed"){
			  elements2[i].innerHTML='Embed';
			}
		  }
		  
		var elements = document.getElementsByTagName('div');
		  for (i=0; i<elements.length; i++){
			if (elements[i].className=="player"){
			  elements[i].innerHTML='';
			}
		  }
		  
		player_div.innerHTML = ''; 
		if (window.XMLHttpRequest)
		  {
		  xmlhttp=new XMLHttpRequest()
		  }
		else
		  {
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
		  }
		
		var html5_param = '';
		if(canPlayMp3ViaHtml5) {
			html5_param = '&html5=true';
		}
		
		if(html5_audio_player && firstPlayerLoad) {
			html5_audio_player.play();
			html5_audio_player.pause();
			firstPlayerLoad = false;
		}
		
		xmlhttp.open("GET", "/sp_new_html5_2.php?mp3id="+mp3id+"&ref="+h+html5_param);
		player_div.innerHTML = '<img src="/img/loading.gif" border="0" style="vertical-align:middle;">';
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				player_div.innerHTML = xmlhttp.responseText; 
				button.innerHTML = "Stop";
				
				if(canPlayMp3ViaHtml5) {
					html5_audio_player.setAttribute('src', document.getElementById('download_url_'+mp3id).value);
					// autoplay when loaded...
					playPause('song');
				}			
			}
		}
		xmlhttp.send(null);

		//reload first banner
		banner_div = document.getElementById("adr_banner");
		banner_div.innerHTML = '';
		banner_div.innerHTML = "<iframe frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"NO\" width=\"300\" height=\"250\" src=\"http://mp3skull.com/call_banner_exec_new.html?c1=" + artist + "&c2=" + title + "&my_zid=6\"></iframe>";		
		
		// reload second banner
		banner_div_2 = document.getElementById("adr_banner_2");
		banner_div_2.innerHTML = '';
		banner_div_2.innerHTML = "<iframe frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"NO\" width=\"300\" height=\"250\" src=\"http://mp3skull.com/call_banner_exec_new.html?c1=" + artist + "&c2=" + title + "&my_zid=32\"></iframe>";		

		// reload third banner
		banner_div_3 = document.getElementById("adr_banner_3");
		banner_div_3.innerHTML = '';
		banner_div_3.innerHTML = "<iframe frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"NO\" width=\"728\" height=\"90\" src=\"http://mp3skull.com/call_banner_exec_new.html?c1=" + artist + "&c2=" + title + "&my_zid=9\"></iframe>";		

		// reload fourth banner
		banner_div_4 = document.getElementById("adr_banner_4");
		banner_div_4.innerHTML = '';
		banner_div_4.innerHTML = "<iframe frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"NO\" width=\"468\" height=\"60\" src=\"http://mp3skull.com/call_banner_exec_new.html?c1=" + artist + "&c2=" + title + "&my_zid=8\"></iframe>";		

	}
}
function canPlayMp3() {
	var a = document.createElement('audio');
	return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
}
function dlreg(id, h)
{
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest()
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
	} 

	xmlhttp.open("GET", "/regdown.php?id=" + id + "&k=" + h); 
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		}
	}
	
	xmlhttp.send(null); 		
}
if(canPlayMp3ViaHtml5) {
	document.addEventListener("DOMContentLoaded", function() {
		html5_audio_player = document.createElement('audio');
		html5_audio_player.setAttribute('id', 'song');
		html5_audio_player.setAttribute('ontimeupdate', 'updateTime()');
		html5_audio_player.setAttribute('type', 'audio/mp3');
		document.body.appendChild(html5_audio_player);		
	});
}