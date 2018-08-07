menu.onclick = function myFunction() {
	console.log('ads')
	var x = document.getElementById("myTopnav");

	if(x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
};

addNewBlogId.onclick =  function () {
    console.log(2+2);
}