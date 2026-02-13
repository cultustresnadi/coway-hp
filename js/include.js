document.addEventListener("DOMContentLoaded", function () {
	function loadHTML(id, file) {
	  fetch(file)
	    .then(res => res.text())
	    .then(html => document.getElementById(id).innerHTML = html);
	}

	loadHTML('navbar', 'partials/navbar.html');
	loadHTML('footer', 'partials/footer.html');
	
});

