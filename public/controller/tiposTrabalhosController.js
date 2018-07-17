angular.module('moduleTiposTrabalhos', [])

.controller('tiposTrabalhosController', function($scope, requestService, $timeout, md5, navService){
  $(document).ready(function() {
     $('.modal').modal();
   });
   $scope.tiposTrabalhosList = [];
   $scope.tipoTrabalhoObj = {
		   id: '',
		   tipo_trabalho: ''
   };
   
   findAllTiposTrabalhos();
   
	function findAllTiposTrabalhos() {
		$.blockUI({ message:  navService.getloading() });
		requestService.findAllTiposTrabalhos()
	    	.then(function(response) {
				console.log(response);
				$.unblockUI();
				  $scope.tiposTrabalhosList = response;
	    	}, function(error) {
				$.unblockUI();
	       		console.log("erro de requisicao", error);
			}
		);
	};
	
	
	
	$scope.cadastrarEditarTipoTrabalho = function() {
		if($scope.formTipoTrabalho.$valid) {
			$.blockUI({ message:  navService.getloading() });
	        var tipoTrabalho = {
	        		id: $scope.tipoTrabalhoObj.id,
	        		tipoTrabalho: $scope.tipoTrabalhoObj.tipo_trabalho
	              };
	        $scope.tipoTrabalhoObj = $scope.tipoTrabalho;
			requestService.cadastrarEditarTipoTrabalho(tipoTrabalho)
				.then(function(response) {
					$.unblockUI();
					findAllTiposTrabalhos();
					Materialize.toast('Tipo de Trabalho cadastrado com Sucesso!', 800, 'rounded green accent-4');
				}, function(error) {
					$.unblockUI();
					// alert("Erro no servidor");
					console.log("erro de requisição", error);
				}
			);
		} else {
			$.unblockUI();
			Materialize.toast('Alguns campos não foram preenchidos ou são inválido', 1000, 'rounded orange accent-3 black-text');
			
		}
	};
	
	$scope.editarLinhaTipoTrabalho = function(obj){
		console.log(obj);
		$scope.tipoTrabalhoObj = {};
		$scope.tipoTrabalhoObj.id = obj.id;
		$scope.tipoTrabalhoObj.tipo_trabalho = obj.tipoTrabalho;

	};
	
	$scope.limparCamposModal = function(){
		$scope.tipoTrabalhoObj = {};
	};
 
})