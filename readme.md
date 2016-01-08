# Google music playlist capture snippet

## Whats this?

This is a snippet of code you run inside your web browser to create a list of the songs in your play list. 

## Code snippet

```javascript
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
```

## How do I use it?

* While in Goolge Play Music navigate to the play list you wish to export
* Right-click on the page and select "Inspect"
* This will pop open a panel over the page, find and select the "Console" section of this panel
* Copy and paste the code snippet into the console area and press enter
* Wait for the snippet to run through all songs in the list
* When you see the console display the message "Play list copied to clipboard" the script has finished and the results have been copied to your computers clipboard
* You can now open any program such as Word, Excel or a text editor and paste (ctrl + V) to pate this play list information

## Why would I want this?

This snippet was designed to help move from Google Play Music to another music streaming service. 

## Multiple play lists? 

You will need to rerun the process for each play list you want to capture. 

## Things to note

* The data is formatted in CSV list style, you can save this into excel and save as a CSV file if you need.
* The data does NOT contain headers (i.e. "title", "artist" etc) on the first line. You might want to add these depending on what program you are importing your play list to.
* You must be using the current version of Chrome to run the snippet 
* The snippet works correctly as of Jan 2016. If you're experience issues or errors later on Google Music may have changed it's styling
