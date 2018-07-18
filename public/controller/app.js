angular.module('app', [ 'userService',
	'requestService',
	'ngRoute',
	'ngCookies',
	'angular-md5',
	'templateController',
	'moduleRoutes',
	'moduleHome',
	'moduleUsuarios',
	'moduleTiposTrabalhos',
	'ui.materialize'])

.filter('unixtimeDateFilter', function () {

	return function(dataUnixtime) {

		if(dataUnixtime != null) {
			if(dataUnixtime.toString().length == 10) {
				dataUnixtime = dataUnixtime * 1000;
			}
//			var data = moment(dataUnixtime);
//			return data.toDate();
			return moment(dataUnixtime).format("DD/MM/YYYY HH:mm:ss");
		}
		return dataUnixtime;
	};
})

.filter('data', function () {

	return function(dataUnixtime) {

		if(dataUnixtime != null) {
			if(dataUnixtime.toString().length == 10) {
				dataUnixtime = dataUnixtime * 1000;
			}
//			var data = moment(dataUnixtime);
//			return data.toDate();
			return moment(dataUnixtime).format("DD/MM/YYYY");
		}
		return dataUnixtime;
	};
})

var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;

    return value.toString().split(".")[1].length || 0;
}