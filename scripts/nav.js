/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

//For Vue.js implementation on navigation bar
let navigationInfo = [
	{	title: "Home",
		urlSrc: "index.html"
	},
	{	title: "Our Research",
		urlSrc: "research.html"
	},
	{	title: "Data Visualization",
		urlSrc: "data.html"
	},
	{	title: "Contact Us",
		urlSrc: "contact.html"
	}
]

document.addEventListener("DOMContentLoaded", function(){
	let topnav = new Vue({
		el: '#topnav',
		data: {
      		pages: navigationInfo
      	}
	})
})