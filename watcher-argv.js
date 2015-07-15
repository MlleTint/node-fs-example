const
	fs = require('fs'),
	filename = process.argv[2];
if (! filename) {
	throw Error("a file to watch must be specified!");
}

fs.wathc(filename, function() {
	console.log("File " + filename + " just changed!");

});

console.log("Now watching " + filename + " for changes...");