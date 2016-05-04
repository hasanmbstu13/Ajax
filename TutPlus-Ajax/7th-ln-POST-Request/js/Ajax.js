// An empty object
var Ajax = {};

Ajax.createXHR = function(url, options) {
	// default value
	var xhr = false;
	
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}

	if(xhr) {
		options = options || {};
		options.method = options.method || "GET";

		xhr.onreadystatechange = function(){
			if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				var contentType = xhr.getResponseHeader('Content-Type');

				if (options.complete) {
					if(contentType == "application/json") {
						options.complete.call(xhr, JSON.parse(xhr.responseText));
					} else if (contentType == "text/xml" || contentType == "application/xml"){
						options.complete.call(xhr, xhr.responseXML);
					} else {
						options.complete.call(xhr, xhr.responseText);
					}
				}
			}
		};
		xhr.open(options.method, url, true);
		return xhr;
	} else {
		return false;
	}
};

Ajax.ajax = function (url, options) {
	var xhr = Ajax.createXHR(url,options);

	if(xhr) {
		// Set a header request to give the message to the header that's its an ajax request
		// that's header can diffn between regular & ajax request
		xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
		xhr.send(null);
	}
};