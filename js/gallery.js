// STEP 1: Initialize and declare variables
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

// STEP 2: Loop 5 times to create the <img> elements
for (var i = 1; i < 6; i ++) {
	var newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic' + i + '.jpg');
	thumbBar.appendChild(newImage);
}

// STEP 4: Function to change the src of the main <img>
function displayImage(value) {
	displayedImage.setAttribute('src', value);
}

// STEP 5: Event Delegation
thumbBar.onclick = function(event) {
	if (event.target && event.target.nodeName === 'IMG') {
		var imgSrc = event.target.getAttribute('src');
		displayImage(imgSrc);

		clearWayfinding();
		// Lab 6 STEP A: Inside the thumbBar.onclick event handler function, and also inside the if statement
		event.target.style.outline = "5px solid red"; // Changing CSS outline
		// Lab 6 STEP B:
		event.target.style.position = "relative"; // Changing CSS position
		// Lab 6 STEP C:
		event.target.style.zIndex = "10"; // Changing CSS z-index
	}
};

// Lab 6 STEP D:
var thumbImgs = document.querySelectorAll('.thumb-bar img'); // Grabbing all the IMG elements inside the .thumb-bar

// Lab 6 STEP E:
function clearWayfinding() {
	// Lab 6 STEP F:
	for (var i = 0; i < thumbImgs.length; i++) {
		thumbImgs[i].style.outlineWidth = "0"; // Setting CSS outline-width property to "0"
		thumbImgs[i].style.zIndex = "0"; // Setting CSS z-index property to "0"
	}
}

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate