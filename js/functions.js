/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	continue_next: false,
	callbacks: {
		/* song_change: function(){
			alert('here');
		} */ 
	},
	"songs": [
		{
			"name": "Main Theme",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/DoC_TitleScreen_11162020.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		},
		{
			"name": "Leylia",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/Leylia_forlistening.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		},
		{
			"name": "Cloaked Abomination",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/harkins_phase1_forlistening.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		},
		{
			"name": "Rage of the Ruined Scientist",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/harkins_phase2_forlistening.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		},
		{
			"name": "Astigmatism Apocalpyse",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/LastlySlayer_Phase1_v6_ListeningDemo.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		},
		{
			"name": "ima firin mah lazor!",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/LastlySlayer_Phase2_v6_ListeningDemo.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		},
		{
			"name": "Lunar New Year Event",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/RLLL_%EC%84%A4%EB%82%A0_v2_more_bass.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		},
		{
			"name": "Halloween Event Battle",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/RLLL_halloween_v1.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		},
		{
			"name": "Winter Holiday Event",
			"artist": "Simon Ton",
			"album": "Rogue-like-like-like: Tower of Choice",
			"url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/RLLL+mp3/rlll_xmas_v1.mp3",
			"cover_art_url": "https://gilbert-website-2022-audio-images.s3.amazonaws.com/rlll618.jpg"
		}
		
	]
});