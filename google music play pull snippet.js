// Good as of Jan 2016 using Chrome Browser.
// Paste the snippet into your inspector console. 

var songList = '';
var songCount = 0;
var totalSongsInPlaylist = document.querySelector('table.song-table tbody').getAttribute('data-count');
var curSos = '';
var currentSong = function(i){
	var result = document.querySelectorAll('table.song-table tbody tr.song-row[data-index="'+i+'"]');
	return result;
};


var interval = setInterval(function(){

	if ( songCount < totalSongsInPlaylist )  {

	        curSos = currentSong(songCount);


			var title = curSos[0].querySelectorAll('td[data-col="title"] .column-content')[0].textContent;
			var artist = curSos[0].querySelectorAll('td[data-col="artist"] .column-content')[0].textContent;
			var song = '"'+ title+'"'+','+artist+'\n';
			
			songList += song;
			console.log('Songs logged');
			songCount++;

			curSos[0].scrollIntoView(true);
	}
	else {
		clearInterval(interval);
		copy(songList);
		console.log('Play list copied to clipboard');
		

	}

}, 200);
