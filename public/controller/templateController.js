angular.module('templateController',[])

.controller('templateController', function($scope, $http, $timeout, $window, $location, $q, $cookies, userService, requestService) {
	$(".button-collapse").sideNav();
	
	$scope.alertaSistemaTemplate = {};
	$scope.primeiroLogin = 0;
	$scope.nomeUsuarioLogado = '';
	$scope.permissaoUsuarioLogado = 0;
	$scope.showLoading = true;

	$.blockUI.defaults.css = {
		padding:	0,
		margin:		0,
		width:		'30%',
		height:     '30%',
		top: 		'35%',
		left:		'35%',
		textAlign:	'center',
		color:		'#000',
		border:		'none',
		backgroundColor:'#fff',
		cursor:		'wait'
	};

	$http.get('/templateController/usuarioLogado')
		.success(function(dataResponse, status, headers, response) {
			if (status = 200) {
				$scope.showLoading = false;
				userService.setNome(dataResponse.nome);
				userService.setId(dataResponse.id);
				userService.setPermissao(dataResponse.permissao);
				$scope.nomeUsuarioLogado = dataResponse.nome;
				$scope.permissaoUsuarioLogado = dataResponse.permissao;
				$location.path('/home');
			}else {
				alert("Problema com o login");
			}
		}).error(function(data) {
			$window.location.href = '/';
		}
	);

	$scope.logoutSistema = function () {
		$http.get('/templateController/logoutSistema').success(function(data) {
			$window.location.href = '/';
			$scope.usuarioLogado = {};
			userService.clearUsuario();
			$.unblockUI();
		}).error(function(data) {
			$.unblockUI();
			Materialize.toast('Falha ao sair', 2000, 'rounded orange darken-2')
		});
	};
	

	$scope.goToUsuarios = function(){
		$location.path('/usuarios');
	};

	$scope.goToTrabalhos = function(){
		$location.path('/trabalho');
	};
	
	$scope.goToTiposTrabalhos = function(){
		$location.path('/tipo-trabalho');
	};
	
	
	

})
