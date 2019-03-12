var a = document.getElementById("1");
var b = document.getElementById("9");
var c = document.getElementById("5");
var d = document.getElementById("3");
function nextImage(el){
	if (el.src.match("images/1.png")){
		el.src = "images/2.png";
		checkImages(el);
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/2.png")){
		el.src = "images/3.png";
		checkImages(el);
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/3.png")){
		el.src = "images/4.png";
		checkImages(el);
		// if the image is an orange, change it to a cherry!
  } else if (el.src.match("images/4.png")){
    el.src = "images/5.png";
		checkImages(el);
  } else if (el.src.match("images/5.png")){
    el.src = "images/6.png";
		checkImages(el);
  } else if (el.src.match("images/6.png")){
    el.src = "images/7.png";
		checkImages(el);
  } else if (el.src.match("images/7.png")){
    el.src = "images/8.png";
		checkImages(el);
  } else if (el.src.match("images/8.png")){
    el.src = "images/9.png";
		checkImages(el);
  } else if (el.src.match("images/9.png")){
    el.src = "images/1.png";
		checkImages(el);
	} else {
		// do nothing
	}
}
function checkImages(el) {
	if (a.src.match("images/1.png") && b.src.match("images/9.png") && c.src.match("images/5.png") && d.src.match("images/3.png")){
	console.log("oof");
	window.location.href = "https://richardsonkemai.github.io/escape1/index1.html";
 }
}

