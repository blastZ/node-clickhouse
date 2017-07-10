var nodeVer = process.version.substr (1).split ('.');

if (nodeVer[0] < 4) {
	global.Promise = global.Promise || require ('bluebird');
	Object.assign  = Object.assign  || require ('object-assign');
}

if (nodeVer[0] < 6) {
	require ('buffer-indexof-polyfill');
}

if (nodeVer[0] < 8) {
	require ('util.promisify');
}