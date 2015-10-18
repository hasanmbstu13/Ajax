var request;
if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)){
		// parsing json data by using ajax and dom technology
		var items = JSON.parse(request.responseText);
		console.log(items);
	}
}
request.send();