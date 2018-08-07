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
    /*$('<h1></h1>', {
        text: 'New Insert Text'
    }).appendTo($('div#windowForNewBlog'));*/
    var div = document.createElement('div');
    div.innerHTML = '<div class="blog-header">\n' +
        '\t\t\t\t\t\t<div class="blog-cover">\n' +
        '\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t<div class="blog-body">\n' +
        '\t\t\t\t\t\t<div class="blog-title">\n' +
        '\t\t\t\t\t\t\t<h1><a href="#">Lorem ipsum dolor sit amet.</a></h1>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t<div class="blog-text">\n' +
        '\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum molestias reprehenderit deserunt totam, iure aspernatur nam cupiditate eaque at laborum voluptate repellat commodi. Reiciendis hic culpa quas tempore sed eaque, sapiente? Quasi sapiente laborum doloribus minus doloremque, sed incidunt eaque!</p>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t<div class="blog-tags">\n' +
        '\t\t\t\t\t\t\t<ul>\n' +
        '\t\t\t\t\t\t\t\t<li><a href="#">Lorem</a></li>\n' +
        '\t\t\t\t\t\t\t\t<li><a href="#">ipsum</a></li>\n' +
        '\t\t\t\t\t\t\t\t<li><a href="#">dolor</a></li>\n' +
        '\t\t\t\t\t\t\t\t<li><a href="#">consectetur</a></li>\n' +
        '\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t<div class="blog-footer">\n' +
        '\t\t\t\t\t\t<ul>\n' +
        '\t\t\t\t\t\t\t<li class="published-date">4 days ago</li>\n' +
        '\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t</div>';
    div.className = 'blog-container-new';
    blogContainer.appendChild(div);
}
