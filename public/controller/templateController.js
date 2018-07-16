angular.module('templateController',[])

.controller('templateController', function($scope, $http, $timeout, $window, $location, $q, $cookies, userService, painelService, requestService, navService) {
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
		$.blockUI({ message:  navService.getloading() });
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

	$scope.goToTrabalhos = function(){
		console.log('teste')
		$location.path('/trabalho');
	};
	
	$scope.goToTiposTrabalhos = function(){
		console.log('teste')
		$location.path('/tipo-trabalho');
	};
	$scope.redirectPages = function(url) {
		if(painelService.getFlCadastrar() == false) {
			if(painelService.getFlIniciado() == false) {
				painelService.setFlIniciado(false);
				painelService.setId_painel('');
				painelService.setFlCadastrar(false);
				painelService.resetArrayNavTabelas();
				
				$location.path(url);
			} else {
				Materialize.toast('Finalize o painel para que as informações sejam salvas!', 2000, 'rounded orange darken-2');
				
			}

		} else if(painelService.getFlCadastrar() == true && painelService.getFlIniciado() == true){
			if(confirm('Deseja sair sem salvar o painel?')) {
				$scope.excluirPainel(painelService.getId_painel());
				painelService.setFlIniciado(false);
				painelService.setId_painel('');
				painelService.setFlCadastrar(false);
				painelService.resetArrayNavTabelas();
				$location.path(url);
			}
		} else {
			painelService.setFlIniciado(false);
			painelService.setId_painel('');
			painelService.setFlCadastrar(false);
			painelService.resetArrayNavTabelas();
			$location.path(url);
		}
	}
	
	
	$scope.excluirPainel = function(id) {

	      requestService.excluirPainel(id)
	          .then(function(response){
	              findAllPaineis();
	              Materialize.toast('Painel Excluido do Sistema', 2000, 'rounded green darken-1')
	          }, function(){
	      });
	};
	
	function findAllPaineis() {

	      requestService.findAllPaineis()
	          .then(function(response){
	            $scope.listaPaineis = response;
	            listaOriginal = response;
	            if($scope.listaPaineis.length == 0) {
	              $scope.semPaineisCadastrados = true;
	            }
	          }, function(){
	      });
	 };

	$(document).ready(function(){
		$('.dropdown-button').dropdown({
	      inDuration: 300,
	      outDuration: 225,
	      constrainWidth: true, // Does not change width of dropdown to that of the activator
	      hover: false, // Activate on hover
	      gutter: 0, // Spacing from edge
	      belowOrigin: true, // Displays dropdown below the button
	      alignment: 'left', // Displays dropdown with edge aligned to the left of button
	      stopPropagation: false // Stops event propagation
	    });
  	});
})
