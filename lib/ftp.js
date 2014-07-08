var JSFtp = require("jsftp");

var ftp = {
	init: function(conf){
		return new JSFtp(conf);
	}
}

module.exports = ftp;