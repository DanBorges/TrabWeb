angular.module('moduleRoutes', [])

.config(function($routeProvider, $locationProvider, $httpProvider) {

	$routeProvider.when('/home', {
		templateUrl : 'assets/pages/home.html',
		controller  : 'homeController'
	}).when('/menuInicial', {
		templateUrl : 'assets/pages/menuInicial.html',
		controller  : 'menuInicialController'
	}).when('/painel-info-gerais', {
		templateUrl : 'assets/pages/painel-info-gerais.html',
		controller  : 'painelInfoGeraisController'
	}).when('/usuarios', {
		templateUrl : 'assets/pages/usuarios.html',
		controller  : 'usuariosController'
	}).when('/trabalho', {
		templateUrl : 'assets/pages/trabalho.html',
		controller  : 'trabalhoController'
	}).when('/tipo-trabalho', {
		templateUrl : 'assets/pages/tipo-trabalho.html',
		controller  : 'tiposTrabalhosController'
	}).otherwise({
        redirectTo: "/"
  	});

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

});
