angular.module('moduleCidades', [])

.controller('cidadesController', function($scope, requestService, navService){
	$(document).ready(function() {
		$('select').material_select();
		$('.modal').modal();
   });
  
	$scope.cidade = {};
	$scope.cidadelist = [];
   
	findAllCidades();
   
	function findAllCidades() {
		$.blockUI({ message:  navService.getloading() });
		requestService.findAllCidades()
	    	.then(function(response) {
				$.unblockUI();
	      		$scope.cidadelist = response;
	    	}, function(error) {
				$.unblockUI();
				// alert("Erro de requisição, não foi possível carregar cidades");
	       		console.log("erro de requisicao", error);
			}
		);
	};
	   
    $scope.cadastrarCidade = function() {
		$.blockUI({ message:  navService.getloading() });
        requestService.cadastrarCidade($scope.cidade)
			.then(function(response) {
				$.unblockUI();
				$('.modal').modal('close');
			findAllCidades();
			}, function(error) {
				$('.modal').modal('close');
				$.unblockUI();
				// alert("Erro no servidor");
				console.log("erro de requisicao", error);
			}
		);
	};
	
	$scope.editarCidade = function() {
		$.blockUI({ message:  navService.getloading() });
	    requestService.editarCidade($scope.cidade)
			.then(function(response) {
				$.unblockUI();
				$('.modal').modal('close');
				findAllCidades();
			}, function(error) {
				$.unblockUI();
				// alert("Erro no servidor");
				console.log("erro de requisicao", error);
				$('.modal').modal('close');
			}
		);
	};
	
	$scope.excluirCidade = function(id_cidade) {
		$.blockUI({ message:  navService.getloading() });
	    requestService.excluirCidade(id_cidade)
			.then(function(response) {
				$.unblockUI();
				findAllCidades();
			}, function(error) {
				$.unblockUI();
				// alert("Erro no servidor");
				console.log("erro de requisicao", error);
			}
		);
	};
	
	$scope.modalCidade = function(cidade) {
		$scope.cidade = {};
		if(cidade == null) {
    		$scope.tipoModal = 'add';
    	} else {
    		$scope.tipoModal = 'edit';
    		$scope.cidade.id = cidade.id;
    		$scope.cidade.nome = cidade.nome;
    		$scope.cidade.estado = cidade.estado;
    	}
	};
});