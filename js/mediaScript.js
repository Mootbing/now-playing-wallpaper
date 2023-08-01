// datum input: {
//   "AlbumArtist": "Various Artists",
//   "AlbumTitle": "NCS: The Best of 2015",
//   "AlbumTrackCount": 0,
//   "Artist": "Cartoon",
//   "Genres": [],
//   "PlaybackType": "Music",
//   "Subtitle": "",
//   "Thumbnail": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz3..",
//   "Title": "On & On",
//   "TrackNumber": 0
// }

function livelyCurrentTrack(data) {
  let obj = JSON.parse(data);
  //when no track is playing its null
  if (obj != null)
  {
    document.getElementsByClassName("media-controls")[0].style.display = "none";

    document.getElementsByClassName("player-box")[0].style.width = "300px";
    document.getElementsByClassName("player-box")[0].style.height = "120px";

    //set the title and artist
    document.getElementsByClassName("song-title")[0].innerHTML = obj.Title.length > 20 ? obj.Title.substring(0, 20) + "..." : obj.Title;
    document.getElementsByClassName("artist-name")[0].style.display = "block";
    document.getElementsByClassName("song-title")[0].style.marginTop = "5px";
    document.getElementsByClassName("song-title")[0].style.color = "#fff";
    document.getElementsByClassName("slider-container")[0].style.display = "flex";
    document.getElementsByClassName("thumbnail")[0].style.display = "block";
    document.getElementsByClassName("artist-name")[0].innerHTML = obj.Artist.length > 14 ? obj.Artist.substring(0, 14) + "..." : obj.Artist;
    document.getElementsByClassName("active-icon")[0].style.display = "block";

    //set the thumbnail
    document.getElementsByClassName("thumbnail")[0].src = "data:image/png;base64," + obj.Thumbnail;

    if (obj.Thumbnail != null)
    {
        //base64 string
        console.log(obj.Thumbnail);
    }
  }
  else {
    document.getElementsByClassName("song-title")[0].innerHTML = "Not playing";
    document.getElementsByClassName("song-title")[0].style.marginTop = "0px";
    document.getElementsByClassName("song-title")[0].style.color = "#888";

    document.getElementsByClassName("artist-name")[0].style.display = "none";
    document.getElementsByClassName("slider-container")[0].style.display = "none";
    document.getElementsByClassName("thumbnail")[0].style.display = "none";
    document.getElementsByClassName("media-controls")[0].style.display = "none";
    // set active icon image src to the inactive.png

    document.getElementsByClassName("thumbnail")[0].src = "./img/noImage.png";

    document.getElementsByClassName("player-box")[0].style.width = "150px";
    document.getElementsByClassName("player-box")[0].style.height = "50px";

    document.getElementsByClassName("active-icon")[0].style.display = "none";
  }
}

function livelyAudioListener(audioArray) 
{
  let maxVolume = 0;

  for (const volume of audioArray) {
    if (volume > maxVolume)
    {
      maxVolume = volume;
    }
  }

  document.getElementsByClassName("slider-knob")[0].style.marginTop = Math.max(0, (83 - (maxVolume * 83)) - 22) + "px";

  // document.getElementsByClassName("song-title")[0].innerHTML = maxVolume;

  if (maxVolume < 0.02)
  {
    document.getElementsByClassName("active-icon")[0].src = "./img/inactive.png";
    document.getElementsByClassName("active-icon")[0].style.animation = "none";
    document.getElementsByClassName("active-icon")[0].style.marginTop = "2.5px";
    document.getElementsByClassName("active-icon")[0].style.marginBottom = "-2.5px";
  }
  else {
    document.getElementsByClassName("active-icon")[0].src = "./img/active.png";
    document.getElementsByClassName("active-icon")[0].style.animation = "bouncingActiveIndicator 1s infinite";
    document.getElementsByClassName("active-icon")[0].style.marginTop = "10px";
    document.getElementsByClassName("active-icon")[0].style.marginBottom = "-10px";
  }
}

// function livelyWallpaperPlaybackChanged(data)
// {
//  var obj = JSON.parse(data);
//  if (obj.IsPaused) {
//     document.getElementsByClassName("play-pause")[0].src = "./img/play.png";
//  }
//  else {
//     document.getElementsByClassName("play-pause")[0].src = "./img/pause.png";
//  }
// }