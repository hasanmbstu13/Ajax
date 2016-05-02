(function() {
	// Target the element
	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		// XHR Object
		var xhr = new XMLHttpRequest();

		// handle the "onreadystatechange" event
		// xhr.readyState property values
		// 0 = uninitialized basically meaning that the request hasn't open yet
		// 1 = Loading basically meaning the request has been opened
		// 2 = Loaded that means request has been sent to the server
		// 3 = Interactive i.e server process the request & reponse back
		// 4 = Complete i.e. request is finished we access to the server response

		// open the request
		// first one is method second one is file & third is request is asynchronous or synchrounous
		// by default asynchronous & true means asynchronous
		

		xhr.onreadystatechange = function(){
			if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				// xhr.responseText;
				// console.log(xhr.responseText);
				
				var body = document.getElementsByTagName("body")[0];
				// console.log(body);
				var p = document.createElement("p");
				var pText = document.createTextNode(xhr.responseText);
				p.appendChild(pText);
				body.appendChild(p);
			}
		};
		
		xhr.open("GET", "files/ajax.txt", true);
		// send the request
		// xhr.send(null) is null because our request is get not a post method
		xhr.send(null);

		// In able to disable the default behavior of our link	
		return false;  
	}
})();