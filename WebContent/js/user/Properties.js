var URIConfiguration = {
		'PROTOCOL' : 'http',
		'DOMAIN_NAME' : 'localhost',
		'PORT_NUMBER' : '3333',
		'PROJECT_NAME' : 'MobileComparisonApp'
	}

	var getURI = function(){
		var URL = URIConfiguration.PROTOCOL + "://" + URIConfiguration.DOMAIN_NAME + ":" + URIConfiguration.PORT_NUMBER + "/" + URIConfiguration.PROJECT_NAME + "/api/";
		return URL;
	}
