angular.module('moduleIndex', ['ngRoute', 'ngCookies', 'angular-md5'])

.controller('indexController', function($rootScope, $scope, $http, $timeout, $window, $cookies, $location, md5) {
	$scope.email = '';
	$scope.senha = '';
	$scope.showloading = false;
	$scope.formLoginSistem;
	$scope.loginSistema = function() {
		if($scope.formLoginSistem.$invalid) {
			alert('LOGIN INVÁLIDO');
		} else {
			$scope.showloading = true;
			var userLogin = {};
			userLogin.email = $scope.email;
			userLogin.senha = md5.createHash($scope.senha);
			$http.post('/indexController/logarSistema', userLogin)
				.success(function(dataResponse, status, headers, response) {
					$scope.showloading = false;
					if(dataResponse.type == 'success') {
						$window.location.href = '/redirectTemplate';
					} else {
						Materialize.toast('Usuario e/ou senha, incorretos!', 3000, 'rounded orange accent-4' );
					}
				}).error(function(data) {
					$scope.showloading = false;
					alert("ERRO, LOGIN INVÁLIDO");
			});
		}
	};

	$scope.abrirModalRecuperarSenha = function() {

	};
});
