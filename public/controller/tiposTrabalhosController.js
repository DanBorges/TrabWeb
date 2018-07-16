angular.module('moduleTiposTrabalhos', [])

.controller('tiposTrabalhosController', function($scope, requestService, $timeout, md5, navService){
  $(document).ready(function() {
     $('.modal').modal();
   });
   $scope.tiposTrabalhosList = [];
   
   findAllTiposTrabalhos();
   
	function findAllTiposTrabalhos() {
		$.blockUI({ message:  navService.getloading() });
		requestService.findAllTiposTrabalhos()
	    	.then(function(response) {
				console.log(response);
				$.unblockUI();
				  $scope.tiposTrabalhosList = response;
				  console.log($scope.tiposTrabalhosList);
				  console.log('Testeeeeeeeeeeeeeeeee');
	    	}, function(error) {
				$.unblockUI();
	       		console.log("erro de requisicao", error);
			}
		);
	};
 
})