var a = document.getElementById("1");
var b = document.getElementById("9");
var c = document.getElementById("5");
var d = document.getElementById("3");
function nextImage(el){
	if (el.src.match("images/1.PNG")){
		el.src = "images/2.PNG";
		checkImages(el);
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/2.PNG")){
		el.src = "images/3.PNG";
		checkImages(el);
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/3.PNG")){
		el.src = "images/4.PNG";
		checkImages(el);
		// if the image is an orange, change it to a cherry!
  } else if (el.src.match("images/4.PNG")){
    el.src = "images/5.PNG";
		checkImages(el);
  } else if (el.src.match("images/5.PNG")){
    el.src = "images/6.PNG";
		checkImages(el);
  } else if (el.src.match("images/6.PNG")){
    el.src = "images/7.PNG";
		checkImages(el);
  } else if (el.src.match("images/7.PNG")){
    el.src = "images/8.PNG";
		checkImages(el);
  } else if (el.src.match("images/8.PNG")){
    el.src = "images/9.PNG";
		checkImages(el);
  } else if (el.src.match("images/9.PNG")){
    el.src = "images/1.PNG";
		checkImages(el);
	} else {
		// do nothing
	}
}
function checkImages(el) {
	if (a.src.match("images/1.PNG") && b.src.match("images/9.PNG") && c.src.match("images/5.PNG") && d.src.match("images/3.PNG")){
	console.log("oof");
	window.location.href = "http://google.com";
 }
}
var button = document.getElementById('button');
button.setAttribute("href", "https://www.google.com");
