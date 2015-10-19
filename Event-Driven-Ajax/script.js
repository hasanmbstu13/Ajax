var mybutton = document.getElementById('loadbutton');
mybutton.onclick = loadAJAX;

function loadAJAX() {
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
			var output = '<ul>';
			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		}
	}
	request.send();
}// loadAJAX

// Alternative Way
// var mybutton = document.getElementById('loadbutton');
// mybutton.onclick = function() {
// 	var request;
// 	if(window.XMLHttpRequest) {
// 		request = new XMLHttpRequest();
// 	} else {
// 		request = new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	request.open('GET', 'data.json');
// 	request.onreadystatechange = function() {
// 		if ((request.readyState===4) && (request.status===200)){
// 			// parsing json data by using ajax and dom technology
// 			var items = JSON.parse(request.responseText);
// 			var output = '<ul>';
// 			for (var key in items) {
// 				output += '<li>' + items[key].name + '</li>';
// 			}
// 			output += '</ul>';
// 			document.getElementById('update').innerHTML = output;
// 		}
// 	}
// 	request.send();
// }// loadAJAX