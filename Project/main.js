// Slideshow - Home section

var i = 0; // Start point
var images = [];
var time = 3000;

// Image List
images[0] = 'Slideshow/1_Wonder Woman.jpg';
images[1] = 'Slideshow/2_Starfire.jpg';
images[2] = 'Slideshow/3_Stitch.jpg';
images[3] = 'Slideshow/4_Peter&MJ.jpg';
images[4] = 'Slideshow/5_Simba.jpg';
images[5] = 'Slideshow/6_Aladdin&Jasmine.jpg';

// Change Image
function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
		i++;
	} else{
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload = changeImg;

// ----------------------------------------
