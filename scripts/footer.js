//footer.js
Vue.component('headline', {
    props: ['title'],
    template: '<p align="center">&nbsp;&nbsp;&nbsp;<a v-bind:src="contact.html">{{title}}</a> | <a href="#">Site Map</a></p>'
    '
  })

document.addEventListener("DOMContentLoaded", function(){
	let topnav = new Vue({
		el: '#footerInfo',
	})
})
