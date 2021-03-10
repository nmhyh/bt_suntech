var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName('card-slideshow');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = 'block';
	setTimeout(carousel, 2000); // Change image every 2 seconds
}

// function search() {
// 	let search = document.getElementById('block-input-search');
// 	search.style.display = 'inline-block';
// }
