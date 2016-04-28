(function() {
	// Target the element
	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		Ajax.ajax('files/ajax.json', {
			method 		: "GET",
			complete 	: function(response) {
				// so now user can use this or response for grab the response
				// This is will ran when our ajax request is complete & ready to update
				var body = document.getElementsByTagName("body")[0];
				
				// responseText & response is same thing
				// var json = JSON.parse(xhr.response);

				var json = response;

				alert(json);
				// console.log(json);

				var heading		= json.heading;
				var h2 			= document.createElement("h2");
				var h2Text		= document.createTextNode(heading);
				h2.appendChild(h2Text);

				var list 		= document.createElement("ul");

				// This will return only the items tag but we need digging further
				var items 		= json.items;

				for(var key in items) {
					var item 	= items[key];
					var li 	 	= document.createElement("li");
					var liText 	= document.createTextNode(item);
					li.appendChild(liText);
					list.appendChild(li);

				}
				body.appendChild(h2);
				body.appendChild(list);



				body.removeChild(link);
			}
		});
		// XHR Object

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
			
		// send the request
		// xhr.send(null) is null because our request is get not a post method

		// In able to disable the default behavior of our link	
		return false;  
	}
})();