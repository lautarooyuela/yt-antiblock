
var blocked = document.querySelector('input[id="error-screen"]');
var url = window.location.href

if(blocked != "" && url.includes("watch")){
	var urlRedirect = url.replace("youtube", "hooktube");
	window.location.href = urlRedirect;
}

